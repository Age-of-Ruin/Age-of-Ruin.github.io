// Header
class Header extends React.Component{

    constructor(props){
      super(props);
    }
  
    render() {
      let pic = React.createElement('img', {className: 'header', id: 'selfee', src: 'assets/selfee_pro.jpg'}, null);
      let name = React.createElement('div', {className: 'header', id: 'name'}, "Richard Constantine",);
  
      let header = React.createElement('div', {className: 'header'}, name, pic);
  
      return header;
    }
  }

  export default Header;