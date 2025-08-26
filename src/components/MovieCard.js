import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    // <div className="w-36 md:w-48 pr-4"> 
    // <img alt="Movie Card" src={IMG_CDN_URL + posterPath} /> 
    // </div>


 <div className="w-36 md:w-48 pr-4 transform transition-transform duration-500 ease-out hover:-translate-y-2 hover:rotate-1 sm:hover:scale-105 md:hover:scale-110 hover:shadow-2xl">
  <img
    alt="Movie Card"
    src={IMG_CDN_URL + posterPath}
    className="rounded-xl hover:brightness-110"
  />
</div> 



  );
};
export default MovieCard;
