# API de Gestión de Usuarios en Node.js con Express

API desarrollada en Node.js con Express para la gestión de usuarios, incluyendo CRUD y login.

## 📂 Base de datos
- MySQL con tablas optimizadas mediante índices en columnas de alta consulta.

## 🏗️ Arquitectura
Diseño basado en capas, con separación en carpetas para las funciones principales:

- 🗃️ **Model**: Manejo de la lógica de datos y consultas a la base de datos.
- 🧩 **Controller**: Gestión de la lógica del negocio y orquestación de las operaciones.
- 🌐 **Routes**: Definición de rutas y manejo de solicitudes HTTP.
- ⚙️ **Config**: Configuración global, como variables de entorno y conexión a la base de datos.
- 🔄 **Middlewares**: Funciones intermedias para el procesamiento de solicitudes.
- 🔧 **Utils**: Utilidades y funciones de apoyo reutilizables.

## 🛠️ Herramientas
- 🌍 **cors**: Gestión de políticas CORS.
- 🛡️ **passport**: Validación de sesiones.
- ✉️ **nodemailer**: Envío de emails.
- 🔑 **JWT**: Recuperación de contraseñas por correo.
- 🧂 **bcrypt**: Hash de contraseñas.
- 📑 **express-session**: Manejo de sesiones con cookies.
- 🧹 **express-validator**: Sanitización de entradas.

## ✨ Funcionalidades
- 👤 CRUD de usuarios.
- 🔍 Búsquedas con filtros.
- 🔑 Login por email/contraseña, Google y Facebook.
- 🔄 Actualización de contraseñas.
- 📧 Recuperación de cuenta por correo.
