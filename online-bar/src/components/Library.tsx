import "../styles/Library.css"
import { useEffect, useState } from "react";
import type { IDrink } from "../type";
import { searchCocktails } from "../services/Service";
import { Card } from "./Card";
import { Pagination } from "./Pagination";

export const Library = () => {
        const[cocktails, setCocktails]=useState<IDrink[]>([]);
        const[search, setSearch]=useState<string>("");
        const[currentPage, setCurrentPage]= useState(1);
    const itemsPerPage=10;
   //pagination logic
   const indexOfLast= currentPage*itemsPerPage;
    const indexOfFirst= indexOfLast - itemsPerPage;
    const currentItems= cocktails.slice(indexOfFirst, indexOfLast);
    const pageCount= Math.ceil(cocktails.length / itemsPerPage);

        useEffect(() => {
            fetchCooktails();
        }, []);

        async function fetchCooktails() {
            const data = await searchCocktails("");
            setCocktails(Array.isArray(data.drinks)? data.drinks : []);
        }
        async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
            event.preventDefault();
            const data= await searchCocktails(search);
            setCocktails(Array.isArray(data.drinks)? data.drinks : []);
        }
        

    return (
        <div className="container mt-3 text-center">
        <h3 className="library-title">--- Cocktail Library ---</h3>
        <form className="d-flex w-50 m-auto mb-2" role="search" onSubmit={handleSubmit}>
          <input className="form-control me-3" type="search" placeholder="Search cocktail by name" value={search} aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
          <button className="btn btn-outline-success lato-font" type="submit">Search</button>
     </form>
  <div className="container mt-3">
      {cocktails.length === 0 && search.trim().length > 0 && (
    <p className="text-center text-muted fs-5">No results found!</p>
  )}
  <div className="row justify-content-center">
    {
      currentItems.map((drink) => (
        <div className="col-md-4 mb-4" key={drink.idDrink}>
          <Card img={drink.strDrinkThumb} title={drink.strDrink} id={drink.idDrink}/>
        </div>
      ))
  }
      {cocktails.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          loading={false}
          pageCount={pageCount}
          previous={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          next={() => setCurrentPage((p) => Math.min(p + 1, pageCount))}
        />
      )}
 
  </div>
</div>
        </div>
       
    )
}