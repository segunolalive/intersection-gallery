import React from 'react';
import { Link } from 'react-router-dom';
import './Image.css';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.props.observer.observe(this.imageRef.current);
  }

  componentWillUnmount() {
    this.props.observer.unobserve(this.imageRef.current);
  }

  render() {
    const {
      id,
      url: src,
      user: { name }
    } = this.props.photo;

    return (
      <Link to={`/photos/${id}`}>
        <figure className="img-wrapper" ref={this.imageRef}>
          <img src={src} className="photo" />
          <figcaption className="caption">
            owner: <strong>{name}</strong>
          </figcaption>
        </figure>
      </Link>
    );
  }
}
