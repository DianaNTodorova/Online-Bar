import { useEffect, useState, type ReactElement } from "react"
import type { IDrink } from "../type";
import { searchCocktails } from "../services/Service";
import { Item } from "../components/Item";
import { Pagination } from "../components/Pagination";

export const Search = ():ReactElement => {
    const[searchTerm, setSearchTerm]= useState("");
    const[cocktails, setCocktails]= useState<IDrink[]>([]);
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
            const data= await searchCocktails(searchTerm);
            setCocktails(Array.isArray(data.drinks)? data.drinks : []);
        }
        const category=()=>{cocktails.map((drink)=>drink.strCategory)}
        console.log(category);
    return (
  <div className="container mt-3 text-center">
    {/* Search Form */}
    <form
      className="d-flex w-50 m-auto mb-2"
      role="search"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control me-3"
        type="search"
        placeholder="Search cocktail by name"
        value={searchTerm}
        aria-label="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>

    {cocktails.length > 0 && <h3 className="m-4">--- Your Cocktail List ---</h3>}


    <ul className="list-group list-group-flush d-flex w-50 m-auto mb-2">
      {currentItems.map((drink) => (
        <Item key={drink.idDrink} title={drink.strDrink} id={drink.idDrink} />
      ))}
    </ul>


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
);

}