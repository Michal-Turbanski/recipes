import {RecipeType} from "../types/recipe.type.ts";

function Recipe({ recipe }: { recipe: RecipeType }) {
    return (
        <div key={recipe.id}>
            <h1 className="text-4xl">{recipe.name}</h1>
            <h2 className="text-2xl">Składniki:</h2>
            <ul>
                {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient.id}>
                        {ingredient.amount} {ingredient.unit} {ingredient.name}
                    </li>
                ))}
            </ul>
            <h2 className="text-2xl">Przygotowanie: </h2>
            <ol>
                {recipe.description.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;