import React, { Component } from 'react';
import Image from './Image';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [], selected: null };
    this.imgObserver = this.createImageObserver();
  }

  async componentDidMount() {
    const response = await fetch(
      'http://localhost:5000/photos?_page=1&_limit=20'
    );
    const photos = await response.json();
    this.setState({ photos });
  }

  componentWillUnmount() {
    if (this.imgObserver) {
      this.imgObserver.disconnect();
    }
  }

  toggleGrow = entry => {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('grow');
      } else {
        change.target.classList.remove('grow');
      }
    });
  };

  createImageObserver = () => {
    let options = {
      threshold: [0.4]
    };

    return new IntersectionObserver(this.toggleGrow, options);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Cohort 44 React</h2>
        </header>
        <main>
          {this.state.photos.map(photo => (
            <Image photo={photo} observer={this.imgObserver} key={photo.id} />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
