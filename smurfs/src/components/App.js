import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from '../redux/actions'

import SmurfCollector from "./SmurfCollector";
import { Route, withRouter } from "react-router";
class App extends Component {

  componentDidMount() {

    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <nav style={{ width: '100%', backgroundColor: '#62cdfd', position: "fixed", top: 0, display: 'flex', justifyContent: 'space-evenly' }}>
          <h1>
            Smurfs!
          </h1>
          <button onClick={e => {
            e.preventDefault()
            this.props.history
          }}>Add a Smurf</button>
        </nav>
        <Route exact path='/'>
          <div style={{ marginTop: '100px' }}>
            <SmurfCollector />
          </div>
        </Route>
        <Route path='/add'>

        </Route>

      </div>
    );
  }
}

export default withRouter(App);
