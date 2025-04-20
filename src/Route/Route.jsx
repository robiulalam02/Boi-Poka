import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadList from "../Pages/ReadList/ReadList";
import ReadCharts from "../Pages/ReadCharts/ReadCharts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,  
    children: [
      {
        index: true,
        loader: () => fetch('booksData.json'),
        Component: Home
      },
      {
        path: '/bookDetails/:Id',
        loader: () => fetch('booksData.json'),
        Component: BookDetails,
      },
      {
        path: 'readlist',
        loader: () => fetch('booksData.json'),
        Component: ReadList
      },
      {
        path: 'readcharts',
        loader: () => fetch('booksData.json'),
        Component: ReadCharts
      },
    ],
    errorElement: <Error></Error>
  },
]);