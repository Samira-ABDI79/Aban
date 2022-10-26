import { useRoutes } from "react-router-dom";
import HomePage from "pages/Home/HomePage";
import NotFound from "components/NotFound/NotFound"
import CommentsTable from "components/CommentsTable/CommentsTable"
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
     {
      path: "/comments-table",
      element: <CommentsTable />,
    },
   
  ]);

  return element;
}
