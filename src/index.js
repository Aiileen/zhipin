import './index.less'
/* 入口文件 */
import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Main from './containers/main/Main'
import Login from './containers/login/Login'
import Register from './containers/register/Register'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/" component={Main}></Route>
            </Switch>
        </Router>
    </Provider>

), document.getElementById('root'))