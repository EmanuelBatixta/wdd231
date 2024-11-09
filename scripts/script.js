const lastModified = document.querySelector("#lastModified");
const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `©️ <span id="currentyear">${today.getFullYear()}</span>`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector('.hamburguer');
const navigation = document.querySelector('#nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});