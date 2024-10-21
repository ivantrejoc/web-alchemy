import { useRoutes } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Technologies from "../views/Technologies";
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
      path: "/technologies",
      element: <Technologies />
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
