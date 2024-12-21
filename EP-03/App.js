
import  React  from "react";
import  ReactDOM  from "react-dom/client";

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX ==> Babel transpiles it to React.createElement ==> ReactElement - JS Object ==> HTMLElement(render)

//const heading = React.createElement("h1", {id: "heading"}, "Hello everyone");

// JSX 

// React element

const reactElement = (
    <h1 id="headingRE"> Hello babe!</h1>
);

// const jsxHading = <h1 id = "heading"> Hello everyone form  JSX</h1>

// React component -- 1. React functional component,  2. React Class component.

// React functional component

// const HeadingComponent = () => {
//    return <h1 id = "heading"> Hello everyone form  JSX in React functional component</h1>;
// }

// same like below and upper code 

const HeadingComponent = () =>  <h1 id = "heading"> Hello everyone form  JSX in React functional component</h1>;

const Title = () => (
   // <h3 className="titleClass">This is the React Functional component Title</h3>,
   [<Test/>,
    <h2 className="secTitle">This is second title</h2>]
);

// Component composition => component in a Component;


const HeadingComponentComposition = () => (
    [<LetTry/>,
    <div className="container">
        <Title/>
        <h1 id = "heading"> Hello everyone form  JSX in React functional component compogison</h1>
        
    </div>]
);

const LetTry = () => (
    <div className="test">
        <p id="testPara">Hello ji kaise ho aap</p>
    </div>
);

const Test = () => (
    <div>
        <p>How are you test</p>
    </div>
);

// {} => write any JS expression in this 
const Element = () => (
    <div>
        {ele}  
        {Test()}
        <Test/>
        <Test></Test>
        <h1>Hii react js how are you</h1>
    </div>
);

const ele = (
    <h1>Hello ji kaise ho aap</h1>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHading);

// root.render(<HeadingComponent />);

// root.render(<HeadingComponentComposition />);

root.render(<Element/>);

