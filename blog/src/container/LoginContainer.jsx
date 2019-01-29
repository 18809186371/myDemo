import React from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { username, password } from '../userConfig';
import { observer, inject } from "mobx-react";

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
                if(values.userName === username && values.password === password){
                    setTimeout(() => this.props.loginStore.loginSubmit(),500)
                    sessionStorage.setItem('userInfo', 'admin')
                } else {
                    message.error('密码错误')
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
export default LoginFrom
