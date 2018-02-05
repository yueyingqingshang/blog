import React,{ Component } from 'react';
import './menu.css';
import { Menu } from 'antd';
const categories = ['首页','所有文章','关于我'];
class Menus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: categories[0]
		};
	}
	render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                className="menucontainer"
            >
                {
                    categories.map((item,index)=>(
                        <Menu.Item key={item} >
                            {item}
                        </Menu.Item>
                    ))
                }
            </Menu>
        )
    }
};
export default Menus;