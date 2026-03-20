import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Blog from "../pages/Blog";
import { useRoutes } from "react-router-dom";
function PageRouters() {
  const page_routers = [
    {
      path: "/",
      element: <HomePage />,
      exact: true,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ];

  const route = useRoutes(page_routers);
  return <>{route}</>;
}
export default PageRouters;
