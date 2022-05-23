import {select, templates} from '../settings.js';
import utils from '../utils.js';
import AmountWidget from './AmountWidget.js';

class Booking {
  constructor(element) {
    const thisBooking = this;

    thisBooking.render(element);
    thisBooking.initWidgets();
  }

  render(element){
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();

    thisBooking.element = utils.createDOMFromHTML(generatedHTML);

    const bookingContainer = document.querySelector(select.containerOf.booking);

    bookingContainer.appendChild(thisBooking.element).innerHTML;

    thisBooking.dom = {
      wrapper: element,
      hoursAmount: element.querySelector(select.booking.hoursAmount),
      peopleAmount: element.querySelector(select.booking.peopleAmount),
    };
  }

  initWidgets() {
    const thisBooking = this;

    thisBooking.peopleAmountWidget = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmountWidget = new AmountWidget(thisBooking.dom.hoursAmount);
  }
}

export default Booking;
