import React, { Component } from 'react';
import RouterMap from './router/routerMap'
import './css/App.less';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import NotFound from './components/notfound'
import {Button,Input,Layout} from 'antd'
import Header from './common/header'
// import Layout from './common/layout'

class  App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let token = this.props.token
    // let token = localStorage.getItem('token')
    return (
      <Router>
        <div style={{height:'100%'}}>
            <Header />
            <Switch>
              {RouterMap.map((item,index)=>{
                return <Route key={index} path={item.path} exact render = {props => 
                  (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props}/> : <Redirect to={{pathname:'/login',state:{from:props.location}}}/>))
                }/>
              })}
              <Route component={NotFound}/>
            </Switch> 
           
           
        </div>
      </Router>
    )
  }
}
const mapStateToProps = (state,ownProps)=>{
  return {
    token:state.loginStatus.token
  }
}
export default connect(mapStateToProps)(App)
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
      
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <Button type="primary">button</Button>
//           <Input placeholder="Basic usage" />
//           <div className="gotest">111111111111111</div>
//           <h1 className="showName">222222222</h1>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
