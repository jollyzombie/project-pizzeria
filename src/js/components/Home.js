import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Home {
  constructor(element) {
    const thisHome = this;
    
    thisHome.render(element);
  }

  render() {
    const thisHome = this;
    const generatedHTML = templates.homePage();
    const elementDom = utils.createDOMFromHTML(generatedHTML);
    thisHome.dom = {
      wrapper: document.querySelector(select.containerOf.home),
      homeCarousel: document.querySelector(select.carousel.wrapper),
    };
    thisHome.dom.wrapper.appendChild(elementDom);
  }
}

export default Home;