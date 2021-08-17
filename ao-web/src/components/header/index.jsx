import React, {Component} from 'react';

import './index.less';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-top">
          <span>Welcome, admin  </span>
          <a>LOGOUT</a>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">Athletics Ontario Admin System</div>
          <div className="header-bottom-right">
          </div>
        </div>
      </div>
    );
  }
}

export default Header;