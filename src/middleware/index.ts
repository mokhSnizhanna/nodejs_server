import {IncomingMessage, ServerResponse} from 'node:http';

export interface MiddlewareInterface {
    run(_req: IncomingMessage, _res: ServerResponse): void,
}