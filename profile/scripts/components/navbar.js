// Navbar Component
class Navbar extends React.Component {

    constructor(props){
      super(props);
      this.state = {page: 'home'};
    }
  
    render() {
      let home = React.createElement('li', {className: 'navbar-item', id: 'homeButton', onClick: () => this.props.onClick()}, 'Home');
      let about = React.createElement('li', {className: 'navbar-item', id: 'aboutButton', onClick: () => this.props.onClick()}, 'About');
      
      let navbar = React.createElement('ul', {className: 'navbar'}, about, home);
  
      return navbar;
    }
  }

  export default Navbar;