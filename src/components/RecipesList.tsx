import {useEffect, useState} from "react";
import {RecipeType} from "../types/recipe.type.ts";
import Recipe from "./Recipe.tsx";

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
                <Recipe key={recipe.id} recipe={recipe} />
            ))}
        </>
    );
}

export default RecipesList;