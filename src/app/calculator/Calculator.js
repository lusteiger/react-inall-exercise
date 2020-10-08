import React, { Component } from "react";
import "./calculator.css";

class Calculator extends Component {
  state = {
    result: "",
    ops: "",
    first: "",
    second: "",
  };

  onButtonClick = (event) => {
    const { result, first, second, ops } = this.state;
    const { value } = event.target;

    if (ops === "") {
      this.setState({
        first: parseInt(first + value),
      });
    } else {
      this.setState({
        second: parseInt(second + value),
      });
    }
    this.setState({
      result: result + value,
    });
  };

  onClear = () => {
    const { result } = this.state;
    this.setState({
      result: "",
      ops: "",
      first: "",
      second: "",
    });
  };

  onOps = (event) => {
    const { result } = this.state;
    const ops = event.target.value;
    if (result !== "")
      this.setState({
        result: result + ops,
        ops: ops,
      });
  };

  onEquals = () => {
    const { ops, first, second } = this.state;
    switch (ops) {
      case "+":
        this.setState({
          result: first + second,
          first: first + second,
          second: "",
        });
        break;
      case "-":
        this.setState({
          result: first - second,
          first: first - second,
          second: "",
        });
        break;
      case "*":
        this.setState({
          result: first * second,
          first: first * second,
          second: "",
        });
        break;
    }
  };

  render() {
    return (
      <div className="main">
        <h1>在线计算器</h1>
        <div>
          <div id="calculator" className="calculator">
            <div id="viewer" className="viewer">
              {this.state.result}
            </div>
            <button
              data-ops="加"
              value="+"
              className="ops"
              onClick={this.onOps.bind(this)}
            >
              +
            </button>
            <button
              data-ops="减"
              value="-"
              className="ops"
              onClick={this.onOps.bind(this)}
            >
              -
            </button>
            <button
              data-ops="乘"
              value="*"
              className="ops"
              onClick={this.onOps.bind(this)}
            >
              *
            </button>
            <button
              className="num"
              value="7"
              onClick={this.onButtonClick.bind(this)}
            >
              7
            </button>
            <button
              className="num"
              value="8"
              onClick={this.onButtonClick.bind(this)}
            >
              8
            </button>
            <button
              className="num"
              value="9"
              onClick={this.onButtonClick.bind(this)}
            >
              9
            </button>
            <button
              className="num"
              value="4"
              onClick={this.onButtonClick.bind(this)}
            >
              4
            </button>
            <button
              className="num"
              value="5"
              onClick={this.onButtonClick.bind(this)}
            >
              5
            </button>
            <button
              className="num"
              value="6"
              onClick={this.onButtonClick.bind(this)}
            >
              6
            </button>
            <button
              className="num"
              value="1"
              onClick={this.onButtonClick.bind(this)}
            >
              1
            </button>
            <button
              className="num"
              value="2"
              onClick={this.onButtonClick.bind(this)}
            >
              2
            </button>
            <button
              className="num"
              value="3"
              onClick={this.onButtonClick.bind(this)}
            >
              3
            </button>
            <button
              className="num"
              value="0"
              onClick={this.onButtonClick.bind(this)}
            >
              0
            </button>
            <button id="clear" className="clear" onClick={this.onClear.bind()}>
              Clear
            </button>
            <button
              id="equals"
              className="equals"
              onClick={this.onEquals.bind()}
            >
              =
            </button>
          </div>
        </div>
        <br />
        <a href="/">回到主页</a>
      </div>
    );
  }
}

export default Calculator;
