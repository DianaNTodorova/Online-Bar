import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, type ReactElement } from "react";
import { getRandomCocktail } from "../services/Service";
import '../styles/Carousel.css'
import { type IDrink } from "../type";
import { Link } from "react-router-dom";



export const Carousel = (): ReactElement => {
  const [cocktails, setCocktails] = useState<IDrink[]>([]);

  useEffect(() => {
    fetchRandom();
  }, []);

  async function fetchRandom() {
    const results = [];
    for (let i = 0; i < 3; i++) {
      const data = await getRandomCocktail();
      results.push(data.drinks[0]);
    }
    setCocktails(results);
  }

  const handleOnclickRandom = () => {
    fetchRandom();
  }

  if (cocktails.length === 0) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        {cocktails.map((drink, index) => (
          <div
            key={drink.idDrink}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <Link to={`/cocktail/${drink.idDrink}`}>
            <img
              src={drink.strDrinkThumb}
              className="d-block w-100 h-50"
              alt={drink.strDrink}
            /></Link>
            <div className="carousel-caption d-none d-md-block carousel-title">
              <h3>{drink.strDrink}</h3>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
        onClick={handleOnclickRandom}
      >
        <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
        onClick={handleOnclickRandom}
      >
        <span className="carousel-control-next-icon bg-dark rounded-circle p-3 " aria-hidden="true"></span>
        <span className="visually-hidden ">Next</span>
      </button>
    </div>
  );
};
