import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HeaderComponent from "./Components/header-component";
import BodyComponent from "./Components/body-component";
import store from "./store";
// import AboutUsComponent from "./Components/AboutUsComponent/about-us";
import ErrorComponent from "./Components/error-page";
import TeamMemberComponent from "./Components/team-member-component";
import { lazy, Suspense, useState } from "react";
import UserTheme from "./Context/ThemeContext";
import ProfileComponent from "./Components/profile-component";
import LoginComponent from "./Components/login-component";
import { Provider } from "react-redux";
const AboutUsComponent = lazy(()=>import("./Components/about-us"))

const AppComponent = () => {
  const [theme, setTheme] = useState("Light");
  return (
    <Provider store={store}>
    <UserTheme.Provider value={{theme:theme, setTheme: setTheme}}>
      <HeaderComponent />
      <Outlet />
    </UserTheme.Provider>
    </Provider>
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
        index: true,
        element: <BodyComponent />
      },
      {
        path: "/member/:id",
        element: <TeamMemberComponent />,
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUsComponent />
          </Suspense>
        ),
        children: [
          {
            path: "/about-us",
            // behind the scene it is attaching the props to the "this" keyword
            element: <ProfileComponent name="Smriti Porwal" />
          }
        ]
      },
      {
        path: "/login",
        element: <LoginComponent />
      }
    ]
  }
]);
root.render(<RouterProvider router={appRouter} />);
