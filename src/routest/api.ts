import {getApiHome} from '../controllers/test'
import {RouteInterface} from './index'
import {AuthMiddleware} from '../middleware/AuthMiddleware'

export const api:RouteInterface[] = [
    {
        method: 'GET',
        path: '/api/test',
        funс: getApiHome,
        middlewares: [new AuthMiddleware({auth: true})]
    },
];

// export {api};