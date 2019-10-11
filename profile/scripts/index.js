// import Navbar from './navbar.js';

// Find Me
// class FindMe extends React.Component{

//   render(){
//     return React.createElement('div', {className: 'findme'}, 'Find me:');
//   }
// }

// ReactDOM.render(
//   React.createElement(FindMe, null, null),
//   document.getElementById('findme')
// );


// Slideshow
class Slideshow extends React.Component{

  render(){
    const title = React.createElement('div', {className: 'slideshow', id: 'slideshow-title'}, 'Do you need help with');
    const fullStack = React.createElement('div', {className: 'slideshow', id: 'fullstack'}, 'Full Stack Development?');
    // const fullStack = React.createElement('div', {className: 'slideshow', id: 'fullstack'}, 'Full Stack Development?');
    // const fullStack = React.createElement('div', {className: 'slideshow', id: 'fullstack'}, 'Full Stack Development?');

    return React.createElement('div', {className: 'slideshow'}, title, fullStack);
  }
}

ReactDOM.render(
  React.createElement(Slideshow, null, null),
  document.getElementById('slideshow')
);

// Home Page
class Intro extends React.Component{

  render() {
    const name = React.createElement('div', {className: 'intro', id: 'name'}, "Richard Constantine");
    const pic = React.createElement('img', {className: 'intro', id: 'selfee', src: 'assets/selfee.jpg'}, null);
    // const sumString = "Hi there, my name is Rick. I acquired my BSC in Computer Engineer (with a focus in Software " + 
    // "Engineering from the University of Manitoba in June of 2019. Electrical systems have always facinated me since age; " +
    // "growing up alongside massive technilogical leaps in automation and ubiquity have only strengthened that facination. " + 
    // "My past-times include snowboarding, video games, and camping. I am open to any and all opportunities aimed at developing " +
    // "both my technical/coding skills and communication ability. If you are interested in getting in touch with me, you can reach me " +
    // "on the 'Contact' page. I would love to make your acqaintance!"
    // const summary = React.createElement('p', {className: 'intro', id: 'summary'}, sumString)

    return React.createElement('div', {className: 'intro'}, name, pic);
  }
}

ReactDOM.render(
  React.createElement(Intro, null, null),
  document.getElementById('intro')
);

// Navbar Component
class Navbar extends React.Component {

  render() {
    const home = React.createElement('li', {className: 'navbar-item', id: 'home'}, 'Home');
    const contact = React.createElement('li', {className: 'navbar-item', id: 'about'}, 'Contact');
    const about = React.createElement('li', {className: 'navbar-item', id: 'contact'}, 'About');
    
    return React.createElement('ul', {className: 'navbar'}, about, contact, home);
  }
}

ReactDOM.render(
  React.createElement(Navbar, null, null),
  document.getElementById('navbar')
);