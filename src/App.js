import React, { useState } from 'react';
import './App.css';
import Gif from './components/Gif';
import GifList from './components/GifList';
import Search from './components/Search';
import giphy from 'giphy-api';

const API_KEY = 'KI1wl2DyhOo41x2tscGMTti9cT1HeaeB';

const App = () => {
  const [ids, setIds] = useState([]);
  const [selectedId, setSelectedId] = useState('tOWyML1WPzKjm');

  const handleSearch = (text) => {
    const options = {
      q: text,
      rating: 'g',
      limit: 10
    };

    giphy(API_KEY).search(options).then((res) => setIds(res.data.map(gif => gif.id)));
  };

  return (
    <div>
      <div className="left-scene">
        <Search onChange={handleSearch} />

        <div className="selected-gif">
          <Gif id={selectedId} />
        </div>
      </div>

      <div className="right-scene">
        <GifList ids={ids} onSelect={setSelectedId} />
      </div>
    </div>
  );
}

export default App;
