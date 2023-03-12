import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import RootLayout from "./Routes/RootLayout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  },
])


function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
