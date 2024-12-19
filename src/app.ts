import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();
//Middleware to parse incoming JSON request
app.use(express.json());

//Application Routes
app.use('/api', router);

//Base route
app.get('/', (req: Request, res: Response) => {
  res.json({
    status: true,
    message: 'Blog App Server Live',
  });
});

// Use the Not Found Middleware
app.use(notFound);
// Use the Global Error Handler
app.use(globalErrorHandler);

export default app;
