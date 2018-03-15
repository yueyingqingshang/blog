import path from 'path';
import Express from 'express';
import favicon from 'serve-favicon'
import httpProxy from 'http-proxy';
import compression from 'compression';
import connectHistoryApiFallback from 'connect-history-api-fallback';
import config from '../config/config';

const app = new Express();
const potr = config.port;
const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
const proxy = httpProxy.createProxyServer({
	target: targetUrl
});
app.use('/api',(req,res)=>{
	proxy.web(req,res,{target: targetUrl});
});
app.use('/',Express.static(path.join(__dirname,"",'build')));
app.use('/',connectHistoryApiFallback());