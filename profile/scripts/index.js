import Navbar from './components/navbar.js';
import Header from './components/header.js';
import Slideshow from './components/slideshow.js';
import AboutMe from './components/aboutMe.js';
import Footer from './components/footer.js';

// App
var navbar;
var header;
var slideshow;
var aboutMe;
var footer;
class App extends React.Component{

  constructor(props){
    
    // Create starting components
    super(props);
    navbar = React.createElement(Navbar, {onClick:() => this.handleNavbarEvent()}, null);
    header = React.createElement(Header, null, null);
    slideshow = React.createElement(Slideshow, null, null);
    aboutMe = React.createElement(AboutMe, null, null);
    footer = React.createElement(Footer, null, null);
    
    // Set initial state
    this.state = {
      page: 'home',
    };
  }

  // Handle navbar events
  handleNavbarEvent(event){

    let e = event || window.event;
    let icons = document.getElementsByClassName('about-me');

    if (e.srcElement.id == 'aboutButton'){
      this.setState({page: 'about'});
 
      for (var icon = 0; icon < icons.length; icon++) {
        icons[icon].style.visibility = 'visible';
      }
    } else if(e.srcElement.id == 'homeButton'){
      this.setState({page: 'home'});

      for (var icon = 0; icon < icons.length; icon++) {
        icons[icon].style.visibility = 'hidden';
      }
    }
  }

  // Renders homepage
  renderHomePage() {
    let homepage = React.createElement('div', {className: 'page'}, navbar, header, slideshow, footer);
    return homepage;
  }

  // Render about page
  renderAboutPage() {
    let homepage = React.createElement('div', {className: 'page'}, navbar, header, aboutMe, footer);
    return homepage;
  }

  render() {
    if(this.state.page == 'about')
      return this.renderAboutPage();
    else if (this.state.page == 'home')
      return this.renderHomePage();
  }
}

// Render App
ReactDOM.render(
  React.createElement(App, null, null),
  document.getElementById('root')
);
