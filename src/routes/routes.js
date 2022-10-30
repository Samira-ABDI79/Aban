import { useRoutes } from "react-router-dom";
import HomePage from "pages/Home/HomePage";
import Notification from "components/Notification/Notification";
import AddNotification from "components/AddNotification/AddNotification";
import List1 from "components/List/List";
import Inbox from "../components/Inbox/Inbox";
import RequestInbox from "../components/RequestInbox/RequestInbox"
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
  ]);

  return element;
}
