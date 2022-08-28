import {IncomingMessage, ServerResponse}  from 'node:http';

export abstract class RouteProcess {
    abstract process(_req: IncomingMessage, _res: ServerResponse):void 
}

export class TestController {
    static getTest = class extends RouteProcess{
        process(_req: IncomingMessage, _res: ServerResponse): void {
            
        }
    }
}
