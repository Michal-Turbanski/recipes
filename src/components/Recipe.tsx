import {RecipeType} from "../types/recipe.type.ts";

function Recipe({ recipe }: { recipe: RecipeType }) {
    return (
        <div key={recipe.id} className="bg-gray-100 rounded-xl shadow-lg overflow-hidden p-8">
            <h1 className="text-4xl mb-4">{recipe.name}</h1>
            <h2 className="text-2xl mb-2">Składniki:</h2>
            <ul className="list-disc list-inside">
                {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient.id}>
                        {ingredient.amount} {ingredient.unit} {ingredient.name}
                    </li>
                ))}
            </ul>
            <h2 className="text-2xl mt-4 mb-2">Przygotowanie: </h2>
            <ol>
                {recipe.description.map((step, index) => (
                    <li className="list-inside list-decimal" key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;