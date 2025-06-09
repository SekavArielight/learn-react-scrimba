// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// root.render(
//     <h1>Hello, React!</h1>
// )


/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.
    
*/


// MY SOLUTION IN REACT
// import { createRoot } from "react-dom/client"
// import { createElement } from "react"

// // const root = createRoot(document.appendChild('root')).render(createElement("h1", null, "Hi Mom!"));

// const root = createRoot(document.appendChild('root'));

// root.render(
//     <h1 className="header">Hi Dad</h1>
// );

const root = document.getElementById("root");

const h1 = document.createElement("h1");

h1.textContent = "Hello, React!";

h1.className = "header";

root.appendChild(h1);