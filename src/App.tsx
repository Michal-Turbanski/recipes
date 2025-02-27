import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';

import HomePage from "./pages/HomePage.tsx";
import AddRecipePage from "./pages/AddRecipePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<HomePage />}/>
            <Route path="/add-recipe" element={<AddRecipePage />}/>
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
