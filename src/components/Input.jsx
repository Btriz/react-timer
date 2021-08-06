import { Component } from 'react';

class Input extends Component {
  render() {
    const { onChange } = this.props;

    return (
      <div className="inputs">
        <input
          type="number"
          min="0"
          placeholder="MIN"
          className="input"
          id="inputedMinutes"
          onChange={ onChange }
        />

        <span className="separator">:</span>
        
        <input
          type="number"
          min="0"
          max="59"
          placeholder="SEC"
          className="input"
          id="inputedSeconds"
          onChange={ onChange }
        />
      </div>
    )
  }
}

export default Input;

