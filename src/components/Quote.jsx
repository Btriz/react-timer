import {Component} from 'react';
import phrases from '../phrases';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({change: Math.floor(Math.random() * (phrases.length ))});
    }, 6000)
  }

  render() {
    
    const { change } = this.state;
    return (
      <p className="quote">
        { phrases[change].text }
      </p>
    );
  }
}

export default Quote;
