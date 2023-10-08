
# Moebiuz - Aplicación de Gestión de Tareas

Moebiuz es una aplicación fullstack que te permite gestionar tus tareas de manera eficiente. Puedes crear, eliminar y modificar tareas, además de registrar y autenticar usuarios para un acceso personalizado.

## Contenido

- [Moebiuz - Aplicación de Gestión de Tareas](#moebiuz---aplicación-de-gestión-de-tareas)
  - [Contenido](#contenido)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Dependencias](#dependencias)
  - [Features](#features)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina:

1. Clona este repositorio en tu computadora.

```bash
git clone https://github.com/pabrax/Moebiuz.git
cd Moebiuz
```

2. Instala las dependencias necesarias.

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias. Asegúrate de incluir las siguientes:

```
MONGODB_URI=URL_de_tu_base_de_datos
PORT=puerto_donde_se_ejecuta
JWT_SECRET=Tu_secreto_para_generar_tokens_JWT
```

4. Inicia la aplicación en modo de desarrollo.

```bash
npm run dev
```
La aplicación estará disponible en http://localhost:3000.

## Uso

Describe aquí cómo los usuarios pueden utilizar tu aplicación para gestionar tareas y realizar otras acciones importantes. Proporciona ejemplos de API endpoints si es relevante.

## Estructura del Proyecto
La estructura del proyecto está organizada de la siguiente manera:

```
moebiuz/
  ├── src/
  │    ├── controllers/
  │    │    # Controladores para manejar las peticiones HTTP
  │    ├── models/
  │    │    # Definiciones de modelos de datos de la base de datos
  │    ├── routes/
  │    │    # Definiciones de rutas y manejo de peticiones
  │    ├── index.js
  ├── .env.example
  ├── package.json
  └── README.md
```

## Dependencias
Este proyecto utiliza las siguientes dependencias principales:

- bcryptjs: Para el hashing de contraseñas.
- cookie-parser: Para el manejo de cookies.
- dotenv: Para la configuración de variables de entorno.
- express: Para el servidor web y el enrutamiento.
- jsonwebtoken: Para la autenticación basada en JWT.
- mongoose: Para la interacción con la base de datos MongoDB.
- morgan: Para el registro de solicitudes HTTP.
- zod: Para la validación de datos.


## Features

- Se ha creado el servidor y las rutas "register" y "login".

- se han realizado validaciones desde el servidor

- se ha creado el CRUD de tareas

- se ha conectado con mongodb

- se registran usuarios

- se ha configurado el token (JWT) (falta validar)

- El servidor corre en el puerto 3000.

