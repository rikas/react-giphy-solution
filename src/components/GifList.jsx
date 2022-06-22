import Gif from './Gif';

const GifList = ({ ids, onSelect }) => (
  <div className="gif-list">
    {ids.map((id) => {
      return (
        <a key={id} className="link" href="#" onClick={() => onSelect(id)}>
          <Gif id={id} />
        </a>
      );
    })}
  </div>
);

export default GifList;
