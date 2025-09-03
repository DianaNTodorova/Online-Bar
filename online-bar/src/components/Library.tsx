import "../styles/Library.css"
import { useState } from "react";
import type { IDrink } from "../type";

export const Library = () => {
        const[cooktails, setCooktails]=useState<IDrink[]>([]);
    return (
        <div className="container mt-3 text-center">
        <h3 className="library-title">--- Coocktail Library ---</h3>
        <form className="d-flex w-50 m-auto mb-2" role="search">
          <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
     </form>
        </div>
    )
}