// footer  #####################################################
const lastModified = document.querySelector("#lastModified");
const currentyear = document.querySelector("#currentyear");

const today = new Date();

lastModified.innerHTML = `Last Modified: ${document.lastModified}`;
currentyear.innerHTML = `© <span id="currentyear">${today.getFullYear()}</span>`;
