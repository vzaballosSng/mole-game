import { LitElement, html } from 'lit';
import { notificationMessageStyles } from './notification-message-styles.js';

export class NotificationMessage extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      show: { type: Boolean }
    };
  }

  static get styles() {
    return [notificationMessageStyles];
  }

  constructor() {
    super();
    this.message = '';
  }

  render() {
    return html`<p class="message">${this.message}</p>
   `;
  }
}

window.customElements.define('notification-message', NotificationMessage);

