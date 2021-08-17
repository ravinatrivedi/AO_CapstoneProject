import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Menu, Icon } from 'antd';



import logo from '../../assets/images/logo.png';
import './index.less';

const { SubMenu } = Menu;

class Navigation extends Component {


  render() {
    return (
      <div className="navigation">
        <div className="navigation-link">
          <Link to="/home" >
            <img src={logo} alt="logo"/>
          </Link>
        </div>

        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"

        >
          <Menu.Item key="/home">
            <Link to="/home">
            <Icon type="pie-chart" />
            <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/competition">
            <Icon type="desktop" />
            <span>Competitions</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/member">
            <Icon type="inbox" />
            <span>Members</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/event">
            <Icon type="inbox" />
            <span>Events</span>
          </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="ranking">
            <Icon type="inbox" />
            <span>Rankings</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navigation;