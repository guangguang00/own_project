import React,{Component} from 'react'
import {Switch,Route,Redirect,BrowserRouter as Router} from 'react-router-dom'
// HashRouter ,
import home from '@/components/home';
import personal from '@/components/personal'


export default class RouteConfig extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={home}/>
                    <Route path="/personal"  component={personal}/>
                    <Redirect to="/"/>
                </Switch>
            </Router>
        )
    }
}

