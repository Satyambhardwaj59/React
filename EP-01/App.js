const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const secHeading = React.createElement("div", {id: "box"}, " Hello everyone How are you! tag in div 1");
const secRoot = ReactDOM.createRoot(document.getElementById("secRoot"));
secRoot.render(secHeading);



/* 
<div id="parent">
    <div id="child">
        <h1> I'm h1 tag</h1>
    </div>
</div> 

ReactElement(Object) ==> HTML(Browser Understand)

*/

const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {}, "I'm in h1 tag tag in div 3")));
const thirdRoot = ReactDOM.createRoot(document.getElementById("thirdRoot"));
thirdRoot.render(parent);

/*

<div id="parent">
    <div id="child">
        <h1> I'm h1 tag</h1>
        <h2> I'm h2 tag</h2>    
    </div>
</div> 

*/

const parentTwo = React.createElement("div", {id: "parentF"}, React.createElement("div", {id: "childF"}, [React.createElement("h1", {}, "I'm in h1 tag in div 4!"), React.createElement("h2", {}, "I'm in a h2 tag! tag in div 4")]));
const fourRoot = ReactDOM.createRoot(document.getElementById("fourRoot"));
fourRoot.render(parentTwo);

/*

<div id="parent">
    <div id="child">
        <h1> I'm h1 tag in div 5</h1>
        <h2> I'm h2 tag tag in div 5</h2>    
    </div>
    <div id="child2">
        <h1> I'm h1 tag in div 5</h1>
        <h2> I'm h2 tag tag in div 5</h2>    
    </div>
</div> 

*/

const parentFive = React.createElement("div", {id: "parentFive"},  React.createElement("div", {id: "child-five-one"}, [React.createElement("h1", {}, "I'm in h1 tag in div 5!"), React.createElement("h2", {}, "I'm in a h2 tag! tag in div 5")]),  React.createElement("div", {id: "child-five-two"}, [React.createElement("h1", {}, "I'm in h1 tag in div 5!"), React.createElement("h2", {}, "I'm in a h2 tag! tag in div 5")]));
const fiveRoot = ReactDOM.createRoot(document.getElementById("fiveRoot"));
fiveRoot.render(parentFive);

