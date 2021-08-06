import { Component } from "react";

class Watch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSeconds: 0,
      currentMinutes: 0,
    }

    this.finishCounting = this.finishCounting.bind(this);
  }

  //  💫 OS ESTADOS SÃO ATUALIZADOS COM AS PROPS RECEBIDAS DO INPUT

  componentDidMount() {
    const { minutes, seconds, finish } = this.props;

    this.setState({currentMinutes: parseInt(minutes)});
    this.setState({currentSeconds: parseInt(seconds)});

    finish(false);

    this.countdown = setInterval(() => {
      this.setState((prevState) => ({
        currentSeconds: prevState.currentSeconds - 1
      }));
    }, 1000)
  }

  // ⏰

  componentDidUpdate() {
    const { currentMinutes, currentSeconds } = this.state;

    currentSeconds === 0 && currentMinutes === 0 && this.finishCounting();

    if (currentMinutes > 0 && currentSeconds === 0) {
      this.setState({
        currentMinutes: currentMinutes -1,
        currentSeconds: 59,
        });
    }
  }

  // ✨ LIMPA OS ESTADOS PARA EVITAR LOOPING AO CHAMAR A CALLBACK FINISH 

  finishCounting() {
    const { finish } = this.props;

    clearInterval(this.countdown);

    this.setState({
      currentMinutes: '',
      currentSeconds: '',
    })

    finish(true);
  }

  // ✳️ PARA A CONTAGEM E REMOVE A ANIMAÇÃO DO FINAL AO DESMONTAR

  componentWillUnmount() {
    const { finish } = this.props;

    clearInterval(this.countdown);

    finish(false);
  }

  render() {
    const { currentMinutes, currentSeconds } = this.state;

    return (
      <div className="watch counting">
        <span id="minutes">
          { currentMinutes }
        </span>

        { currentMinutes !== '' && currentSeconds !== '' ? (<span className=""> : </span>) : undefined }

        <span id="seconds">
            { currentSeconds }
        </span>

      </div>
    );
  }
}

export default Watch;
