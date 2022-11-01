import { useRoutes } from "react-router-dom";
import HomePage from "pages/Home/HomePage";
import {
  CustomerRequest,
  Inbox,
  CustomerResponse,
  CommentsTable,
  AddNotification,
  Notification,
  RequestInbox,
  List1,
  
  Login,
  NotFound,
  PostsTable,
  UsersTable,

} from "../components";
import RequestList from "../components/RequestList/RequestList "
export function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/notification",
      element: <Notification />,
    },
    {
      path: "/add-notification",
      element: <AddNotification />,
    },


   
   {
     path:"/list",
     element:<List1 />
   },
   {
     path:"/inbox",
     element:<Inbox />
   },
   {
    path:"/request-list",
    element:<RequestList />
  },
  {
    path:"/request-inbox",
    element:<RequestInbox />
  },


  {
    path:"/customer-request",
    element:<CustomerRequest />
  }, {
    path:"/customer-response",
    element:<CustomerResponse />
  }, {
    path:"/comments-table",
    element:<CommentsTable />
  }, {
    path:"/login",
    element:<Login />
  },
  {
    path:"/not-found",
    element:<NotFound />
  },
  {
    path:"/posts-table",
    element:<PostsTable />
  },
  {
    path:"/users-table",
    element:<UsersTable />
  },
  ]);

  return element;
}
