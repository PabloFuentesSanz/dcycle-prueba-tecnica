
Para iniciar el proyecto:
1. Asegurese de haber iniciado el servidor de test-backend-app.
2. Sobre la raiz del proyecto dcycle-prueba-tecnica, ejecute el comando `npm run dev`, esto le desplegará la aplicación en `http://127.0.0.1:3000/`
SS
A continuación voy a explicar la organización del proyecto así como las decisiones que he tomado en la realización de los ejercicios.
1. En primer lugar he decidido usar Vite para la creación del proyecto y TypeScript como lenguaje para poder modelar las respuestas de las API's.
2. He decidido usar ChakraUI como biblioteca de estilos para tener acceso a una serie de estilos básicos en los componentes y ciertos iconos.
3. He usado la biblioteca de axios para las llamadas HTTP. 
4. He usador react-router-dom para enrutar la aplicación.
5. Se han usado unas pequeñas view-transitions para darle algo de dinamismo al desplazarse entre páginas. Esta funcionalidad está limitada en algunos navegadores. 

El proyecto he decidido organizarlo de la siguiente manera:
1. Una carpeta pages con los componentes más genéricos que conforman las páginas de la aplicación y que están enrutados.
   1.1 Home: La página principal en la que puedes elegir a qué ejercicio acceder.
   1.2 Ejercicio1: Enrutado como WhoCouldYouBe, es el ejercicio que devuelve la información pasado un nombre.
   1.3 Ejercicio2: Enrutado como CovidChronicle, es el ejercicio que muestra registros del COVID en USA por días.
2. Una carpeta components donde se encuentran los componentes genéricos y otros componentes específicos de ambos ejercicios.
   2.1 BackHome: Es el botón que permite volver al Home
   2.2 Loading: Es el spinner de carga que se muestra mientras está realizando la llamada a la API.
   2.3 NameResult: El componente del ejercicio 1 donde se muestran los resultados del nombre insertado.
   2.4 CovidResult: El componente del ejercicio 2 donde se despliega la lista de fechas de los registros.
   2.5 CovidDetails: El componente que muestra en detalle el registro que se solicita.
3. Una carpeta models con los modelos de datos.
   3.1 NameModels: Los modelos del ejercicio 1.
   3.2 CovidDataModels: Los modelos del ejercicio 2.
4. App.css para los estilos generales y algunos específicos.
5. ColorPalette.css donde se han definido como variables la paleta de colores usada en el proyecto.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
