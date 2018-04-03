import Express from 'express';
import User from '../../models/user';
import { responseClient } from '../util';

const router = Express.Router(); 

//admin请求后台验证
router.use((req,res,next)=>{
	console.log(res);
	if(req.session.userInfo) {
		next();
	} else {
		res.send(responseClient(res,200,1,'身份信息已过期，请重新登录'));
	}
});

//获取所有的user
router.get('/getUsers', (req,res) => {
    let skip = (req.query.pageNum - 1) < 0 ? 0 : (req.query.pageNum - 1) * 10;
    let responseData = {
        total: 0,
        list: []
    };
    User.count()
        .then(count => {
          	responseData.total = count;
          	User.find(null,'_id username type password', {skip:skip, limit:10})
          	.then((result) => {
          			console.log(res);
                    responseData.list = result;
                    responseClient(res,200,0,'成功',responseData)
          	})
      		.catch(err => {
                  responseClient(res);
          	})
        });
});
module.exports = router;