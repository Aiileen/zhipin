import React, { Component } from 'react';
import {
    NavBar,
    Button,
    WingBlank,
    List,
    WhiteSpace,
    InputItem
} from 'antd-mobile'
import Logo from '../../components/logo/Logo'
class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    handleChange = (name, value) => {
        // console.log(1111);
        this.setState({
            [name]: value
        })
    }
    toResgiter = () => {
        this.props.history.push('/register')
    }
    render() {
        return (
            <>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
                <Logo></Logo>

                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem onChange={val => this.handleChange('username', val)} placeholder='请输入用户名'>用户名:</InputItem>
                        <WhiteSpace />
                        <InputItem type='password' onChange={val => this.handleChange('password', val)} type='password' placeholder='请输入密码'>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace />
                        <Button type='primary' onClick={this.toResgiter} onClick={() => console.log(this.state)}>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
                        <WhiteSpace />
                        <Button onClick={this.toResgiter}>还没有账户</Button>
                    </List>
                </WingBlank>
            </>
        );
    }
}

export default Login;
