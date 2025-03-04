import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';

import HomePage from "./pages/HomePage.tsx";
import AddRecipePage from "./pages/AddRecipePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import RecipePage from "./pages/RecipePage.tsx";
import EditRecipePage from "./pages/EditRecipePage.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<HomePage />}/>
            <Route path="/recipes/:id" element={<RecipePage />}/>
            <Route path="/add-recipe" element={<AddRecipePage />}/>
            <Route path="/edit-recipe/:id" element={<EditRecipePage />}/>
            <Route path='*' element={<NotFoundPage />}/>
        </Route>
    )
)

function App() {
  return (
        <RouterProvider router={router} />
  )
}

export default App
