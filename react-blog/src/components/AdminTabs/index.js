import React ,{Component} from 'react';
import {Tabs} from 'antd';
import AdminIndex from '../../pages/AdminIndex';
const TabPane = Tabs.TabPane;
const defaultTab = <AdminIndex />

export default class AdminTabs extends Component {
	constructor(props) {
		super(props);
		this.newTabIndex = 0;
		var panes = [{
			title: '首页',
			content: defaultTab,
			key: 'home'
		}];
		this.state = {

			activeKey: panes[0].key,
			panes
		};
	}
	
	onEdit = (targetKey, action) => {
		this[action](targetKey);
	}
	add = (panel) => {
		const panes = this.state.panes;
		const activeKey = `newTab${this.newTabIndex++}`;
		if(panel) {
			let newTab = panel;
			panes.push({ title: 'New Tab', content: newTab, key: activeKey });
		} else {
			panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
		};
		this.setState({ panes, activeKey });
	}
	remove = (targetKey) => {
		let activeKey = this.state.activeKey;
		let lastIndex;
		this.state.panes.forEach((pane, i) => {
	  		if (pane.key === targetKey) {
		    	lastIndex = i - 1;
		  	}
		});
		const panes = this.state.panes.filter(pane => pane.key !== targetKey);
		if (lastIndex >= 0 && activeKey === targetKey) {
	  		activeKey = panes[lastIndex].key;
		}
		this.setState({ 
			panes, activeKey 
		});
	}
	render() {
		return (
			<Tabs
		        onChange={this.props.handleChange}
		        activeKey={this.state.activeKey}
		        type="editable-card"
		        onEdit={this.onEdit}
	      	>
	        	{this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
	      	</Tabs>
		);
	};
};