import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from './../../utils/appStore';
import { BrowserRouter } from "react-router";




// test("Should load Header Component with login button", () => {
//     render(
//     <BrowserRouter>
//         <Provider store={appStore}>
//          <Header/>
//         </Provider>
//     </BrowserRouter>
//     )
// })

it('Header test', () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )
});
