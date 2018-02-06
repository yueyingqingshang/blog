import React,{ Component } from 'react';
import './menu.css';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
const categories = [{
    menuName: '首页',
    menuLink: '/home'
},{
    menuName: '所有文章',
    menuLink: '/articleList'
},{
    menuName: '关于我',
    menuLink: '/about'
}];
class MenuList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: categories[0]
		};
	}
    handleClick =(e)=> {
        this.setState({
            current: e.key
        })
    }
	render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current.menuName]}
                mode="horizontal"
                className="menucontainer"
            >
                {
                    categories.map((item,index)=>(
                        <Menu.Item key={item.menuName} >
                           <Link to={item.menuLink}>{item.menuName}</Link>
                        </Menu.Item>
                    ))
                }
            </Menu>
        )
    }
};
export default MenuList;