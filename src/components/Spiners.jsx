import { Component } from 'react';
import typo from './typo.png'

class Spiners extends Component {
  render() {
    const { started } = this.props;

    return (
      <div className="spiners-absolute">
        <div className="spiners-relative">
          <img
            src={ typo }
            className={ started ? "spiner-1 spin-1" : "spiner-1"}
            alt="decorative" />
          <img
            src={ typo }
            className={ started ? "spiner-2 spin-2" : "spiner-2"}
            alt="decorative"
          />
        </div>
      </div>
    );
  }
}

export default Spiners;