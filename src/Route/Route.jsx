import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Hero from "../components/Hero/Hero";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
      {
        index: true,
        loader:()=> fetch('booksData.json'),
        Component: Home
      },
      {
        path: '/bookDetails/:Id',
        loader: () => fetch('booksData.json'),
        Component: BookDetails,
      },
    ],
      errorElement: <Error></Error>
    },
  ]);