import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HeaderComponent from "./Components/HeaderComponent/header-component";
// import BodyComponent from "./Components/BodyComponent/body-component";
import AboutUsComponent from "./Components/AboutUsComponent/about-us";
import ErrorComponent from "./Components/ErrorPageComponent/error-page";
import TeamMemberComponent from "./Components/TeamMemberComponent/team-member-component";
import { lazy, Suspense, useState } from "react";
import UserTheme from "./Context/ThemeContext";
import ProfileComponent from "./Components/ProfileComponent/profile-component";
const BodyComponent = lazy(()=>import("./Components/BodyComponent/body-component"))

const AppComponent = () => {
  [theme, setTheme] = useState("Light");
  return (
    <UserTheme.Provider value={{theme:theme, setTheme: setTheme}}>
      <HeaderComponent />
      <Outlet />
    </UserTheme.Provider>
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
        path: "/",
        element:(
          <Suspense fallback={<h1>Loading...</h1>}>
          <BodyComponent />
          </Suspense>
        )
      },
      {
        path: "/member/:id",
        element: <TeamMemberComponent />,
      },
      {
        path: "/about-us",
        element: <AboutUsComponent />,
        children: [
          {
            path: "/about-us",
            // behind the scene it is attaching the props to the "this" keyword
            element: <ProfileComponent name="Smriti Porwal" />
          }
        ]
      }
    ]
  }
]);
root.render(<RouterProvider router={appRouter} />);
