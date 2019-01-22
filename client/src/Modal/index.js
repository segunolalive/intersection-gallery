import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './Modal.css';

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
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      this.fetchImage();
    }
  }

  fetchImage = async () => {
    const { id } = this.state;
    if (id) {
      const response = await fetch(`http://localhost:5000/photos/${id}`);
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
