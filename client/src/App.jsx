import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Books, { booksLoader } from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Books />} loader={booksLoader} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </>
    )
  );
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
