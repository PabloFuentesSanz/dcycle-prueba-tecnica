
# Para iniciar el proyecto:
1. Asegurese de haber iniciado el servidor de test-backend-app.
2. Sobre la raiz del proyecto dcycle-prueba-tecnica, ejecute el comando `npm run dev`, esto le desplegará la aplicación en `http://127.0.0.1:3000/`

# Decisiones:
1. En primer lugar he decidido usar Vite para la creación del proyecto y TypeScript como lenguaje para poder modelar las respuestas de las API's.
2. He decidido usar ChakraUI como biblioteca de estilos para tener acceso a una serie de estilos básicos en los componentes, toasters de notificaciones y ciertos iconos.
3. He usado la biblioteca de axios para las llamadas HTTP. 
4. He usador react-router-dom para enrutar la aplicación.
5. Se han usado unas pequeñas view-transitions para darle algo de dinamismo al desplazarse entre páginas. Esta funcionalidad está limitada en algunos navegadores. 

# Organización del proyecto:
1. Una carpeta **pages** con los componentes más genéricos que conforman las páginas de la aplicación y que están enrutados.
   * **Home**: La página principal en la que puedes elegir a qué ejercicio acceder.
   * **Ejercicio1**: Enrutado como WhoCouldYouBe, es el ejercicio que devuelve la información pasado un nombre.
   * **Ejercicio2**: Enrutado como CovidChronicle, es el ejercicio que muestra registros del COVID en USA por días.
2. Una carpeta **components** donde se encuentran los componentes genéricos y otros componentes específicos de ambos ejercicios.
   - En la carpeta **general** encontraremos los componentes genéricos:
     * **BackHome**: Es el botón que permite volver al Home
     * **Loading**: Es el spinner de carga que se muestra mientras está realizando la llamada a la API.
   - En la carpeta **ejercicio1** encontraremos los componentes del Ejercicio 1: 
     * **NameResult**: El componente del ejercicio 1 donde se muestran los resultados del nombre insertado.
   - En la carpeta **ejercicio2** encontraremos los componentes del Ejercicio 2:
     * **CovidResult**: El componente del ejercicio 2 donde se despliega la lista de fechas de los registros.
     * **CovidDetails**: El componente que muestra en detalle el registro que se solicita.
     * **DataRow**: Componente que muestra de forma genérica las filas de la información de cada tipo de los resultados de la API de COVID.
     * **GenericChart**: Componente que representa un gráfico de los datos recibidos en función del tipo que sean.
4. Una carpeta **models** con los modelos de datos.
   * **NameModels**: Los modelos del ejercicio 1.
   * **CovidDataModels**: Los modelos del ejercicio 2.
5. Una carpeta **utils** con funciones extraidas de la aplicacion.
6. **App.css** para los estilos generales y algunos específicos.
7. **ColorPalette.css** donde se han definido como variables la paleta de colores usada en el proyecto.

![image](https://github.com/PabloFuentesSanz/dcycle-prueba-tecnica/assets/51823158/b7ba8fe3-3f25-4adf-b66f-1d205eb8dd1f)
![image](https://github.com/PabloFuentesSanz/dcycle-prueba-tecnica/assets/51823158/6be854d9-42e9-4f7f-a1b3-6190fd7b7be3)
![image](https://github.com/PabloFuentesSanz/dcycle-prueba-tecnica/assets/51823158/aa4366c6-8d3f-4ef8-9f4e-ddfc8e960d7f)
![image](https://github.com/PabloFuentesSanz/dcycle-prueba-tecnica/assets/51823158/293a2b6c-95e0-4c43-85e5-9a15c7628bbf)


