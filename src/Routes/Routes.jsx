import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Products from "../Pages/Products";
import WishList from "../Pages/WishList";
import ProductDetails from "../Pages/ProductDetails";

const Routes = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {
                path: '/',
                Component: Home,

            },
            { path: '/products', Component: Products, },
            { path: '/wishlist', Component: WishList, },
            { path: '/productDetails/:id', Component: ProductDetails, },
        ],
    },
])

export default Routes;