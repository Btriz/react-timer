import {Component} from 'react';
import phrases from '../phrases';

class Quote extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      change: 0,
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && setInterval(() => {
      this.setState({change: Math.floor(Math.random() * (phrases.length ))});
    }, 6000)
  }

  componentWillUnmount() {
    this._isMounted = false;
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
