import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { IDrink } from "../type";
import { getCocktailById } from "../services/Service";
import '../styles/Info.css'

export const Info = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState<IDrink | null>(null);

  useEffect(() => {
    async function fetchCocktail() {
      if (!id) return;
      const data = await getCocktailById(id);
      if (Array.isArray(data.drinks) && data.drinks.length > 0) {
        setCocktail(data.drinks[0]);
      }
    }
    fetchCocktail();
  }, [id]);

  if (!cocktail) return <p>Loading...</p>;

  return (
    <div className="card mb-3 m-auto mt-5" style={{ width: "100vh" }}>
      <div className="row g-0">
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img
            src={cocktail.strDrinkThumb}
            className="img-fluid rounded-start w-100 h-100 object-fit-cover"
            alt={cocktail.strDrink}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title text-center text-bold">-- {cocktail.strDrink} --</h5>
            <div className="card-text ">
              <span className="text-bold"> Description:</span>
              <br />
                <p>{cocktail.strInstructions}</p>
            </div>
            <p className="card-text"><span className="text-bold">Type: </span> {cocktail.strAlcoholic}</p>
            <p className="text-bold">Ingredians:</p>
            <ul>
              {Array.from({length:15}, (_,i) => (cocktail as any)[`strIngredient${i+1}`]).filter(Boolean).map((ingredient, index) => (
                <li key={index}>
                  {ingredient} 
                </li>
            
              ))}
            </ul>
            <p className="card-text"><span className="material-symbols-outlined fs-4">
            local_bar</span>:{cocktail.strGlass}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
