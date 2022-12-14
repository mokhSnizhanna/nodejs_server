import { URL } from 'url';
import { IncomingMessage, ServerResponse } from 'node:http';
import { api } from './api';
import { web } from './web';
import { MiddlewareInterface } from '../middleware'
import { HttpError } from '../exceptions/HttpError';
import BasicHttpController from '../controllers/BasicHttpController';

interface RouteInterface {
    method: string,
    path: string,
    funс: BasicHttpController,
    middlewares?: MiddlewareInterface[]
}

function handleRequest(url: URL, _req: IncomingMessage, _res: ServerResponse) {
    try {
        const routes = [...api, ...web];
        const route = routes.find(r => r.path === url.pathname && r.method === _req.method);
        if (route) {
            // if (route.middlewares) {
            //     for (let m of route.middlewares) {
            //         m.run(_req, _res);
            //     }
            // }
            console.log('After middlewares')
            route.funс.process(_req, _res);
        } else {
            _res.writeHead(404, {'Content-Type': 'text/html'});
            _res.end('<h1>Not Found</h1>');
        }
    } catch (error) {
        if (error instanceof HttpError) {
            _res.writeHead(error.statusCode, {'Content-Type': 'text/html'});
            _res.end(`<h1>${error.message}</h1>`);
        } else {
            _res.writeHead(500, {'Content-Type': 'text/html'});
            _res.end('<h1>Server Error</h1>');
        }
    }
}

export {
    handleRequest,
    RouteInterface
}