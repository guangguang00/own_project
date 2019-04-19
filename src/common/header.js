import React, { Component } from 'react';
import {Row,Col,Input} from 'antd'
import styles from './common_css/common_header.module.less'
const Search = Input.Search
class Header extends Component {
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
                        
                          
                                <ul className={styles.titleList}>
                                    <li><a>博客</a></li>
                                    <li><a>面试题</a></li>
                                    <li><a>阅读</a></li>
                                    <li><a>Github <i className='iconfont icon-github'></i></a></li>
                                </ul>
                         
                        </Row>
                     </Col>
                 </Row>
                  
                   
            
            </div>
        );
    }
}

export default Header;