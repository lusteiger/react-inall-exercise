import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: "Start",
  };

  onTick = () => {
    const { time } = this.state;
    let clock = parseInt(document.getElementById("clock").value);
    
      timeID: setInterval(() => {
                if(clock >0){
                          clock--;
                          this.setState({
                                    time:clock +"  Seconds"
                          })
                }
                else{
                    this.setState({
                              time:"End"
                    })
                }
      }, 1000)
    

  };



  render() {
    return (
      <div>
        <h1>在线倒计时器</h1>
        <div>
          <div>
            <label>设置时间</label>
            <input placeholder="请设置时间" id="clock"></input>
            <button onClick={this.onTick.bind()}>Start</button>
          </div>
          <div>
            <p>{this.state.time}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
