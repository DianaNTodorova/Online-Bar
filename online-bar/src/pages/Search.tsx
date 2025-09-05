import { useEffect, useState, type ReactElement } from "react"
import type { IDrink } from "../type";
import { searchCocktails } from "../services/Service";
import { Item } from "../components/Item";

export const Search = ():ReactElement => {
    const[searchTerm, setSearchTerm]= useState("");
    const[cocktails, setCocktails]= useState<IDrink[]>([]);

    useEffect(() => {
        fetchCooktails();
    }, []);
        async function fetchCooktails() {
                const data = await searchCocktails("");
                setCocktails(Array.isArray(data.drinks)? data.drinks : []);
            }
         async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
            event.preventDefault();
            const data= await searchCocktails(searchTerm);
            setCocktails(Array.isArray(data.drinks)? data.drinks : []);
        }
        const category=()=>{cocktails.map((drink)=>drink.strCategory)}
        console.log(category);
    return (
 
    <div className="container mt-3 text-center">
    <form className="d-flex w-50 m-auto mb-2" role="search" onSubmit={handleSubmit}> 
          <input className="form-control me-3" type="search" placeholder="Search cocktail by name" 
          value={searchTerm} aria-label="Search" 
          onChange={(e)=>setSearchTerm(e.target.value)}/>
          <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    <ul className="list-group list-group-flush d-flex w-50 m-auto mb-2">
        {cocktails.map((drink)=>(
            <Item key={drink.idDrink} title={drink.strDrink} id={drink.idDrink}/>
        ))}
    </ul>
     </div>
    )
}