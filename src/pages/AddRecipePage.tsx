import Navbar from "../components/Navbar.tsx";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function AddRecipePage() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState([{ id: 1, name: "", amount: "", unit: "" }]);
    const [description, setDescription] = useState([""]);

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { id: ingredients.length + 1, name: "", amount: "", unit: "" }]);
    };

    const handleIngredientChange = (index: number, field: string, value :string) => {
        const newIngredients = [...ingredients];
        newIngredients[index][field] = value;
        setIngredients(newIngredients);
    };

    const handleDescriptionChange = (index: number, value: string) => {
        const newDescription = [...description];
        newDescription[index] = value;
        setDescription(newDescription);
    };

    const handleAddStep = () => {
        setDescription([...description, ""]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = { name, ingredients, description };
        try {
            fetch("/api/recipes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newRecipe),
            });

            return navigate('/');

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-10 p-4">
                <h1 className="text-4xl mb-4">Dodaj przepis</h1>
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
                            <div key={index} className="mb-2">
                                <textarea
                                    value={step}
                                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
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
                        Dodaj przepis
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddRecipePage;