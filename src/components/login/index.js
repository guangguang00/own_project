import React, { Component } from 'react';
// import '../../utils/mock'
import axios from 'axios'
import {connect} from 'react-redux'
import {changeToken} from './action'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import { Button } from 'antd';
console.log(Button)
class Login extends Component {
    state ={
        username:'',
        password:''
    }
    login(){
        console.log('路由拦截在这里完成')
        axios.post('/login',{username:this.state.username,password:this.state.password}).then(res=>{
            if(res.status === 200){
                
                console.log(this.props)
                // localStorage.setItem('token',res.data.data.token)
                this.props.changeToken(res.data.data.token)
                this.props.history.push(this.props.location.state.from.pathname)
            }
        })
    }
    handleUsername = (event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handlePassword =(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>
                    这是登录界面
                </h2>
                用户名：<input value={this.state.username} onChange={this.handleUsername}></input> 
                <br/>
                密码：<input  type="password" value={this.state.password} onChange={this.handlePassword}></input>
                <br/>
                <button onClick={this.login.bind(this)}>点击登录</button>
                <br></br>
                <Link to="/home">进入home</Link>
                <br />
                <Button type="primary">Primary</Button>
            </div>
        );
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{
        ...state
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        changeToken:bindActionCreators(changeToken,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)