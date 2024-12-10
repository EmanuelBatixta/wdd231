// hamburguer button creation
const navigation = document.querySelector('#nav');
const hamButton = document.querySelector(".hamburguer");
const currentYear = document.querySelector("#currentYear");
const year = new Date();

currentYear.innerHTML = `©${year.getFullYear()} All directs reserved`

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
