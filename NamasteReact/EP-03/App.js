
import  React  from "react";
import  ReactDOM  from "react-dom/client";

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX ==> React.createElement ==> ReactElement - JS Object ==> HTMLElement(render)

//const heading = React.createElement("h1", {id: "heading"}, "Hello everyone");

// JSX 

const jsxHading = <h1 id = "heading"> Hello everyone form  JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHading);


