import { Component } from 'react';

class FinishedSpiners extends Component {
  render() {
    return (
      <div className="spiners-absolute">
        <div className="spiners-relative">
          <img src="Burst.png" className="spiner-1 spin-1" alt="logo" />
          <img src="Burst.png" className="spiner-2 spin-2" alt="logo" />
        </div>
      </div>
    );
  }
}

export default FinishedSpiners;