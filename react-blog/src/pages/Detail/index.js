import React, { Component } from 'react'
import remark from 'remark'
import reactRenderer from 'remark-react'
import '../Home/home.css';
import Header from '../../components/Header/Header';
import MenuList from '../../components/Menu/Menu';
import '../../components/Header/header.css'
import './style.css'

const articleContent = "## 标题 \n```code``` \n jlkfdsjal"

class Detail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="container">
                <div className="header">
                    <h1>文章标题在这里</h1>
                </div>
                <div className="main">
                    <div id='preview' className="main">
                        <div className="markdown_body">
                            {remark().use(reactRenderer).processSync(articleContent).contents}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;
