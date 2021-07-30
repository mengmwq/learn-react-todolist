import React, { Component } from 'react';
import { NavLink, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div id="root">
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header"><h2>React Router Demo</h2></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
                {/* 点那个就添加高亮效果  activeClassName*/}
                
                <MyNavLink to="/about" title="About">About</MyNavLink>
                <MyNavLink to="/home" title="Home">Home</MyNavLink>


              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <h3>
                    {/* 注册路由 */}
                    <Route path="/about" component={About} ></Route>
                    <Route path="/home" component={Home}></Route>



                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
