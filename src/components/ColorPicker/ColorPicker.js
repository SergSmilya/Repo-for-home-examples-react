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
      </div>
    );
  }
}
