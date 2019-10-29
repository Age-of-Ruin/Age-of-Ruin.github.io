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
      let webDesign = React.createElement('div', {className: 'slideshow', id: 'web'}, 'Reponsive Web Design?');

      let slideshow = React.createElement('div', {className: 'slideshow', id: 'slideshow'}, title, fullStack, embeddedSystems, mobileApps, distributed, webDesign);
  
      return slideshow;
    }
  }

  export default Slideshow;