
# Para iniciar el proyecto:
1. Asegurese de haber iniciado el servidor de test-backend-app.
2. Sobre la raiz del proyecto dcycle-prueba-tecnica, ejecute el comando `npm run dev`, esto le desplegará la aplicación en `http://127.0.0.1:3000/`

# Decisiones:
1. En primer lugar he decidido usar Vite para la creación del proyecto y TypeScript como lenguaje para poder modelar las respuestas de las API's.
2. He decidido usar ChakraUI como biblioteca de estilos para tener acceso a una serie de estilos básicos en los componentes y ciertos iconos.
3. He usado la biblioteca de axios para las llamadas HTTP. 
4. He usador react-router-dom para enrutar la aplicación.
5. Se han usado unas pequeñas view-transitions para darle algo de dinamismo al desplazarse entre páginas. Esta funcionalidad está limitada en algunos navegadores. 

# Organización del proyecto:
1. Una carpeta pages con los componentes más genéricos que conforman las páginas de la aplicación y que están enrutados.
   * **Home**: La página principal en la que puedes elegir a qué ejercicio acceder.
   * **Ejercicio1**: Enrutado como WhoCouldYouBe, es el ejercicio que devuelve la información pasado un nombre.
   * **Ejercicio2**: Enrutado como CovidChronicle, es el ejercicio que muestra registros del COVID en USA por días.
2. Una carpeta components donde se encuentran los componentes genéricos y otros componentes específicos de ambos ejercicios.
   * **BackHome**: Es el botón que permite volver al Home
   * **Loading**: Es el spinner de carga que se muestra mientras está realizando la llamada a la API.
   * **NameResult**: El componente del ejercicio 1 donde se muestran los resultados del nombre insertado.
   * **CovidResult**: El componente del ejercicio 2 donde se despliega la lista de fechas de los registros.
   * **CovidDetails**: El componente que muestra en detalle el registro que se solicita.
3. Una carpeta models con los modelos de datos.
   * **NameModels**: Los modelos del ejercicio 1.
   * **CovidDataModels**: Los modelos del ejercicio 2.
4. **App.css** para los estilos generales y algunos específicos.
5. **ColorPalette.css** donde se han definido como variables la paleta de colores usada en el proyecto.
