import React, {Component} from "react";
import Test from "./Test"

export default class App extends Component {

  state = {
    someValue: ''
  }

  onChangeState = (value) => {
    this.setState({someValue: value})
  }

  render() {
    return (
      <div>
        <Test val='123' onInputChange={this.onInputChange} onChangeState={this.onChangeState}/>
        {this.state.someValue}
      </div>
    )
  }
}

