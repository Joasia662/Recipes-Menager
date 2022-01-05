export interface IRecipe {
    _id: string;
    name: string;
    preparationTimeInMinutes: number;
    description: string;
    ingredients: IRecipeIngredients[];
    meal_type: string;
};

export interface IRecipeIngredients {
    name: string;
    quantity: string;
}