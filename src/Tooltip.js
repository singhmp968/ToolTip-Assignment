import React from 'react';

class Tooltip extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.parentDiv}>
          <div style={styles.thirdStyle}></div>

          <div style={styles.mainDiv}>
            <div style={styles.secStyle}></div>
            <div className="tooltip" style={styles.tooltip}>
              Thanks for hovering! i am tooltip
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  parentDiv: {
    position: 'relative',
    top: '40px',
  },
  mainDiv: {
    display: 'flex',
    position: 'relative',
    left: '50%',
  },
  secStyle: {
    height: 50,
    width: 35,
    // border: '1px solid green',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: 'black',
  },
  thirdStyle: {
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    borderRight: '10px solid black',
    position: 'relative',
    left: '49.2%',
    top: '33px',
  },
  tooltip: {
    color: 'white',
    height: 50,
    width: 165,
    // position: 'relative',
    // left: 197,
    // border: '1px solid green',
    top: 32,
    backgroundColor: 'black',
  },
};
export default Tooltip;
