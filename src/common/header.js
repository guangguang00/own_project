import React, { Component } from 'react';
import {Row,Col,Input} from 'antd'
import styles from './common_css/common_header.module.less'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
const Search = Input.Search
@withRouter
class Header extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.state,this.props)
    }
    render() {
        return (
            <div className={styles.header}>
                 <Row className={styles.test} justify="space-between" type='flex'>
                     <Col >
                        <div className={styles.header_left}>guangguang00的前端日志</div>
                     </Col>
                     <Col >
                        <Row justify="end" type='flex'>
                           
                                <div className={styles.search}>
                                    <Search
                                        placeholder="搜索..."
                                        onSearch={value => console.log(value)}
                                        enterButton
                                    />
                                </div>
                        
                          
                                <ul className={`${styles.titleList}`}>
                                    <li><a className={this.props.location.pathname == '/home' ? styles.active : null} onClick={()=>{this.props.history.push('/home')}}>博客</a></li>
                                    <li><a className={this.props.location.pathname == '/login' ? styles.active : null} onClick={()=>{this.props.history.push('/login')}}>面试题</a></li>
                                    <li><a className={this.props.location.pathname == '/sales' ? styles.active : null}>阅读</a></li>
                                    <li><a href="https://github.com/guangguang00">Github <i className='iconfont icon-github'></i></a></li>
                                </ul>
                         
                        </Row>
                     </Col>
                 </Row>
                  
                   
            
            </div>
        );
    }
}

export default Header;