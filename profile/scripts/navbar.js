// Navbar Component
class Navbar extends React.Component {

    render() {
      const home = React.createElement('li', {className: 'home'}, 'Home');
      const contact = React.createElement('li', {className: 'contact'}, 'Contact');
      const navbar = React.createElement('ul', {className: 'navbar'}, contact, home);
  
      return React.createElement('div', {className: 'navbarDisplay'}, navbar);
    }
  }

  export default Navbar;