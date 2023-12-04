import express from 'express';
import usersRoutes from './routers/users.routes.js';
import viewsRoutes from './routers/views.routes.js';

const PORT = process.env.PORT || 8080;

const app = express();

// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(viewsRoutes);
app.use('/users', usersRoutes);

// Listen
app.listen(PORT, () => {
  console.log('Server Arriba ', PORT);
})
