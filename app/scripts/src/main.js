import FormHandler from './formhandler';

let FORM_SELECTOR = '[data-coffee-order="form"]';

let formHandler = new FormHandler(FORM_SELECTOR);

formHandler.addSubmitHandler((data)=>{console.log(data);})
