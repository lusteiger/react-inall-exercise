import React, { Component } from "react";
import "./Timer.css"
class Timer extends Component {
  state = {
    time: "Start",
  };

  onTick = () => {
    const { time } = this.state;
    let clock = parseInt(document.getElementById("clock").value);

    timeID: setInterval(() => {
      if (clock > 0) {
        clock--;
        this.setState({
          time: clock + "  Seconds",
        });
      } else {
        this.setState({
          time: "End",
        });
      }
    }, 1000);
  };

  render() {
    return (
      <div className="main">
        <h1>在线倒计时器</h1>
        <div className ="controller">
          <div className="settings">
            <div>
            <label>设置时间</label>
            <input placeholder="请设置时间" id="clock"></input>
            </div>
            <br/>
            <button className="click" onClick={this.onTick.bind() }>Start</button>
          </div>
          <div className="display">
            <p>{this.state.time}</p>
          </div>
        </div>
        <a href = "/">回到主页</a>
      </div>
    );
  }
}

export default Timer;
