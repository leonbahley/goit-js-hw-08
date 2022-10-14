import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

function onInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(event) {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

(function () {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = document.querySelector('[name="email"]');
  const message = document.querySelector('[name="message"]');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();
