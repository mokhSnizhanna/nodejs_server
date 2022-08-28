import {IncomingMessage, ServerResponse} from 'node:http';
import { AuthHttpError } from './AuthHttpError';
import {MiddlewareInterface} from './index'

export interface AuthMiddlewareValues {
    auth: boolean,
}

export class AuthMiddleware implements MiddlewareInterface {
    isAuth = false;
    
    constructor(data:AuthMiddlewareValues) {
        this.isAuth = data.auth;
    }
    run(_req: IncomingMessage, _res: ServerResponse) {
        if (this.isAuth) {
            console.log('AuthMiddleware value = ', this.isAuth);
        } else {
            throw new AuthHttpError();
        }
    }
}

