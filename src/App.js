import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/carousel';

const slides = [
  'https://www.newton.ac.uk/files/covers/968361.jpg',
  'https://www.wired.com/images_blogs/wiredscience/2012/06/pi-walk-660x516.jpg',
  'http://images5.fanpop.com/image/photos/30400000/World-map-random-30415186-1280-1024.jpg',
  'https://i.ytimg.com/vi/_EL6hcIP5ec/maxresdefault.jpg'
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Carousel instanceId={'id1'} width={300} height={150} slides={slides} />
      </div>
    );
  }
}

export default App;
