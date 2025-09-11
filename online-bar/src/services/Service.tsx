const API_BASE = "https://www.thecocktaildb.com/api/json/v1/1";


export async function getRandomCocktail() {
  const res = await fetch(`${API_BASE}/random.php`);
  return res.json();
}


export async function searchCocktails(name: string) {
  const res = await fetch(`${API_BASE}/search.php?s=${name}`);
  return res.json();
}


export async function getCocktailById(id: string) {
  const res = await fetch(`${API_BASE}/lookup.php?i=${id}`);
  return res.json();
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${API_BASE}/list.php?c=list`);
  const data = await res.json();
  return data.drinks.map((c: { strCategory: string }) => c.strCategory);
}


export async function getCocktailsByCategory(category: string) {
  const res = await fetch(`${API_BASE}/filter.php?c=${encodeURIComponent(category)}`);
  return res.json();
}
