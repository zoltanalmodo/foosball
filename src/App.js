import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            zoltan almodo : foosball match making (react app)
          </h1>
          <h1 className="App-title">
            make teams!
          </h1>

        </header>
        <h1>
          The logic:
        </h1>
        <p className="App-intro">
          001 - create list of teams with present setup. X
        </p>
        <p className="App-intro">
          002 - create list of players for random allocation into empty
          teams. X
        </p>
        <p className="App-intro">
          003 - complete / fill in empty teams with random players.
        </p>
        <p className="App-intro">
          004 - match teams randomly
        </p>
        <h1>
          Test !
        </h1>
        <h1>
          Extras:
        </h1>
        <p className="App-intro">
          - UI visually appealing
        </p>

      </div>
    );
  }
}

export default App;
