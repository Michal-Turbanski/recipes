import Navbar from "../components/Navbar.tsx";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {RecipeType} from "../types/recipe.type.ts";

function RecipePage() {

    const {id} = useParams();
    const [recipe, setRecipe] = useState<RecipeType | null>(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await fetch(`/api/recipes/${id}`);
                const data = await res.json();
                setRecipe(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecipe();
    }, []);

    if (!recipe) {
        <Navbar/>
        return <h1>Ładowanie...</h1>
    }

    return (
        <>
            <Navbar/>
            <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden p-8 container mx-auto mt-10">
                <h1 className="text-4xl mb-12">{recipe.name}</h1>
                <div key={recipe.id} className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 className="text-2xl mb-2">Składniki:</h2>
                        <ul className="list-disc list-inside">
                            {recipe.ingredients.map((ingredient) => (
                                <li key={ingredient.id}>
                                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl mb-2">Przygotowanie: </h2>
                        <ol>
                            {recipe.description.map((step, index) => (
                                <li className="list-inside list-decimal" key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecipePage;
