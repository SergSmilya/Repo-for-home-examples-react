import { Component } from 'react';
import Controls from './Controls';
import './Counter.css';

export default class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDicrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <span className="Counter__value">{value}</span>

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDicrement}
        />
      </div>
    );
  }
}
