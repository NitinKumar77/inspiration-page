import Home from "./pages/Home";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes";
const router = createBrowserRouter(routes);
function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <Home />
      </div>
    </RouterProvider>
  );
}

export default App;
