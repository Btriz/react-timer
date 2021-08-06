import { Component } from 'react';
import './App.css';
import Quote from './components/Quote';
import FullWatch from './components/FullWatch';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputedMinutes: 0,
      inputedSeconds: 0,
      started: false,
      stoped: true,
      paused: false,
    }

    this.playPause = this.playPause.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  playPause() {
    this.setState((prevState) => ({started: !prevState.started}))
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    const { started, inputedMinutes, inputedSeconds } = this.state;

    return (
      <main className="App">
        <div className="buttons">

          {/*⏯️ BOTÃO ALTERA O TEXTO               */}

          <button
            className="btn"
            id="start-pause"
            type="button"
            onClick={this.playPause}
          >
              {started === false ? 'START' : 'PAUSE'}
          </button>

          <Input onChange={ this.handleChange } />

          {/*⏹️ DESMONTA O RELÓGIO                */}

          <button 
            className="btn"
            id="start-pause"
            type="button"
            onClick={ started ? this.playPause : undefined }
          >
            STOP
          </button>
        </div>
  
        <FullWatch
          minutes={ inputedMinutes }
          seconds={ inputedSeconds }
          started={ started } />
        <Quote />
        </main>
    );
  }
}

export default App;
