import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { API } from '../utils/constants';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.state = { id: null };
  }

  static getDerivedStateFromProps(props, state) {
    const { id } = props.match.params;
    return { id };
  }

  componentDidMount() {
    this.fetchImage();
    document.getElementById('close-modal').focus();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      this.fetchImage();
    }
  }

  fetchImage = async () => {
    const { id } = this.state;
    if (id) {
      const response = await fetch(`${API}/photos/${id}`);
      const photo = await response.json();
      this.setState({ photo });
    }
  };

  hide = event => {
    event.preventDefault();
    this.setState({ photo: null }, () => [setTimeout(this.props.close, 500)]);
  };

  render() {
    const { photo } = this.state;

    return ReactDOM.createPortal(
      <section
        className={`modal ${photo ? 'show' : 'hide'}`}
        ref={this.modalRef}
      >
        <div className="modal-content">
          <a
            id="close-modal"
            href="/photos"
            onClick={this.hide}
            aria-label="close"
            className="close"
          >
            X
          </a>
          {photo && <img className="photo modal-img" src={`${photo.url}`} />}
        </div>
      </section>,
      document.getElementById('modal-root')
    );
  }
}
