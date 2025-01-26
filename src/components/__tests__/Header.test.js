// import { render } from "@testing-library/react";
// import { Provider } from "react-redux";
// import Header from "../Header";
// import appStore from './../../utils/appStore';
// import { BrowserRouter } from "react-router";


// it('Header test', () => {
//     render(
//         <BrowserRouter>
//         <Provider store={appStore}>
//             <Header/>
//         </Provider>
//         </BrowserRouter>
//     )
// });

import { sum } from "../sum";

test("Sum function calcualte sun of two numbers", () => {

    const result = sum(3, 4);

    // Assertion
    expect(result).toBe(7);
});