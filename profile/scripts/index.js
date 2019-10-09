import { Navbar } from "./navbar.js"

// class Navbar extends React.Component {
  
//   render() {
//     return React.createElement("h1", null, "Hello");
//   }
// }

class App extends React.Component {
  render() {
    return React.createElement(Navbar, null, null);
  }
}
  

// Render all components
ReactDOM.render(
  React.createElement(App, null, null),
  document.getElementById("root")
);