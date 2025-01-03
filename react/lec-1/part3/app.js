const h1 = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "ReactElement"
);

// here this h1 is an react element which is object
console.log(h1);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(h1);
