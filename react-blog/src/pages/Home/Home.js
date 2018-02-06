import React ,{ Component } from 'react';
import './home.css';
import Header from '../../components/Header/Header';
import MenuList from '../../components/Menu/Menu';
import ArticleList from '../../components/ArticleList';
import { Redirect } from 'react-router-dom';
class Home extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { tags } = this.props;
		console.log(tags);
		return (
			<div className="container">
				<Header/>
				<div className="nav">
					<MenuList history={this.props.history} />
				</div>
				<div className="main">
					<ArticleList  history={this.props.history} tags={tags} />
				</div>
			</div>
		)
	};
};
export default Home;