// // import Navbar from './navbar.js';

// Find Me
class Footer extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    // React Icon
    let path = React.createElement('path', {d: 'M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z'}, null);
    let svg = React.createElement('svg', {className: 'svg', id:'react', viewBox: '0 0 24 24'}, path);
    let reactIcon = React.createElement('a', {className: 'footer', target: '_blank', href:'https://reactjs.org'}, svg);

    let reactText = React.createElement('div', {className: 'footer', id: 'react-text'}, 'Powered by: ');

    let backgroundLink = React.createElement('a', {href: 'https://www.freepngimg.com/png/36201-city-transparent', target: 'blank_'}, 'City Transparent FreePNGImg.com')
    let backgroundText = React.createElement('div', {className: 'footer', id: 'background-text'}, 'Background provided by: ', backgroundLink);

    let footer = React.createElement('div', {className: 'footer'}, reactText, reactIcon, backgroundText);
    return footer;
  }
}

// Slideshow
class Slideshow extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    let title = React.createElement('div', {className: 'slideshow', id: 'slideshow-title'}, 'Do you need help with');
    let fullStack = React.createElement('div', {className: 'slideshow', id: 'fullstack'}, 'Full Stack Development?');
    let embeddedSystems = React.createElement('div', {className: 'slideshow', id: 'embedded'}, 'Embedded Systems?');
    let mobileApps = React.createElement('div', {className: 'slideshow', id: 'mobile'}, 'Mobile Application Development?');
    let distributed = React.createElement('div', {className: 'slideshow', id: 'distributed'}, 'Distributed / Parallel Programming?');


    let slideshow = React.createElement('div', {className: 'slideshow', id: 'slideshow'}, title, fullStack, embeddedSystems, mobileApps, distributed);

    return slideshow;
  }
}

class AboutMe extends React.Component{

  constructor(props){
    super(props);
  }

  mOver(selection){
    console.log(selection);
    var elem = document.getElementById('github-animation');
    elem.innerHTML = selection;
    var keyFrames = setInterval(frame, 50);
    var count = 1;
    function frame(){
      switch(count){
        case 1:
          elem.style.transform = 'scale(0, 0)';
          count++;
          break;
        case 2:
          elem.style.transform = 'scale(1.25, 0.75)';
          count++;
          break;
        case 3:
          elem.style.transform = 'scale(0.75, 1.25)';
          count++;
          break;
        case 4:
          elem.style.transform = 'scale(1, 1)';
          count++;
          break;
        case 5:
          elem.style.transform = 'scale(1, 1)';
          count++;
          break;
        case 6:
          elem.style.transform = 'scale(1.15, 0.85)';
          count++;
          break;
        case 7:
          elem.style.transform = 'scale(.95, 1.05)';
          count++;
          break; 
        case 8:
            elem.style.transform = 'scale(1, 1)';
            count = 0;
            clearInterval(keyFrames);
            break; 
      }
    }
  }

  mOut(selection){
      console.log(selection);
      var elem = document.getElementById('github-animation');
      elem.style.transform = 'scale(0, 0)';
  }


  render(){
    // Summary
    let sumString = "Hi there, my name is Rick. I am an aspiring Software Developer based in Winnipeg, Manitoba. " +
    "I acquired my BSc in Computer Engineering (with a focus in Software Engineering) from the University of Manitoba in " +
    "June of 2019. Electrical systems have always facinated me since age; growing up alongside massive technilogical leaps in " + 
    "automation and ubiquity have only strengthened that facination. My past-times include snowboarding, video games, camping and " +
    "and tinkering with various software on my computer. I am open to any and all opportunities aimed at developing " +
    "both my technical/coding skills and communication ability. If you are interested in reaching me or wish to view some of my work, " +
    "please follow any of the links below. I would love to make your acqaintance!"
    let summary = React.createElement('p', {className: 'intro', id: 'summary'}, sumString);

    // Github Icon
    let path = React.createElement('path', {d: 'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'}, null);
    let svg = React.createElement('svg', {className: 'svg', onMouseOver: () => this.mOver('Github'), onMouseOut: () => this.mOut('Github'), id:'github-icon', viewBox: '0 0 24 24'}, path);
    let github = React.createElement('a', {target: '_blank', href:'https://github.com/Age-of-Ruin'}, svg);

    // LinkedIn Icon
    path = React.createElement('path', {d: 'M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z'}, null);
    svg = React.createElement('svg', {className: 'svg', onMouseOver: () => this.mOver('LinkedIn'), onMouseOut: () => this.mOut('LinkedIn'), id:'linkedIn-icon', viewBox: '0 0 24 24'}, path);
    let linkedIn = React.createElement('a', {target: '_blank', href:'https://www.linkedin.com/in/richard-constantine-bb1595176/'}, svg);

    // Mail Icon
    path = React.createElement('path', {d: 'M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z'}, null);
    svg = React.createElement('svg', {className: 'svg', onMouseOver: () => this.mOver('Email'), onMouseOut: () => this.mOut('Email'), id:'email-icon', viewBox: '0 0 24 24'}, path);
    let email = React.createElement('a', {target: '_blank', href:'mailto:rickmaelikconstantine@live.com'}, svg);

    let iconArray = React.createElement('div', {id: 'icon-array'}, github, linkedIn, email)

    let findMe = React.createElement('div', {id: 'find-me'}, 'Find Me:');

    let discordAnimation = React.createElement('div', {id: 'github-animation'}, 'Github');

    let aboutMe = React.createElement('div', {className: 'about-me'}, summary, discordAnimation, findMe, iconArray);

    return aboutMe;
  }
}

// Header
class Header extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    let pic = React.createElement('img', {className: 'header', id: 'selfee', src: 'assets/Selfee.jpg'}, null);
    let name = React.createElement('div', {className: 'header', id: 'name'}, "Richard Constantine",);

    let header = React.createElement('div', {className: 'header'}, name, pic);

    return header;
  }
}

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
