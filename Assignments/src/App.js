import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HeaderComponent from "./Components/HeaderComponent/header-component";
import BodyComponent from "./Components/BodyComponent/body-component";
import AboutUsComponent from "./Components/AboutUsComponent/about-us";
import ErrorComponent from "./Components/ErrorPageComponent/error-page";
import TeamMemberComponent from "./Components/TeamMemberComponent/team-member-component";

const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/search",
        element: <BodyComponent />,
      },
      {
        path: "/member/:id",
        element: <TeamMemberComponent />,
      },
    ],
  },
  {
    path: "/about-us",
    element: <AboutUsComponent />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
