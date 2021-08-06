import { Component } from 'react';
import burst from './burst.png';

class FinishedSpiners extends Component {
  render() {
    return (
      <div className="spiners-absolute">
        <div className="spiners-relative">
          <img src={ burst } className="spiner-1 spin-1" alt="logo" />
          <img src={ burst } className="spiner-2 spin-2" alt="logo" />
        </div>
      </div>
    );
  }
}

export default FinishedSpiners;