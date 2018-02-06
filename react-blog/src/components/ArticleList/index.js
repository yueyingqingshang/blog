import React,{Component} from 'react';
import ArticleListCell from '../ArticleListCell';
const items = [{
	key: '123',
	title: '标题1',
	time: '2017-10-10',
	viewCount: 10,
	commentCount: 123
},{
	key: '124',
	title: '标题2',
	time: '2017-10-11',
	viewCount: 9,
	commentCount: 128
},{
	key: '124',
	title: '标题2',
	time: '2017-10-11',
	viewCount: 9,
	commentCount: 128
}];
 export default class ArticleList extends Component {
 	constructor(props) {
 		super(props);
 	}
 	render() {
 		const {tags} = this.props;
 		console.log(this.props);
 		return (
 			<div>
	            {
	                items.map((item,index) => (
	                    <ArticleListCell history={this.props.history} key={index} data={item} tags={tags} />
	                ))
	            }
	        </div>
		);
 		
 	}
 };