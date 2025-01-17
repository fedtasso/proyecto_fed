import express from 'express';
import { SESSION_SECRET_PASS } from './src/config/config.js';
import cors from 'cors';
import session from 'express-session';
import passport from './src/config/passportConfig.js';
import { conexion_Local } from './src/config/database.js'; //, conexion_Remota
// import swaggerUiExpress from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import userRoutes from './src/routes/userRoutes.js';
import authRoutes from './src/routes/authRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); 

// Configurar sesión
app.use(session({ secret: SESSION_SECRET_PASS, resave: false, saveUninitialized: true })); // TO DO si uso cookie configurar httponly, etc

// Inicializar Passport
app.use(passport.initialize());
app.use(passport.session());


// Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'proyecto_fed',
      version: '1.0.0',
    },
  },
  apis: ['./doc/students.yaml'], // Adjust this path according to your project structure
};
const specs = swaggerJsdoc(swaggerOptions);


// Rutas de la API
app.use('/', userRoutes);
app.use('/', authRoutes);

// Mensaje de confirmación de conexión
conexion_Local.getConnection((err, connection) => {
  if (err) {
    console.error('Error al conectar con la base de datos de la aplicación:', err.message);
  } else {
    console.log('Conexión establecida con la base de datos local');
  } 
});

// conexion_Remota.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error al conectar con la base de datos digital:', err.message);
//   } else {
//     console.log('Conexión establecida con la base de datos remota');
//     connection.release();
//   }
// });


// Manejo de rutas no encontradas
app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada en la aplicación');
  error.status = 404;
  next(error);
});

// Middleware para manejar errores
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

