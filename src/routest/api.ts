import {TestController} from '../controllers/TestController'
import {RouteInterface} from './index'
import {AuthMiddleware} from '../middleware/AuthMiddleware'

export const api:RouteInterface[] = [
    {
        method: 'GET',
        path: '/api/test',
        funс: new TestController.getTest(),
        middlewares: [new AuthMiddleware({auth: true})]
    },
];
