import React, {Component} from 'react';

interface Props {
  name: string;
  className: string;
  onClick?: React.MouseEventHandler;
}

class Button extends Component<Props> {
  render() {
    return (
      <button
        type='submit'
        className={this.props.className}
        onClick={this.props.onClick}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Button;