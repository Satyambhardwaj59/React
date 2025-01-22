import  React, { lazy , Suspense, useContext, useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const About = lazy(() => import("./components/About"));
const Grocary = lazy(() => import("./components/Grocary"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Satyam",
        }
        setUserName(data.name);
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>about us page is lodeing......</h1>}>
                    <About/> </Suspense>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocary",
                element: <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocary/> </Suspense>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/restaurent/:resId",
                element: <RestaurantMenu/>
            },
        ],
        errorElement: <Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
