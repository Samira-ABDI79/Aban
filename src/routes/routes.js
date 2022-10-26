import { useRoutes } from "react-router-dom";
import HomePage from "pages/Home/HomePage";
import NotFound from "components/NotFound/NotFound"

export function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
   
  ]);

  return element;
}
