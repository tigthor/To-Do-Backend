import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import code from './helpers/status-code.helper';
import swaggerSpec from '../swagger.json';
import ResponseService from './services/response.service';

config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
	ResponseService.setSuccess(code.ok, 'Welcome to Awesome Backend Challenge APIs');
	return ResponseService.send(res);
});

app.use('/', (req, res) => {
	ResponseService.setError(code.notFound, 'Sorry you have accessed a wrong route');
	return ResponseService.send(res);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Sever listening on port ${PORT}`));

export default app;
