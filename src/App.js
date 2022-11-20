import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Products/>
    },
    {
      path: "/cart",
      element: <Cart/>
    }
  ]);

  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
