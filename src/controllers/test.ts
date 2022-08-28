import {IncomingMessage, ServerResponse}  from 'node:http';

export function getHome(_req: IncomingMessage, _res: ServerResponse) {
    _res.writeHead(200, { 'Content-Type': 'text/plain' });
    _res.end('okay');
}

export function getApiHome(_req: IncomingMessage, _res: ServerResponse) {
    _res.writeHead(200, { 'Content-Type': 'text/plain' });
    _res.end('api okay');
}