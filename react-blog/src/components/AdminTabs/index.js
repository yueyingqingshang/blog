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
			key: 'AdminIndex',
			closable: false
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
		let activeKey = '';

		//判断曾经是否打开过这个tab
		let isOpen = this.state.panes.find((arrItem)=>{
			return arrItem.key == panel.key;
		});
		activeKey = panel.key;
		if(isOpen) {
			this.setState({ activeKey });
		} else {
			panes.push({ title: panel.name, content: panel.content, key: activeKey });
			this.setState({ panes, activeKey });
		};
	}
	remove = (targetKey) => {
		
	}
	render() {
		return (
			<Tabs
		        onChange={this.props.handleChange}
		        activeKey={this.state.activeKey}
		        type="editable-card"
		        onEdit={this.props.handleEdit}
		        hideAdd={true}
	      	>
        	{this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
	      	</Tabs>
		);
	};
};