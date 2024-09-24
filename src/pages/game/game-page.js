import { LitElement, html } from 'lit';
import { gamePageStyles } from './game-page-styles.js';
import { commonStyle } from '../../styles/common.js';
import { MoleManager } from '../../managers/mole-manager/mole-manager.js'
import {
  TIME_LEVEL,
  TILES_NUMBER,
  STATES,
  MOLE_STATUS,
  LEVELS_LIST,
} from '../../utils/constants.js';
import '../../components/custom-header/custom-header.js';
import '../../components/mole-tile/mole-tile.js';
import '../../components/custom-button/custom-button.js';
import '../../components/notification-message/notification-message.js';

export class GamePage extends LitElement {
  static get styles() {
    return [gamePageStyles, commonStyle];
  }

  /**
   * @property {String} name - Player's name
   */
  static get properties() {
    return {
      playerName: { type: String, attribute: 'player-name' },
      _points: { type: Number },
      _buttonTitle: { type: String },
      _tilesAltArray: { type: Array },
      _levelList: { type: Array },
      _levelListSelector: { type: Array },
      _moleRender: { type: Object },
      _openNotification: {type: Boolean }
    };
  }

  constructor() {
    super();
    this.playerName = '';
    this._moleManager = new MoleManager();
    this._levelSelected = 'Low';
    this._levelList = this._moleManager.getLevels();
    this._levelListSelector = [...LEVELS_LIST];
    this._timerId = null;
    this._buttonTitle = STATES.play;
    this._points = 0;
    this._moleTilesList = '';
    this._previousTileSelected = false;
    this._currentTileSelected = 0;
    this._tilesAltArray = this._moleManager.generateTiles(TILES_NUMBER);
    this._listAux = this._moleManager.generateTiles(TILES_NUMBER);
    this._moleRender = {
      list: [...this._tilesAltArray],
    };
    this._gameState = STATES.stop;
    this._openNotification = false;
  }

  _handleButton() {
    if (this._buttonTitle === STATES.play) {
      this._buttonTitle = STATES.stop;
      this._startGame();
    } else {
      this._buttonTitle = STATES.play;
      this._gameState = STATES.stop;
      this._pauseGame();
      this._points = this._moleManager.restartPoints();
      this._resetTiles();
    }
  }

  _pauseGame() {
    if (this._timerId) {
      clearInterval(this._timerId);
      this._timerId = null;
    }
    return true;
  }

  _startGame() {
    this._timerId =  setInterval(() => this._showMoleAlt(), TIME_LEVEL[this._levelSelected]);
    this._gameState = STATES.play;
  }

  _showNotification() {
    this._openNotification = true;
    setTimeout(() => {
      this._openNotification = false;
    }, 1500);
  }

  _resetTiles() {
    console.log(this._listAux);
    this._moleRender = {
      ...this._moleRender,
      list: [...this._listAux]
    };
  }

  _showMoleAlt() {
    this._currentTileSelected = this._moleManager.getRandomTile(TILES_NUMBER, this._previousTileSelected);
    if (this._previousTileSelected) {
      this._tilesAltArray[this._previousTileSelected].show = false;
    }
    this._previousTileSelected = this._currentTileSelected;
    this._tilesAltArray[this._currentTileSelected].show = true;
    this._tilesAltArray[this._currentTileSelected].status = MOLE_STATUS.alive;

    this._moleRender = {
      ...this._moleRender,
      list: [...this._tilesAltArray]
    };
  }

  _clickMole(ev) {
    if (ev.target.showMole && this._tilesAltArray[this._currentTileSelected].status === MOLE_STATUS.alive) {
      this._savePoints();
      this._tilesAltArray[this._currentTileSelected].status = MOLE_STATUS.dead;
      this._showNotification();
      // navigator.vibrate(200);
    }
  }

  _savePoints() {
    this._points += this._moleManager.getPointsByLevel(this._levelSelected)
  }

  _setLevel(ev) {
    this._levelSelected = ev.detail.value;

    if (this._gameState === STATES.play) {
      this._pauseGame();
      this._startGame();
    }
  }

  render() {
    return html`
      <custom-header
        @change-select-value=${this._setLevel}
        player-name="${this.playerName}"
      >
        <div slot="left-side">
          <span class="player-name">${this.playerName}</span>
        </div>
        <div slot="right-side">
          <custom-select
            label-name="Level:"
            .listOptions=${this._levelListSelector}
          ></custom-select>
        </div>
      </custom-header>
      <p class="points">Points: ${this._points}</p>
      <section class="mole-container">
        ${this._moleRender.list.map(item => {
          return html` 
            <mole-tile 
              id=${item.id}
              ?show-mole=${item.show}
              @click=${this._clickMole}
            ></mole-tile>`;
        })}
      </section>
      <div class="button-container">
        <custom-button 
          data-state=${this._state}
          @click=${this._handleButton}
        >${this._buttonTitle}</custom-button>
      </div>
      
      <notification-message message="Well done" ?show=${this._openNotification}></notification-message>
    `;
  }
}

customElements.define('game-page', GamePage);
