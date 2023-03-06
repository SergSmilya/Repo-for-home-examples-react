import { Component } from 'react';
import './ColorPicker.css';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default class ColorPicker extends Component {
  state = {
    activeIdx: 1,
    startValue: 'Hello',
    name: '',
    tag: '',
  };

  setActiveIdx = i => {
    this.setState({
      activeIdx: i,
    });
  };

  activeClassName = i => {
    const activeClass = ['ColorPicker__option'];

    if (i === this.state.activeIdx)
      activeClass.push('ColorPicker__option--active');

    return activeClass.join(' ');
  };

  changeValue = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: </p>
        <div>
          {colorPickerOptions.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.activeClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changeValue}
            />
          </label>

          <label>
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.changeValue}
            />
          </label>

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
