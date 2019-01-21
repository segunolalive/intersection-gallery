import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './Modal.css';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
  }

  render() {
    const { selected } = this.props;

    return ReactDOM.createPortal(
      <section
        className={`modal ${selected ? 'show' : 'hide'}`}
        ref={this.modalRef}
      >
        <div className="modal-content">
          <Link to="/photos" aria-label="close" className="close">
            X
          </Link>
          {selected && (
            <img className="photo modal-img" src={`${selected.url}`} />
          )}
        </div>
      </section>,
      document.getElementById('modal-root')
    );
  }
}
