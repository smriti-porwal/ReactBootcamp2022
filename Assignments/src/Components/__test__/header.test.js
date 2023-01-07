// import { sum } from "../sum";

// test("testing sum of two numbers", () => {
//   expect(sum(3, 4)).toBe(7);
// });

import { render } from "@testing-library/react";
import HeaderComponent from "../header-component";
import { Provider } from "react-redux";
import { store } from "../../store";
import { StaticRouter } from "react-router-dom/server";

test("loading of header component", () => {
    render(
    <StaticRouter>   
    <Provider store={store}>
    <HeaderComponent />
    </Provider>
    </StaticRouter> )
});
