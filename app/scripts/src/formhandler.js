import $ from 'jquery';

class FormHandler {

  constructor(selector){
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  addSubmitHandler(fn) {
    console.log('Setting submit handler for form');


    let that = this;
    this.$formElement.on('submit', (event) => {
      event.preventDefault();

      let data = {};
      console.log(this);
      console.log(typeof this);
      this.$formElement.serializeArray().forEach( (item) => {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(this);
      console.log(typeof this);
      console.log(data);
      fn(data);
      console.log(event);
      event.currentTarget.reset();
      event.currentTarget.elements[0].focus();
    });
  }

}

export default FormHandler;
