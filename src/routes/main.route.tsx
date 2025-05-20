import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Cart from "../pages/cart";
import Order from "../pages/order";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // ✅ Dùng layout chung
    children: [
      {
        index: true,
        element: (
          <div>
            <h1>Hello World</h1>
            <p>Welcome to the homepage</p>
          </div>
        ),
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
]);
