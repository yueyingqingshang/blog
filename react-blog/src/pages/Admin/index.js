import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';
import AdminMenu from '../../components/AdminMenu';
import AdminIndex from '../AdminIndex';
import AdminManagerUser from '../AdminManagerUser';
import AdminTabs from '../../components/AdminTabs';
import AdminManagerTags from '../AdminManagerTags';
//import AdminManagerArticle from '../AdminManagerArticle';
//import AdminManagerComment from '../AdminManagerComment';
//import AdminNewArticle from '../AdminNewArticle';
import Detail from '../Detail';
import NotFound from '../NotFound';
const tabsArr = [
    {name: 'AdminIndex',content: <AdminIndex />},
    {name: 'AdminManagerUser',content: <AdminManagerUser />},
    {name: 'AdminManagerTags',content: <AdminManagerTags />}
];
class Admin extends Component {
    constructor(props) {
        super(props);
    }
    handleTabs(e) {
        let tabName = this.refs.adminMenu.state.menus.find((arrItem)=>{
            return arrItem.key == e.key;
        });
        let content = tabsArr.find((arrItem)=>{
            return arrItem.name == e.key;
        });
        let tab = {
            key: e.key,
            name: tabName.name,
            content: content.content
        };
        this.refs.adminTabs.add(tab);
        this.refs.adminMenu.setState({
            key: e.key
        });
    }
    onChange(e) {
        let currKey = e;
        this.refs.adminTabs.setState({
            activeKey: currKey
        });
        this.refs.adminMenu.setState({
            key: currKey
        });
    }
    onEdit(targetKey,action) {
    	let adminTab = this.refs.adminTabs;
        let activeKey = adminTab.state.activeKey;
		let lastIndex;
		adminTab.state.panes.forEach((pane, i) => {
	  		if (pane.key === targetKey) {
		    	lastIndex = i - 1;
		  	};
		});
		const panes = adminTab.state.panes.filter(pane => pane.key !== targetKey);
		if (lastIndex >= 0) {
	  		activeKey = panes[lastIndex].key;
		} else {
			activeKey = panes[0].key;
		};
		adminTab.setState({ 
			panes, activeKey 
		});
		this.refs.adminMenu.setState({
            key: activeKey
        });
    }
    render() {
        return (
            <div>
                {
                    <div className="admin_container">
                        <div className="menuContainer">
                            <AdminMenu ref="adminMenu" handleTabs={this.handleTabs.bind(this)} />
                        </div>
                        <div className="contentContainer">
                            <AdminTabs ref="adminTabs" handleChange={this.onChange.bind(this)} handleEdit={this.onEdit.bind(this)}/>
                        </div>
                    </div>
                }
            </div>
        )
    }

}
export default Admin;