import http from 'node:http';
import {URL} from 'url';
import { port, hostname } from './config';
import {handleRequest} from './routest';

const server = http.createServer((_req: http.IncomingMessage, _res: http.ServerResponse) => {
    _res.setHeader("Access-Control-Allow-Origin", "*");
    
    const url = new URL(_req.url || '/' , `http://${hostname}`);
    handleRequest(url, _req, _res);
});

server.listen(port, hostname);