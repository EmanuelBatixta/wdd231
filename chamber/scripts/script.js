const current = document.querySelector("#currentYear")
const modified = document.querySelector("#lastModified")

var today = new Date()
current.innerHTML =`©️${today.getFullYear()} Sanja Chamber`
modified.innerHTML=`<span id="lastModified"> ${document.lastModified}</span>`

const hamButton = document.querySelector('.hamburguer');
const navigation = document.querySelector('#nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});