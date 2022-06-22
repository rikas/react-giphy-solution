// <Gif id="tOWyML1WPzKjm" />
const Gif = ({ id }) => {
  const url = `https://media2.giphy.com/media/${id}/200w.webp`;

  return <img src={url} alt="Gif from Giphy" className="gif" />;
};

export default Gif;
