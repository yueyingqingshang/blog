import React,{ Component } from 'react';
import './header.css';
const logo = require('./log.svg');
class Header extends Component {
	render() {
		return (
			<div className="header">
				<span className="log">
					<img src={logo} alt={logo}/>
				</span>
				<h1>This is JiangRun is Blog</h1>
			</div>
		);
	};
};
export default Header;