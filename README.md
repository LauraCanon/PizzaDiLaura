# Pizza Di Laura

Este proyecto fue realizado con [Create React App](https://github.com/facebook/create-react-app)

Para el desarrollo de Pizza Di Laura implementé las siguientes librerías:

1. "react-router-dom" para el enrutamiento de mis componentes
2. "json-server" que me permite contruir un restAPI fake, usando un JSON file
3. "lottie-react" para agregar animaciones
4. "cypress" que me permite ejecutar pruebas

Como se desarrolló Pizza Di Laura:

1. Separé la funcionalidad de la aplicación en componentes reutilizables.
2. La data que manejé en la aplicación, está almacenada en la carpeta static. Hice uso del archivo ingredients para mapear los valores contenidos en él y renderizar el componente Customize de forma que el usuario pueda interactuar con ellos.
   Hice uso de useState para manejar el estado local.
3. Instalé JSON server para generar mi Fake API y creé una carpeta data junto con un archivo db.json que contenía datos de ejemplo.
   Puse en marcha mi API con el comando json-server apuntando al archivo con los datos "npx json-server --watch data/db.json --port 8000". Accediendo a la URL local, en este caso http://localhost:8000, tengo una página estática con los endpoints de mi API.

   Mis endpoints son:

   - /orders GET Fetch all orders
   - /orders/:id GET Fetch a single order
   - /orders POST Add a new order
   - /orders/:id DELETE Delete an order

   De esta forma y mediante el método fetch, tenía acceso a la data de mi servidor para renderizarla o bien, para almacenarla.
   Hice uso de un custom hook para poder reutilizar lógica de estado (useFetch.js). La función que contiene mi hook, recibe como parámetro una URL; de esta forma, podrá ser reutilizada en diferentes componentes
   En el archivo db.json encontrarán las ordenes que han sido creadas hasta el momento con la información solicitada al momento de personalizar la pizza.

4. Hice uso de cypress para realizar pruebas en mi aplicación. Las pruebas realizadas fueron de navegación por la aplicación, ordenar una pizza, diligenciar el formulario de solicitud de orden, validación del historial de órdenes, ver el detalle de la órden y finalmente eliminarla (el archivo a validar es navigate.spec.js dentro de la carpeta integration en cypress).

Con este proyecto podrás personalizar la pizza que desees; podrás elegir los ingredientes que gustes (podrás también eliminarlos), estarás informado del precio por cada adición y podrás conocer el precio final antes de realizar la orden. Cuando tengas personalizada tu pizza, deberás diligenciar un formulario con tus datos personales y fecha en que la requieras (de esta forma podré tener el tracking de tu información y de los ingredientes que seleccionaste)

Para iniciar el proyecto sigue las siguientes instrucciones:

1. Clona el repositorio
2. Corre "npm install" para que tengas acceso a las dependencias del proyecto
3. Corre "npm start" para ejecutar el proyecto en el puerto 3000
4. Corre "npx json-server --watch data/db.json --port 8000" para montar el servidor
5. Navega y personaliza tu propia pizza
6. Corre "npx cypress open" Para validar las pruebas realizadas
