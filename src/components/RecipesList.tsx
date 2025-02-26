import {useEffect, useState} from "react";
import {RecipeType} from "../types/recipe.type.ts";

function RecipesList() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const res = await fetch("http://localhost:8000/recipes");
            const data = await res.json();
            setRecipes(data);
        };

        fetchRecipes();

    }, []);

    return (
        <>
            {recipes.map((recipe: RecipeType) => (
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
            ))}
        </>
    );
}

export default RecipesList;