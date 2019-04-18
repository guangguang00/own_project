import React, { Component } from 'react';
import {Row,Col,Input} from 'antd'
import styles from './common_css/common_header.module.less'
const Search = Input.Search
class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                 <Row className={styles.test}>
                     <Col span={8}>
                        <div className={styles.header_left}>guangguang00的前端日志</div>
                     </Col>
                     <Col span={8} offset={6}>
                        <Row>
                            <Col span={12}>
                                <div className={styles.search}>
                                    <Search
                                        placeholder="搜索..."
                                        onSearch={value => console.log(value)}
                                        enterButton
                                    />
                                </div>
                               
                            </Col>
                            <Col>
                                <ul className={styles.titleList}>
                                    <li><a>博客</a></li>
                                    <li><a>面试题</a></li>
                                    <li><a>阅读</a></li>
                                    <li><a>Github <i className='iconfont icon-github'></i></a></li>
                                </ul>
                            </Col>
                        </Row>
                     </Col>
                 </Row>
                  
                   
            
            </div>
        );
    }
}

export default Header;