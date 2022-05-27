# BE Prueba Toolbox

## 1. Introducción.

 Este repositorio contiene el BE de la prueba de Toolbox 
 desarrollado en NodeJs. Direccion de repositorio:
 **https://github.com/endrinatoledo/PruebaToolboxBE.git**

## 2. Funcionalidad.

 Esta prueba se encarga de extraer información de un API Externa
 y plasmarlos en una tabla filtrada por el nombre del archivo   

## 3. Tipos de conexión.

- La aplicacion realiza las peticiones (REST API) en el puerto **8080**.
- Las rutas para metodos "GET" en el servidor virtual son:
  - Ruta "/files/list/".
      - Retorna en formato de JSON los nombres de los "file".
  - Ruta "/data/:filename/".
      - Retorna en formato de JSON los registros asociados al nombre
      del archivo enviado por parámetro".

## 4. Generalidades sobre la implementación.

- Esta aplicacion ha sido desarrollada con Node.js usando los siguientes modulos:
  - axios
  - cors
  - express
  - http-status-codes
  - nodemon
  - chai
  - mocha


- Arbol de la aplicación:

	```
    back-end
    │   readme.md
    │   package.json   
    │   package-lock.json   
    │   server.js
    │   gitignore
    └───src
    │   └───controllers
    │   └───routes
    │   └───test
    │   └───utils
    ```
### 5. Prerrequisitos.

**Se deben tener configurados el siguiente entorno:**	

- NodeJS 14

### 6. Instalar Dependencias.

En esta sección desde el terminal de su preferencia se debe
navegar a dentro de la carpeta PruebaToolboxBE y ejecutar el
comando: 

**npm install**	


### 7. Ejecución de la app.

Una vez finalizada la instalacion de dependencias se procede ejecutar la
aplicación mediante el comando:

**npm start**

 Una vez desplegado, ejecutar consultas desde postman con 
la baseUrl **http://localhost:8080** añadiendo las rutas
creadas. Por ejemplo:
**http://localhost:8080/list/**

### 8. Ejecución de Pruebas Unitarias.

Las pruebas unitarias fueron desarrolladas con *Mocha* y *Chai*
y se ejecutan mediante el comando:

**npm test**
