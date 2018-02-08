import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';
import AdminMenu from '../../components/AdminMenu';
import AdminIndex from '../AdminIndex';
import AdminManagerUser from '../AdminManagerUser';
import AdminTabs from '../../components/AdminTabs';
//import AdminManagerTags from '../AdminManagerTags';
//import AdminManagerArticle from '../AdminManagerArticle';
//import AdminManagerComment from '../AdminManagerComment';
//import AdminNewArticle from '../AdminNewArticle';
import Detail from '../Detail';
import NotFound from '../NotFound';
class Admin extends Component {
    constructor(props) {
        super(props);
    }
    handleTabs(e) {
        console.log(this.refs.adminMenu.state.menus,e);
        let tab = {
            key: e.key,

        };
        //this.refs.adminTabs.add(tabKey);
    }
    onChange(e) {
        console.log(e);
        let currKey = e;
        this.refs.adminTabs.setState({
            activeKey: currKey
        });
        //this.setState({ activeKey });
    }
    render() {
        const { url } = this.props.match;
        return (
            <div>
                {
                    <div className="admin_container">
                        <div className="menuContainer">
                            <AdminMenu ref="adminMenu" handleTabs={this.handleTabs.bind(this)}/>
                        </div>
                        <div className="contentContainer">
                            <AdminTabs ref="adminTabs" handleChange={this.onChange.bind(this)}/>
                        </div>
                        
                    </div>
                }
            </div>
        )
    }

}
export default Admin;