const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets)
    displayProphets(data.prophets);
} 

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const birth = document.createElement("p")
        const place = document.createElement("p")
        
        fullName.textContent = `${prophet.name + " " + prophet.lastname}`;
        birth.innerHTML = `<span>Date of birth:</span> ${prophet.birthdate}`
        place.innerHTML = `<span>Place of birth:</span> ${prophet.birthplace}`

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name}`);
        portrait.setAttribute('loading','lazy')
        portrait.setAttribute('width','340')
        portrait.setAttribute('heigth','440')

        card.appendChild(fullName)
        card.appendChild(birth)
        card.appendChild(place)
        card.appendChild(portrait)
        cards.appendChild(card)
    });
  }
  