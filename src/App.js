// import React from "react";
// import Greeting from "./test1/greet";
import "./styles.css";
// import { ReactDOM } from "react";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// ++++++++++++++++++++++ Hello, World ++++++++++++++++++++++++++
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }
// export default App;

// +++++++++++++ Composing Components +++++++++++++++++++++++++++
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// export default App;

// +++++++++++++++++ assing Props ++++++++++++++++++++++++
// function App() {
//   return <Greeting name="John" />;
// }

// export default App;

// ++++++++++++++++++ Example of Components and Props++++++++++++++++++
// import React from "react";

// function App() {
//   return (
//     <div>
//       <Greeting name="Alice" />
//       <Greeting name="Bob" />
//     </div>
//   );
// }

// function Greeting({ name }) {
//   return <h1>Hello, {name}!</h1>;
// }

// export default App;

// +++++++++++++++++++++ session1-takehome/ UserDashboard ++++++++++++++++++++++
// import React from "react";
// import UserDashboard from "./session1-takehome/UserDashboard";

// function App() {
//   return (
//     <div className="App">
//       <UserDashboard />
//     </div>
//   );
// }

// export default App;

// ++++++++++++++++++++ session2-takehome/DogPics ++++++++++++++++++++++++

import React from "react";
import DogPics from "./session2-takehome/DogPics";

function App() {
  return (
    <div className="App">
      <DogPics />
    </div>
  );
}

export default App;
