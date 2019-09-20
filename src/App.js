import React, { Component } from 'react';
import './App.css';
import Gif from './components/Gif';
import GifList from './components/GifList';
import Search from './components/Search';
import giphy from 'giphy-api';

class App extends Component {
  state = {
    ids: [],
    selectedID: 'tOWyML1WPzKjm' // initial value
  }

  onGifSelect = (id) => {
    this.setState({ selectedID: id });
  }

  handleSearch = (event) => {
    const { value } = event.target;

    giphy('KI1wl2DyhOo41x2tscGMTti9cT1HeaeB').search({
        q: value,
        rating: 'g',
        limit: 10
      })
      .then(res => {
        console.log(res);
        this.setState({ ids: res.data.map(gif => gif.id) });
      });
  }

  render() {
    const { ids } = this.state;

    return (
      <div>
        <div className="left-scene">
          <Search onChange={this.handleSearch} />
          <div className="selected-gif">
            <Gif id={this.state.selectedID} />
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={ids} onSelect={this.onGifSelect} />
        </div>
      </div>
    );
  }
}

export default App;
