import {useEffect, useState} from "react";
import {RecipeType} from "../types/recipe.type.ts";
import Recipe from "./Recipe.tsx";

function RecipesList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const res = await fetch("/api/recipes");
            const data = await res.json();
            setRecipes(data);
        };

        fetchRecipes();
    }, []);

    return (
        <div className="container mx-auto mt-10 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {recipes.map((recipe: RecipeType) => (
                    <Recipe key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}

export default RecipesList;