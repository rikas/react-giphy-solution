import { useState } from 'react';
import giphy from 'giphy-api';

import Gif from './Gif';
import GifList from './GifList';
import Search from './Search';

const App = () => {
  const [ids, setIds] = useState([]);
  const [selectedId, setSelectedId] = useState('tOWyML1WPzKjm');

  const handleSearch = (text) => {
    const options = {
      q: text,
      rating: 'g',
      limit: 15,
    };

    giphy(process.env.REACT_APP_GIPHY_API_KEY)
      .search(options)
      .then((res) => setIds(res.data.map((gif) => gif.id)));
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
};

export default App;
