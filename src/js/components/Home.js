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

    thisHome.element = utils.createDOMFromHTML(generatedHTML);

    const homeWrapper = document.querySelector(select.containerOf.home);
    homeWrapper.appendChild(thisHome.element);

    // thisHome.dom = {};
    // thisHome.dom.wrapper = element;
    // thisHome.dom.carousel = element.querySelector(select.containerOf.carousel);
    // thisHome.pages = document.querySelector(select.containerOf.pages).children;
    // thisHome.navLinks = document.querySelectorAll(select.nav.homeLinks);
  }
}

export default Home;
