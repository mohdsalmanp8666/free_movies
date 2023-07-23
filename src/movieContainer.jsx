const MovieContainer = ({ movie }) => {
  return (
    // <div className="container">
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div className="">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div className="">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
    // </div>
  );
};

export default MovieContainer;
