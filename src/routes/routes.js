import { useRoutes } from "react-router-dom";
import HomePage from "pages/Home/HomePage";
import NotFound from "components/NotFound/NotFound"
import CommentsTable from "components/CommentsTable/CommentsTable"
import UsersTable from "components/UsersTable/UsersTable"
import PostsTable from "components/PostsTable/PostsTable"

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
    {
      path: "/users-table",
      element: <UsersTable />,
    },
    {
      path: "/posts-table",
      element: <PostsTable />,
    },
 
  ]);

  return element;
}
