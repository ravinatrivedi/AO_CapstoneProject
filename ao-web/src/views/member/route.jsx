import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Member from './index';
import Update from './update';
import Detail from './detail';
import Info from './info';
import './index.less';

export default class RouteMember extends Component {

  render () {
    return (
      <Switch>
        <Route path="/member" exact component={Member}/> {/* exact: exactly match*/}
        <Route path="/member/update" component={Update}/>
        <Route path="/member/detail/:id" component={Info}/>
        <Redirect to="/member" />
      </Switch>
    )
  }
}