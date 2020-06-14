import React from "react";
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

import logo from '../../assets/images/logo.jpg'

const Item = Form.Item    //不能写在import之前
export default class Login extends React.Component {

    onFinish=(values)=>{
        if(values.username){
            console.log('校验通过',values.username)
        }else{
            console.log('校验不通过')
        }
    }


    render() {

        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt=""/>
                    <h1>后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <div>
                        <Form
                            onFinish={this.onFinish}
                            name="normal_login"
                            className="login-form"
                            initialValues={{remember: true}}
                        >
                            <Item
                                name="username"
                                rules={
                                    [
                                    {required: true, message: '用户名不能为空!'},
                                    {min: 5, message: '用户名不能少于4位!'},
                                    {max: 12, message: '用户名不能超过12位!'},
                                    {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或者下划线组成'},
                                    ]
                                }
                            >

                                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
                            </Item>

                            <Item
                                name="password"
                                rules={[{required: true, message: '密码不能为空!'}]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Item>
                            <Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                            </Item>
                        </Form>
                    </div>
                </section>
            </div>
        );
    }
}



