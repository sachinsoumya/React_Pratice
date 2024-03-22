/**  
 *<div id='parent' >
    <div id="child">
      <h1>I love you</h1>
    </div>     
    <div id="child2">
      <h1>I love you</h1>
    </div>     
 </div>
 * 
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I love You"),
    React.createElement("h2", {}, "Bharat"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I love You"),
    React.createElement("h2", {}, "Bharat"),
  ]),
]);
console.log(parent);

const h1 = React.createElement(
  "h1",
  { id: "heading", xyz: "love" },
  "Hello World from React"
);
console.log(h1);
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
root.render(parent);
