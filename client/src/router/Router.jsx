import { createBrowserRouter } from "react-router-dom";

import SignUp from "../components/SignUp";
import Main from "../layouts/Main";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: (
          <PrivateRouter>
            <Menu />
          </PrivateRouter>
        ),
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
