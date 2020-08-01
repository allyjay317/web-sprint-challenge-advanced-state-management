import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from '../redux/actions'
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}




export default connect(() => { }, { getSmurfs })(App);
