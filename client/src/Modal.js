import React from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
  }

  componentDidMount() {}

  render() {
    return ReactDOM.createPortal(
      <article className="modal" ref={this.modalRef}>
        <button aria-label="close">X</button>
        {this.props.children}
      </article>,
      document.getElementById('modal-root')
    );
  }
}
