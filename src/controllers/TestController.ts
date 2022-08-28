import {IncomingMessage, ServerResponse}  from 'node:http';
import BasicHttpController from './BasicHttpController';

export class TestController {
    static getTest = class extends BasicHttpController{
        process(_req: IncomingMessage, _res: ServerResponse): void {
    
            _res.writeHead(200, {'Content-Type': 'text/html'});
            _res.end('<h1>api works</h1>');
        }
    }
}
