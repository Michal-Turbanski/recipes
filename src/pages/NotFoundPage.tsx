import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";

const NotFoundPage = () => {
    return (
        <>
            <Navbar />
            <section className="text-center flex flex-col justify-center items-center h-96">
                <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
                <p className="text-xl mb-5">Strona nie istnieje</p>
                <Link
                    to="/"
                    className="bg-amber-200 hover:bg-amber-300 rounded-lg px-3 py-2 mt-4"
                >Wróć</Link
                >
            </section>
        </>
    );
};

export default NotFoundPage;