const API_BASE = "https://www.thecocktaildb.com/api/json/v1/1";

export async function getRandomCocktail() {
  const res = await fetch(`${API_BASE}/random.php`);
  return res.json();
}

export async function searchCocktails(name: string) {
  const res = await fetch(`${API_BASE}/search.php?s=${name}`);
  return res.json();
}