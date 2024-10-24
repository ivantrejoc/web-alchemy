import { useRoutes } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Works from "../views/Works";
import Services from "../views/Services";
import NotFound from "../views/Notfound";

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/services",
      element: <Services />
    },
    {
      path: "/works",
      element: <Works />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);
}
export default Router;
