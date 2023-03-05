import { Component } from 'react';
import './Dropdown.css';

export default class Dropdown extends Component {
  state = { visible: false };

  toggle = () => {
    this.setState(a => ({
      visible: !a.visible,
    }));
  };

  //   show = () => {
  //     this.setState({
  //       visible: true,
  //     });
  //   };

  //   hide = () => {
  //     this.setState({
  //       visible: false,
  //     });
  //   };

  render() {
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? 'Скріть' : 'Показать'}
        </button>

        {/* <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          Скрить
        </button> */}

        {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}
