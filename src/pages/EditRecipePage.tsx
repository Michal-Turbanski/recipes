import Navbar from "../components/Navbar.tsx";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecipeType } from "../types/recipe.type.ts";

type IngredientType = {
    id: number;
    name: string;
    amount: string;
    unit: string;
};

function EditRecipePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState<IngredientType[]>([{ id: 1, name: "", amount: "", unit: "" }]);
    const [description, setDescription] = useState([""]);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await fetch(`/api/recipes/${id}`);
                const data: RecipeType = await res.json();
                setName(data.name);
                setIngredients(data.ingredients);
                setDescription(data.description);
            } catch (error) {
                console.error(error);
                navigate('/404');
            }
        };

        fetchRecipe();
    }, [id, navigate]);

    const handleIngredientChange = (index: number, field: keyof IngredientType, value: string) => {
        const newIngredients = [...ingredients];
        newIngredients[index][field] = value;
        setIngredients(newIngredients);
    };

    const handleDescriptionChange = (index: number, value: string) => {
        const newDescription = [...description];
        newDescription[index] = value;
        setDescription(newDescription);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { id: ingredients.length + 1, name: "", amount: "", unit: "" }]);
    };

    const handleRemoveIngredient = (index: number) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    const handleAddStep = () => {
        setDescription([...description, ""]);
    };

    const handleRemoveStep = (index: number) => {
        const newDescription = description.filter((_, i) => i !== index);
        setDescription(newDescription);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const updatedRecipe = { name, ingredients, description };
        try {
            await fetch(`/api/recipes/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedRecipe),
            });
            navigate(`/recipes/${id}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-10 p-4">
                <h1 className="text-4xl mb-4">Edytuj przepis</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Nazwa przepisu
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <h2 className="text-2xl mb-2">Składniki</h2>
                        {ingredients.map((ingredient, index) => (
                            <div className="flex justify-start gap-4">
                                <div key={index} className="mb-2 grid grid-cols-1 lg:grid-cols-3 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Nazwa składnika"
                                        value={ingredient.name}
                                        onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Ilość"
                                        value={ingredient.amount}
                                        onChange={(e) => handleIngredientChange(index, "amount", e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Jednostka"
                                        value={ingredient.unit}
                                        onChange={(e) => handleIngredientChange(index, "unit", e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                                        required
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveIngredient(index)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer mb-3"
                                >
                                    Usuń
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddIngredient}
                            className="bg-amber-200 hover:bg-amber-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                        >
                            Dodaj składnik
                        </button>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-2xl mb-2">Opis</h2>
                        {description.map((step, index) => (
                            <div key={index} className="mb-2 flex justify-start gap-4">
                                <textarea
                                    value={step}
                                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveStep(index)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                                >
                                    Usuń
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddStep}
                            className="bg-amber-200 hover:bg-amber-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                        >
                            Dodaj kolejny krok
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                    >
                        Zapisz zmiany
                    </button>
                </form>
            </div>
        </>
    );
}

export default EditRecipePage;