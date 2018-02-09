import	React,{Component} from 'react';
import {Menu,Icon} from 'antd';
import './style.css';
const menus = [
	{key: 'AdminIndex', name: '首页', iconType: 'home'},
    {key: 'AdminManagerUser', name: '用户管理', iconType: 'usergroup-delete'},
    {key: 'AdminNewArticle', name: '发文', iconType: 'file-text'},
    {key: 'AdminManagerTags', name: '标签管理', iconType: 'tags-o'},
    {key: 'AdminManagerArticle', name: '文章管理', iconType: 'edit'},
    {key: 'AdminManagerComment', name: '评论管理', iconType: 'message'}
];
export default class AdminMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: 'AdminIndex',
			menus: menus
		};
	}
	render() {
		return (
			<div className="menu-list">
                <Menu
                    selectedKeys={[this.state.key]}
                    mode="inline"
                    theme="dark"
                    onClick={this.props.handleTabs}
                >
                {
                    menus.map( (item, index) =>
                        <Menu.Item key={item.key}>
                            <Icon type={item.iconType} />
                            <span>{item.name}</span>
                        </Menu.Item>
                    )
                }
                </Menu>
            </div>
		);
	};
};