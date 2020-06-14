import React from "react";
import {Button,message} from "antd";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'

export default class App extends React.Component{


    render() {
        return (

            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/' component={Admin}/>
                </Switch>
            </BrowserRouter>

        );
    }
}
