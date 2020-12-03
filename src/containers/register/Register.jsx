import React, { Component } from 'react';
import Logo from '../../components/logo/Logo'
import {
    NavBar,
    WingBlank,
    List,
    Button,
    WhiteSpace,
    InputItem,
    Radio
} from 'antd-mobile'
const ListItem = List.Item
class Register extends Component {
    state = {
        username: '',
        password: '',
        password2: '',
        type: 'boss'
    }
    handleChange = (name, value) => {
        // console.log(1111);
        this.setState({
            [name]: value
        })
    }
    toLogin = () => {
        this.props.history.push('/login')
    }
    render() {
        const { type } = this.state
        return (
            <>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem onChange={val => this.handleChange('username', val)} placeholder='请输入用户名'>用户名:</InputItem>
                        <WhiteSpace />
                        {/* onChange是 InputItem带的api,用来获取 表单内容,自带参数val,val是表单的内容*/}
                        <InputItem type='password' onChange={val => this.handleChange('password', val)} placeholder='请输入密码'>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace />
                        <InputItem type='password' onChange={val => this.handleChange('password2', val)} placeholder='请确认密码'>确认密码:</InputItem>
                        <WhiteSpace />
                        <ListItem>用户类型:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* jobhunter求职者 */}
                            <Radio checked={type === 'jobhunter'} onChange={() => this.handleChange('type', 'jobhunter')}>大神</Radio>&nbsp;&nbsp;&nbsp;
                            <Radio checked={type === 'boss'} onChange={() => this.handleChange('type', 'boss')}>老板</Radio>
                        </ListItem>
                        <WhiteSpace />
                        <Button type={'primary'} onClick={() => console.log(this.state)}>注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace />
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </>
        );
    }
}

export default Register;
