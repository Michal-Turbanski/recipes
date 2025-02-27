import { NavLink } from 'react-router-dom';

function Navbar() {

    const linkClass = ({isActive}: {isActive: boolean}) =>
        isActive ?
            'px-6 py-3 rounded-lg hover:bg-gray-600 transition-all bg-gray-600' :
            'px-6 py-3 rounded-lg hover:bg-gray-600 transition-all';

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink to="/" className="text-xl font-bold">Przepisy kulinarne</NavLink>
                <ul className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4 items-center">
                    <li><NavLink to="/" className={linkClass}>Przepisy</NavLink></li>
                    <li><NavLink to="/add-recipe" className={linkClass}>Dodaj przepis</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
