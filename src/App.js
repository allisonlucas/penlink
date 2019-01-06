import React, { Component } from 'react';
import './app.css';
import { formatType, sortData } from './utils/dataFormatting';
import data from './data.json';

class App extends Component {
  state = {
    data
  }

  _getList = () => {
    const sortedClone = sortData(data);
    // map over the sorted array and display as list items
    return sortedClone.map((d, i) => (
        <li key={d.id}>
          <div className={'titleContainer'}>
            <h3>{d.title}</h3>
            <span className={'type'}>
              {formatType(d.type)}
            </span>
          </div>
          <div>
            <button onClick={() => {
              this.setState({
                data: data.splice(i, 1)
              })
            }}>
              REMOVE
            </button>
          </div>
        </li>
      )
    );
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h2>
            PenLink Coding Challenge
          </h2>
          <ul>{this._getList()}</ul>
        </header>
      </div>
    );
  }
}

export default App;
