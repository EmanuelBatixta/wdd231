// hamburguer button creation
const hamButton = document.querySelector('.hamburguer');
const navigation = document.querySelector('#nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// footer creation
const current = document.querySelector("#currentYear")
const modified = document.querySelector("#lastModified")

var today = new Date()
current.innerHTML =`©${today.getFullYear()} Sanja Chamber`
modified.innerHTML=`<span id="lastModified"> ${document.lastModified}</span>`

const business = document.querySelector(".business")

// fetch enterprises
async function getEnterprises(filter = null) {
  const entUrl = "https://raw.githubusercontent.com/EmanuelBatixta/wdd231/refs/heads/main/chamber/members.json"
  const response = await fetch(entUrl);
  const data = await response.json();
  console.log(data)
  if (filter){
    const filteredData = data.filter(filter)
    createEnterpriseCard(filteredData)
  } else{
    createEnterpriseCard(data)
  }
}

function createEnterpriseCard(data){
  const info = document.querySelector(".business")
  info.innerHTML = ``;
  data.forEach(ent => {
    // create elements of the business card
    let card = document.createElement("section");
    let nameTitle = document.createElement("h4")
    let tag = document.createElement("p");
    let img = document.createElement("img")
    let mail = document.createElement("a")
    let phone = document.createElement("a")
    let url = document.createElement("a")

    // setting content
    nameTitle.innerHTML = `${ent.name}`;
    tag.innerHTML = `${ent.tag}`
    mail.innerHTML = `<span>Email: </span>${ent.email} `
    phone.innerHTML = `<span>Phone: </span>${ent.phone} `
    url.innerHTML = `<span>URL: </span>${ent.url} `
    // setting attributes
    card.setAttribute("class","card")
    img.setAttribute('src',ent.image)
    img.setAttribute('alt',ent.name)
    mail.setAttribute('href',`mailto:${ent.mail}`)
    mail.setAttribute('target', "_blank")
    phone.setAttribute('href', `tel:${ent.phone}`)
    phone.setAttribute('target', `_blank`)
    url.setAttribute('href',`https://www.${ent.url}`)
    url.setAttribute('target',`_blank`)
    
    mail.classList.add("infoList")
    phone.classList.add("infoList")

    //add
    card.appendChild(nameTitle);
    card.appendChild(tag);
    card.appendChild(img);
    card.appendChild(mail);
    card.appendChild(phone);
    card.appendChild(url);

    info.appendChild(card)
  });
}

function filteredMember(memberType){
  var filters;
  if(memberType === "all"){
    getEnterprises()
  } else if(memberType === "member"){
    filters = ent => ent.membershipLevel == 1;
    getEnterprises(filters)
  } else if(memberType === "silver"){
    filters = ent => ent.membershipLevel == 2;
    getEnterprises(filters)
  } else if(memberType === "gold") {
    filters = ent => ent.membershipLevel == 3;
    getEnterprises(filters)
  }
}

getEnterprises( )

const allMembers = document.querySelector("#all-btn")
const members = document.querySelector("#member-btn")
const silverMembers = document.querySelector("#silver-btn")
const goldMembers = document.querySelector("#gold-btn")

allMembers.addEventListener("click",() => filteredMember("all"))
members.addEventListener("click",() => filteredMember("member"))
silverMembers.addEventListener("click",() => filteredMember("silver"))
goldMembers.addEventListener("click",() => filteredMember("gold"))

// switch toogle 
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const enterprise = document.querySelector(".business");
const card = document.querySelector(".card");

if (gridbutton){
  gridbutton.addEventListener("click", () => {
    enterprise.classList.add("grid"); 
    enterprise.classList.remove("list"); 
    }
  );

  listbutton.addEventListener("click", showList);
  function showList() {
    enterprise.classList.add("list");
    enterprise.classList.remove("grid");
  };
}

