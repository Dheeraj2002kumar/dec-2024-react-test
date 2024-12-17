import React from "react";

// +++++++++++++++++++++++ Accessing Props +++++++++++++++++++++
// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }
// export default Greeting;

//+++++++++++++++++++ Destructuring Props: ++++++++++++++++++++

// Instead of using props.propertyName, you can destructure the props object for cleaner code.
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
export default Greeting;
