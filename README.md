# Prueba técnica BBVA kill

<a href="https://bbvaengineering.github.io/challenges/kill/" target="_blank">https://bbvaengineering.github.io/challenges/kill/</a>

## Requisitos
- La aplicación deberá contener funcionalmente, como mínimo, las instrucciones detalladas en el enunciado.
- El código debe ser público
- Se deberán realizar tests unitarios de las vistas y de los componentes de la aplicación.
- Se podrá utilizar cualquier infraestructura de alojamiento pública como, por ejemplo, ***Vercel***, Netlify o Github Pages.
  Url App: <a href="https://main--spontaneous-mooncake-c7fe9a.netlify.app/" target="_blank">https://main--spontaneous-mooncake-c7fe9a.netlify.app/</a>
- Se debe subir un fichero README.md al repositorio con las instrucciones para hacer funcionar la aplicación en local. Puedes añadir cualquier otro dato que consideres necesario.


## Otras consideraciones
  Se puede utilizar cualquier herramienta, librería o framework, dentro del ecosistema de JavaScript.
    
  Si crees que lo anterior no es suficiente y quieres demostrarnos todo lo que sabes, se valorarán muy positivamente otros puntos como:
  La calidad, claridad y limpieza del código.
  El uso de componentes reutilizables.
  La realización de otro tipo de tests.
  Herramientas de análisis estático y formateo de código que mejoren la experiencia del desarrollador.
  Mejoras en el flujo y la metodología de desarrollo, construcción y despliegue.
  Otras características que consideres importantes para una aplicación web progresiva.

### Decisiones especificas
- Se ha completado la tarea de visualizar varios topos al mismo tiempo (configurable)
- Se ha creado la clase moleManager para separar métodos específicos
- Se ha creado el archivo constants.js donde está toda la configuración del minijuego

## Tecnologias utilizadas

**lit-element**: Creación de componentes web.
**webpack**: Empaquetar la aplicación.
**husky**: para lanzar los test antes de realizar un push "así evitamos que se suban test fallidos, y se mantenga la calidad del código".
**eslint**: Mantener la calidad del código.
**prettier**: formateo de código.
  ### tests
    **jest**: Test unitarios.
    **jest-axe**: Test de accesibilidad.
    **jest-dom**: Test de dom.
    **shadow-dom-testing-library**: Test de componentes web que contengan shadow dom

## Pasos para arrancar el proyecto en local
- Clonar el repositorio
```bash
git clone
```
- Instalar dependencias
```bash
npm install
```
- Arrancar la aplicación
```bash
npm run start
```
- Url local de la aplicación
```bash
http://localhost:8001/
```

### Para poder ejectutar los test unitarios

```bash
npm run test
```


