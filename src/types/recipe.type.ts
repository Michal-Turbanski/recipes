type IngredientType = {
    id: number;
    name: string;
    amount: number;
    unit: string;
};

export type RecipeType = {
    id: number;
    name: string;
    ingredients: IngredientType[];
    description: string[];
};
