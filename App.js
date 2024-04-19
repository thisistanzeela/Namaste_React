const heading = React.createElement("h1", {}, "Hello from react");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "parent" }, "I am h1 tag"),
    React.createElement("h2", { id: "parent" }, "I am h2 tag"),
  ])
);
root.render(parent);
