# API Backend - Node.js & Express

Este proyecto es una API RESTful desarrollada con **Node.js** y **Express**.  
Forma parte del desafío técnico de Atom y provee los servicios necesarios para la gestión de usuarios y tareas, incluyendo autenticación, seguridad(JWT) y conexión con Firebase (Cloud Firestore).

## Tecnologías utilizadas

- Node.js
- Express
- Firebase Admin SDK (Cloud Firestore)
- JWT (JSON Web Tokens)
- CORS
- dotenv

## Características principales

- **Gestión de usuarios**  
  Endpoints para registro y autenticación

- **Gestión de tareas**  
  Endpoints para crear, leer, actualizar, eliminar

- **Autenticación JWT**  
  Generación y validación de tokens para asegurar el acceso a los endpoints protegidos.

- **Seguridad con CORS**  
  Configuración para permitir únicamente solicitudes desde el frontend autorizado.

- **Integración con Firebase**  
  Uso de Cloud Firestore para almacenamiento de datos en tiempo real.

## Seguridad

El backend implementa varias medidas para garantizar la seguridad de la API y la protección de los datos:

- **Autenticación con JWT**  
  Uso de JSON Web Tokens para el inicio de sesión y protección de endpoints sensibles.

- **Protección de endpoints**  
  Solo los endpoints públicos (registro e inicio de sesión) son accesibles sin autenticación; el resto requieren un token válido.

- **CORS configurado**  
  La API solo acepta solicitudes desde el frontend autorizado para evitar accesos no deseados.

- **Variables de entorno (.env)**  
  Claves sensibles como secretos JWT, credenciales de Firebase y configuraciones críticas se manejan mediante archivos `.env` para no exponerlas en el código.

## Requisitos previos

- Node.js (v22.14.0 o superior)
- npm o yarn
- Archivo `.env` configurado con:

  PORT=3000
  JWT_SECRET=tu_secreto_muy_seguro_aqui
  JWT_EXPIRES_IN=15m
  WEB=http://localhost:4200
  FIREBASE_ACCOUNT_KEY="keyFirabse"

  ## Endpoints principales

### Autenticación

- `GET /users/exists/:email`  
  Verifica si un usuario existe por su correo

- `POST /users`  
  Crea un usuario con su correo electronico

### Tareas

- `GET /tasks/:userId`  
  Obtiene todas las tareas del usuario logueado

- `POST /tasks`  
  Crea una nueva tarea.

- `PUT /tasks/:id`  
  Actualiza una tarea existente.

- `DELETE /tasks/:id`  
  Elimina una tarea por su identificador.

  ## Arquitectura basada en DDD (Domain-Driven Design)

Este backend sigue los principios de **Domain-Driven Design (DDD)** para mantener un código modular, desacoplado y fácil de escalar.  
La estructura principal del proyecto está organizada en las siguientes carpetas:

- **`domain`**  
  Contiene las entidades, modelos y reglas de negocio puras.  
  Aquí no existe dependencia de ningún framework o servicio externo.

- **`infrastructure`**  
  Implementación de detalles técnicos como la conexión a Firebase (Cloud Firestore), repositorios concretos, configuraciones y adaptadores necesarios para el acceso a datos.

- **`interfaces`**  
  Incluye los controladores (controllers) y rutas (endpoints) que exponen la API al mundo exterior.

- **`use-cases`**  
  Contiene la lógica de aplicación o casos de uso.  
  Orquesta las operaciones entre el `domain` y la `infrastructure`, asegurando que las reglas de negocio se cumplan correctamente.

Esta arquitectura facilita la separación de responsabilidades y la evolución del sistema sin comprometer su mantenibilidad.
