import {IncomingMessage, ServerResponse}  from 'node:http';

export default abstract class BasicHttpController {
    abstract process(_req: IncomingMessage, _res: ServerResponse):void 
}