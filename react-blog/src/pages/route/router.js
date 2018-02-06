import React,{ Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import { BackTop } from 'antd';
import Home from '../Home/Home';
import Detail from '../Detail';
import NotFound from '../NotFound';
class BlogRouter extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {url} = this.props.match;
		return (
			<div>
				<div>
					<Switch>
						<Route exact path={url} component={Home} />
						<Route path={`/detail/:key`} component={Detail} />
						<Route path={`/:tag`} component={Home} />
						<Route path="/about" component={NotFound} />
						<Route component={NotFound} />
					</Switch>
				</div>
				<BackTop />
			</div>
		);
	}
}
export default BlogRouter;