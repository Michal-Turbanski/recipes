import Navbar from "./components/Navbar.tsx";
import RecipesList from "./components/RecipesList.tsx";

function App() {
  return (
      <div className="bg-gray-200 min-h-screen">
          <Navbar/>
          <RecipesList/>
      </div>
  )
}

export default App
