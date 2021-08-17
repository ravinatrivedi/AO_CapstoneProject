import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Form, Icon, Input, Button, message} from 'antd';

import './index.less';
import logo from '../../assets/images/logo.png';

const Item = Form.Item;

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-inner">
          <header className='login-header'>
            <img src={logo} alt="logo"/>
            <h1>Athletics Ontario Admin System</h1>
          </header>
          <section className='login-content'>
            <h1>Login</h1>
            <Form onSubmit={this.login} className="login-form">
              <Item>
                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                       placeholder="username"/> </Item>
              <Item>
                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                       type="password" placeholder="password"/>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  login
                </Button> </Item>
            </Form>
          </section>
        </div>
      </div>
    );
  }
}

export default Login;