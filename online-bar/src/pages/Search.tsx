import { useEffect, useState, type ReactElement } from "react";
import type { IDrink } from "../type";
import { getCategories, getCocktailsByCategory, searchCocktails } from "../services/Service";
import { Item } from "../components/Item";
import { Pagination } from "../components/Pagination";

export const Search = (): ReactElement => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState<IDrink[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = cocktails.slice(indexOfFirst, indexOfLast);
  const pageCount = Math.ceil(cocktails.length / itemsPerPage);

  useEffect(() => {
    fetchCocktails();
    fetchCategories();
  }, []);

  async function fetchCocktails() {
    const data = await searchCocktails("");
    setCocktails(Array.isArray(data.drinks) ? data.drinks : []);
  }

  async function fetchCategories() {
    const data = await getCategories();
    setCategories(data);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = await searchCocktails(searchTerm);
    setCocktails(Array.isArray(data.drinks) ? data.drinks : []);
    setCurrentPage(1);
  }

  async function handleCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    const category = event.target.value;
    if (category) {
      const data = await getCocktailsByCategory(category);
      setCocktails(Array.isArray(data.drinks) ? data.drinks : []);
      setCurrentPage(1);
    } else {
      fetchCocktails();
    }
  }

  return (
    <div className="container mt-5 text-center">
      <form
  className="container mb-3"
  role="search"
  onSubmit={handleSubmit}
>
  <div className="row g-2 justify-content-center">
    <div className="col-12 col-md-8 d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search cocktail by name"
        value={searchTerm}
        aria-label="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-outline-success lato-font" type="submit">
        Search
      </button>
    </div>

    <div className="col-12 col-md-8">
      <select
        className="form-select text-success"
        id="inputGroupSelect01"
        onChange={handleCategory}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  </div>
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
};
