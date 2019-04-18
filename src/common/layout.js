import React, { Component } from 'react';
import {Layout} from 'antd'
import styles from './common_css/common_layout.module.less'
const {Sider,Content} = Layout
class CommonLayout extends Component {
    render() {
        console.log(this.props)
        return (
                 <Layout style={{height:'100%'}}>
                    <Sider theme="light">
                        <ul className={styles.menulist}>
                            {this.props.menuData&&this.props.menuData.map((item,index)=>{
                                return (<li key={index}>{item.name}</li>)
                            })}
                        </ul>
                    </Sider>
                    <Content>2222</Content>
                </Layout>  
        )
    }
}

export default CommonLayout;