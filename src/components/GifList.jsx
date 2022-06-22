import Gif from './Gif';

const GifList = ({ ids, onSelect }) => (
  <div className="gif-list">
    {ids.map((id) => {
      return (
        <button key={id} className="button" onClick={() => onSelect(id)}>
          <Gif id={id} />
        </button>
      );
    })}
  </div>
);

export default GifList;
