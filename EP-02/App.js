

import  React  from "react";
import  ReactDOM  from "react-dom/client";

const parentFive = React.createElement("div", {id: "parentFive"}, [ 
    React.createElement("div", {id: "child-five-one"}, [
        React.createElement("h1", {}, "I'm in h1 tag in div 5!"), 
        React.createElement("h2", {}, "I'm in a h2 tag! tag in div 5")
    ]), 
    React.createElement("div", {id: "child-five-two"}, [
        React.createElement("h1", {}, "I'm in h1 tag in div 5!"), 
        React.createElement("h2", {}, "I'm in a h2 tag! tag in div 5")
    ])
]);
const fiveRoot = ReactDOM.createRoot(document.getElementById("fiveRoot"));
fiveRoot.render(parentFive);

