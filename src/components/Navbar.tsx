import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Przepisy kulinarne</Link>
                <ul className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4 items-center">
                    <li><Link to="/" className="px-6 py-3 rounded-lg hover:bg-gray-600 transition-all">Przepisy</Link></li>
                    <li><Link to="/add-recipe" className="px-6 py-3 rounded-lg hover:bg-gray-600 transition-all">Dodaj przepis</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
