import { useParams } from "react-router-dom";
import "./App.css";
import { movieData } from "./MovieData";
import { Link } from "react-router-dom";
const Desc = ({ el }) => {
  console.log(el, "hahaha");
  const { idMovie } = useParams();
  console.log(idMovie, "test");
  return (
    <div className="test">
      <iframe
        className="fil"
        width="560"
        height="315"
        src={movieData.find((el, i) => el.id === Number(idMovie)).trailer}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h3 className="des">
        {movieData.find((el, i) => el.id === Number(idMovie)).description}
      </h3>
      <Link to="/">
        <button className="btn">Go To Home</button>
      </Link>
    </div>
  );
};
export default Desc;
