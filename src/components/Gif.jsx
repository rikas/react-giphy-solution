import React, { Component } from 'react';

// <Gif id="tOWyML1WPzKjm" />
// id comes from props.id
class Gif extends Component {
  handleClick = () => {
    const { id, onClick } = this.props;

    onClick(id);
  }

  render() {
    const { id } = this.props;
    const url = `https://media2.giphy.com/media/${id}/200w.webp`;

    return (
      <img src={url} alt="Gif from Giphy" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
