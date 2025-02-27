import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';

import HomePage from "./pages/HomePage.tsx";
import AddRecipePage from "./pages/AddRecipePage.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<HomePage />}/>
            <Route path="/add-recipe" element={<AddRecipePage />}/>
        </Route>
    )
)

function App() {
  return (
        <RouterProvider router={router} />
  )
}

export default App
