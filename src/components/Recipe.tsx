import {RecipeType} from "../types/recipe.type.ts";
import { Link } from 'react-router-dom';

function Recipe({ recipe }: { recipe: RecipeType }) {
    return (
        <div key={recipe.id} className="bg-gray-100 rounded-xl shadow-lg overflow-hidden p-8 flex flex-col">
            <h1 className="text-4xl mb-4">{recipe.name}</h1>
            <h2 className="text-2xl mb-2">Składniki:</h2>
            <ul className="list-disc list-inside">
                {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient.id}>
                        {ingredient.amount} {ingredient.unit} {ingredient.name}
                    </li>
                ))}
            </ul>
            <div className="mt-auto flex justify-center">
            <Link to={`/recipes/${recipe.id}`} className="bg-amber-200 px-4 py-2 text-xl hover:bg-amber-300 transition-all rounded-xl mt-4 block w-50 text-center self-center">Zobacz przepis</Link>
            </div>
        </div>
    );
}

export default Recipe;