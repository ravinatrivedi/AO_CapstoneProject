import React, {Component} from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import './index.less';
import Navigation from '../../components/navigation';
import Header from '../../components/header';
import Home from '../home';
import RouteMember from '../member/route';
import Competition from '../competition';
import Event from '../event';
import Ranking from '../ranking';


const { Footer, Sider, Content } = Layout;

class Admin extends Component {
  render() {

    // if (!user._id) {
    //   return <Redirect to="/login"/>
    // }

    return (
      <Layout style={{height:'100%'}}>
        <Sider style={{background:'black'}}>
          <Navigation />
        </Sider>
        <Layout>
          <Header/>
          <div className="wrapper">

          <Content className="mycontent" style={{background:'white', margin:'20px'}}>
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path='/member' component={RouteMember} />
              <Route path='/competition' component={Competition} />
              <Route path='/event' component={Event} />
              <Route path='/ranking' component={Ranking} />
              <Redirect to="/home"/>
            </Switch>
          </Content>

          <Footer style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.5)'}} className="footer">
            <div className="footer-left">Copyright © 2020 ATHLETICS ONTARIO</div>
            <div className="footer-right">WEBSITE BY HUMBER</div>
          </Footer>
          </div>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;