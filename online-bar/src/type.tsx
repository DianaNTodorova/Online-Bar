export interface IDrink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory?: string;
  strInstructions?: string;
  strGlass?: string;
  strAlcoholic?: string;
  strImageAttribution?: string;
  strIngredient?: IIngredient[];
}

export interface IIngredient{
  strIngredient: string;
  measure?: string;
}