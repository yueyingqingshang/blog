import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import Home from './pages/Home/Home'; 
import BlogRouter from './pages/route/router';
import {BrowserRouter as Router,Switch,Route,Link,history} from 'react-router-dom';
ReactDOM.render(
	<Router>
		<div>
			<Switch>
				<Route component={BlogRouter} />
			</Switch>
		</div>
	</Router>
	,document.getElementById('root')
);