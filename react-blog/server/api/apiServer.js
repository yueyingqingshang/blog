import Express from 'express';
import config from '../../config/config';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';

const port = config.apiPort;
const app = new Express();

//控制路由
//app.use('/',require('./main'));
//管理页面路由
//app.use('/admin',require('./admin'));
//链接数据库
mongoose.Promist = require('bluebird');
mongoose.conect(`mongodb://${config.dbHost}:${config.dbPort}/myblog`,function(err) {
	if(err) {
		console.log('数据库链接失败');
		return;
	}
	console.log('数据库链接成功');
	app.listen(port,function(err) {
		if (err) {
            console.error('err:', err);
        } else {
            console.info(`===> api server is running at ${config.apiHost}:${config.apiPort}`)
        };
	});
});