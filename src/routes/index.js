import express from 'express';
import AuthRoute from './auth.route';
import TodoRoute from './todo.route';

const app = express();

app.use('/api/auth', AuthRoute);
app.use('/api', TodoRoute);

export default app;
