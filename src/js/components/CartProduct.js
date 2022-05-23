import { select } from '../settings.js';
import AmountWidget from './AmountWidget.js';

class CartProduct {
  constructor(menuProduct, element) {
    const thisCartProduct = this;

    thisCartProduct.id = menuProduct.id;
    thisCartProduct.name = menuProduct.name;
    thisCartProduct.amount = menuProduct.amount;
    thisCartProduct.priceSingle = menuProduct.priceSingle;
    thisCartProduct.price = menuProduct.price;
    thisCartProduct.params = menuProduct.params;

    thisCartProduct.getElements(element);
    thisCartProduct.initAmountWidget();
    thisCartProduct.initActions();
  }

  getElements(element) {
    const thisCartProduct = this;

    thisCartProduct.dom = {
      amountWidget: element.querySelector(select.cartProduct.amountWidget),
      price: element.querySelector(select.cartProduct.price),
      edit: element.querySelector(select.cartProduct.edit),
      remove: element.querySelector(select.cartProduct.remove),
    };
    thisCartProduct.dom.wrapper = element;
  }

  getData() {
    const thisCartProduct = this;

    const dataSummary = {
      id: thisCartProduct.id,
      amount: thisCartProduct.amount,
      price: thisCartProduct.price,
      priceSingle: thisCartProduct.priceSingle,
      name: thisCartProduct.name,
      params: thisCartProduct.params,
    };
    return dataSummary;
  }

  initAmountWidget() {
    const thisCartProduct = this;

    thisCartProduct.amountWidget = new AmountWidget(thisCartProduct.dom.amountWidget);

    thisCartProduct.dom.amountWidget.addEventListener('updated', function () {
      thisCartProduct.price = thisCartProduct.amountWidget.value * thisCartProduct.priceSingle;
      thisCartProduct.amount = thisCartProduct.amountWidget.value;
      thisCartProduct.dom.price.innerHTML = thisCartProduct.price;
    });
  }

  initActions() {
    const thisCartProduct = this;

    thisCartProduct.dom.edit.addEventListener('click', function (event) {
      event.preventDefault();
    });
    thisCartProduct.dom.remove.addEventListener('click', function (event) {
      event.preventDefault();
      thisCartProduct.remove();
    });
    console.log('remove', thisCartProduct.remove);
  }

  remove() {
    const thisCartProduct = this;

    const event = new CustomEvent('remove', {
      bubbles: true,
      detail: {
        cartProduct: thisCartProduct,
      },
    });

    thisCartProduct.dom.wrapper.dispatchEvent(event);
  }
}

export default CartProduct;
