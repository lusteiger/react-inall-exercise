import React from "react";
import "./home.less";

const Home = () => {
  return (
    <div>
      <div className="title">
        <img></img>
        <h1 className="h1">在线实用工具</h1>
      </div>
      <div className="choice">
        <div className="calculator">
          <img className="image" />
          <br />
          <a href="/calculator">计算器</a>
        </div>

        <div className="timer">
          <img className="image" />
          <br />
          <a href="/timer">倒计时器</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
