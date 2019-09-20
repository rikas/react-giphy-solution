import React, { Component } from 'react';
import Gif from './Gif';

class GifList extends Component {
  handleClick = (id) => {
    const { onSelect } = this.props;

    onSelect(id);
  }

  render() {
    const { ids } = this.props;

    return (
      <div className="gif-list">
        {ids.map(id => {
          return <Gif key={id} id={id} onClick={this.handleClick} />
        })}
      </div>
    );
  }
}

export default GifList;
