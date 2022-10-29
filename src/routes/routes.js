import { useRoutes } from "react-router-dom";
import HomePage from "pages/Home/HomePage";
import Notification from "components/Notification/Notification";
import AddNotification from "components/AddNotification/AddNotification";
import List1 from "components/List/List";
import Inbox from "../components/Inbox/Inbox";


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
   }
 
  ]);

  return element;
}
