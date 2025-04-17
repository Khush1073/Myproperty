import AppLayout from "../layout/AppLayout";
import About from "../pages/About";
import Buy from "../pages/Buy";
import Sell from "../pages/Sell";
import ContactUS from "../pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Errorpage } from "../pages/Errorpage";
import { SearchProvider } from "../component/SearchContext"; // Ensure correct import
import PropSearchDetailed from "../component/PropSearchDetailed";

// Define the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: '/',
        element: <About />,
      },
      {
        path: 'Buy',
        element: <Buy />,
      },
      {
        path: 'Sell',
        element: <Sell />,
      },
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'Contact',
        element: <ContactUS />,
      },
      { path: 'property-details', 
        element: <PropSearchDetailed /> },
    ],
  },
  {
    future: {
      v7_skipActionErrorRevalidation: true, // Opt-in to the future behavior
    },
  },
]);

// Wrap the router with SearchProvider
const App = () => {
  return (
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  );
};

export default App;
