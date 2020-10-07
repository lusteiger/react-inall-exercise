import React, { Component } from "react";
import "./app.less";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator";
import Timer from "./Timer";

class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
        <div className="app">
          <Link to="/" className="nav">Home</Link>
          <Link to="/calculator" className="nav">在线计算器</Link>
          <Link to="/Timer" className="nav">在线倒计时器</Link>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/timer" component={Timer} />
        </BrowserRouter>
      
    );
  }
}

export default App;
