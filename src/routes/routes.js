import { useRoutes } from "react-router-dom";
import HomePage from "pages/Home/HomePage";


export function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
   
 
  ]);

  return element;
}
