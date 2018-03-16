import Express from 'express';
import config from '../../config/config';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';

const port = config.apiPort;
const app = new Express();

//控制路由
app.use('/',require('./main'));
//链接数据库
mongoose.Promist