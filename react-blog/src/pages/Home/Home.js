import React ,{ Component } from 'react';
import home from './home.css';
import Header from '../../components/Header/Header';
import Menus from '../../components/Menu/Menu';
class Home extends Component {
	render() {
		return (
			<div className="container">
				<Header/>
				<div className="nav">
					<Menus />
				</div>
				<div className="main">
					这里是问斩个列表
				</div>
			</div>
		)
	};
};
export default Home;