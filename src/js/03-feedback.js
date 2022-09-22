import throttle from "lodash.throttle";

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
    // const messageLocal = localStorage.setItem(STORAGE_KEY, stringData);
    let formData = localStorage.getItem(STORAGE_KEY);
    formData = formData ? JSON.parse(formData) : {};
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTexArea() {
    let formData = localStorage.getItem(STORAGE_KEY);

    if (formData) {
        formData = JSON.parse(formData);
        Object.entries(formData).forEach(([name, value]) => form.elements[name].value = value)
    }
};
    
