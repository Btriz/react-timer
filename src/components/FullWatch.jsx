import { Component } from 'react';
import FinishedSpiners from './FInishedSpiners';
import Spiners from './Spiners';
import Watch from './Watch';

class FullWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
    }

    this.finish = this.finish.bind(this);
  }

  finish(status) {
    this.setState({ finished: status })
  }

  render() {
    const { minutes, seconds, started } = this.props;
    const { finished } = this.state;

    return (
      <div className="full-watch">

        { finished ? <FinishedSpiners /> : <Spiners started={ started } /> }

        { started ? <Watch
          minutes={ minutes }
          seconds={ seconds }
          started={ started }
          finish={ this.finish }
        /> : <span className="watch">00:00</span> }

      </div>
    );
  }
}

export default FullWatch;
