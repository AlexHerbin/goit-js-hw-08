import throttle from "lodash.throttle";

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('form');

populateTexArea();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextInput, 500));

function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextInput(e) {
    formData[e.target.name] = e.target.value;
    const stringData = JSON.stringify(formData);
    const messageLocal= localStorage.setItem(STORAGE_KEY, stringData)
}

function populateTexArea() {
    const saveMassage = localStorage.getItem(STORAGE_KEY);
    const formData = JSON.parse(saveMassage);

    if (saveMassage) {
        form.email.value = formData.email || '';
        form.message.value = formData.message || '';
    }


};
    
