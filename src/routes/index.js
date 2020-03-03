import { Router } from 'express';

import WelcomeController from '../app/controllers/WelcomeController';

const routes = new Router();

routes.get('/', WelcomeController.index);

export default routes;
