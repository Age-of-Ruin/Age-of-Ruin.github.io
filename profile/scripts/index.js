import Navbar from './navbar.js'

// // Navbar Component
// class Navbar extends React.Component {

//   render() {
//     const home = React.createElement('li', {className: 'home'}, 'Home');
//     const contact = React.createElement('li', {className: 'contact'}, 'Contact');
//     const navbar = React.createElement('ul', {className: 'navbar'}, contact, home);

//     return React.createElement('div', {className: 'navbarDisplay'}, navbar);
//   }
// }

// Creates and renders all individual components
class App extends React.Component {
  render() {
    return React.createElement(Navbar, null, null);
  }
}
  

// Finalize - Render App which then renders all components
ReactDOM.render(
  React.createElement(App, null, null),
  document.getElementById('root')
);