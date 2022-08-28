import {getHome} from '../controllers/test'
import {RouteInterface} from './index'

export const web: RouteInterface[] = [
    {
        method: 'GET',
        path: '/test',
        funс: getHome
    },
]
