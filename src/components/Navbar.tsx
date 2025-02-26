function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-xl font-bold">Przepisy kulinarne</a>
                <ul className="flex space-x-4">
                    <li><a href="#" className="px-6 py-3 rounded-lg hover:bg-gray-600 transition-all">Strona główna</a></li>
                    <li><a href="#" className="px-6 py-3 rounded-lg hover:bg-gray-600 transition-all">Przepisy</a></li>
                    <li><a href="#" className="px-6 py-3 rounded-lg hover:bg-gray-600 transition-all">O stronie</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
