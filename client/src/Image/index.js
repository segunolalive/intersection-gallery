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

    const loadImage = window.setInterval(() => {
      if (this.imageRef.current) {
        this.imageRef.current
          .querySelector('.photo')
          .classList.remove('hide-image');
        clearInterval(loadImage);
      }
    }, 100);
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
      <Link to={`/photos/${id}`} className="img-link">
        <figure className="img-wrapper" ref={this.imageRef}>
          <img src={src} className="photo hide-image" />
          <figcaption className="caption">
            owner: <strong>{name}</strong>
            <p className="img-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              facilisis fringilla laoreet. Mauris mattis enim ut felis
              consectetur, vitae lacinia enim auctor.
            </p>
          </figcaption>
        </figure>
      </Link>
    );
  }
}
