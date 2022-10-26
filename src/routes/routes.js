import { useRoutes } from "react-router-dom";
import HomePage from "pages/Home/HomePage";
// import { Inbox  , CustomerRequest} from "../components";

export function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
   
  ]);

  return element;
}
