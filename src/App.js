import { render } from '@testing-library/react';
import React from 'react';

import './App.css';
import Tooltip from './Tooltip';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTolTip: false,
    };
  }
  showToolTip = () => {
    console.log('moiuse over');
    this.setState({
      showTolTip: true,
    });
  };
  removeToolTop = () => {
    console.log('moiuse removed');
    this.setState({
      showTolTip: false,
    });
  };
  render() {
    const { showTolTip } = this.state;
    console.log('showToolTip', showTolTip);
    return (
      <div className="App">
        <h1></h1>

        {showTolTip && (
          <div style={styles.toolTip}>
            <Tooltip />
          </div>
        )}

        {!showTolTip && <div style={styles.NontoolTip}></div>}
        {/* <div style={styles.NontoolTip}></div> */}
        <div
          style={styles.onHoverText}
          onMouseOver={() => this.showToolTip()}
          onMouseOut={() => this.removeToolTop()}
        >
          <p style={styles.hovStyle}>Hover over me</p>
        </div>
      </div>
    );
  }
}

const styles = {
  onHoverText: {
    height: 50,
    width: 165,
    cursor: 'pointer',

    // border: '1px solid green',
    position: 'relative',
    left: '33%',
  },
  toolTip: {},
  NontoolTip: {
    height: 50,
    width: 165,
    position: 'relative',
    left: 197,
    // border: '1px solid green',
    top: 32,
  },
  hovStyle: {
    color: 'gray',
    borderBottom: '3px dotted',
  },
};
export default App;
