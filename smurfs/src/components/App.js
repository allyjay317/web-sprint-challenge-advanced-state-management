import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from '../redux/actions'

import SmurfCollector from "./SmurfCollector";
import { Route, withRouter } from "react-router";
import AddForm from "./AddForm";
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
            this.props.history.push('/add')
          }}>Add a Smurf</button>
        </nav>
        <div style={{ marginTop: '100px' }}>
          <Route exact path='/'>
            <SmurfCollector />
          </Route>
          <Route path='/add'>
            <AddForm />
          </Route>
        </div>

      </div >
    );
  }
}

export default connect(() => { }, { getSmurfs })(withRouter(App));
