import React, { Component } from 'react';
import {Layout} from 'antd'
import styles from './common_css/common_layout.module.less'
const {Sider,Content} = Layout
class CommonLayout extends Component {
    constructor(props){
        super(props)
        this.state={
            active:true
        }
    }
    render() {
        console.log(this.state)
        return (
                 <Layout style={{height:'100%'}}>
                    <Sider theme="dark" style={{overflow:'scroll'}}>
                        <ul className={styles.menulist}>
                            {this.props.menuData&&this.props.menuData.map((item,index)=>{
                                return (<li key={index} className={this.state.active ? styles.active : null}>{item.descript}</li>)
                            })}
                        </ul>
                    </Sider>
                    <Content>
                        <div style={{height:'900px',border:'1px solid #ccc'}}>111</div>
                        <div style={{height:'900px',border:'1px solid #ccc'}}>222</div>
                    </Content>
                </Layout>  
        )
    }
}

export default CommonLayout;