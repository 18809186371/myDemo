import React from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { observer, inject } from "mobx-react";
// import axios from 'axios';
// import { requestUrl } from '../util/config';
import { withRouter } from 'react-router-dom';
import { username, password } from '../userConfig';

message.config({ top: 300 })
@inject('loginStore')
@observer class LoginContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // let param = { username: values.userName, password: values.password }
                // axios.post(`${requestUrl}/api/login`, param).then(res => {
                //     if(res.data.errorCode === '1') {
                //         window.setTimeout(message.success(res.data.errMsg), 500)
                //         this.props.loginStore.loginSubmit()
                //         this.props.history.push('/protal/show/home')
                //     } else {
                //         message.error(res.data.errMsg)
                //     }
                // }) 
                if(username === values.userName && password === values.password) {
                    this.props.loginStore.loginSubmit()
                    sessionStorage.setItem('username', values.userName)
                    sessionStorage.setItem('password', values.password)
                    this.props.history.push('/drog/virgin')
                } else {
                    message.error('密码有问题')
                }
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return <div className="container_login">
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: 200 }} className="login-form-button">
                    登录
                </Button>
            </Form>
        </div>
    }
}

const LoginFrom = Form.create()(LoginContainer);
export default withRouter(LoginFrom)
