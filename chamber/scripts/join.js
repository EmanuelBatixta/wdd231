const stamp = document.querySelector("#timestamp");

if (stamp){
    document.addEventListener("DOMContentLoaded",()=>{
        const date = new Date()
        stamp.value = date.toDateString()
    }) 
}

const memberships = [
    {
        "level": "Non-Profit Membership",
        "value": "Free",
        "benefit": "Access to educational resources",
        "target": "Non-profit organizations"
    },
    {
        "level": "Gold Membership",
        "value": "$200",
        "benefit": "Full access to all resources and priority support",
        "target": "Professionals and businesses seeking maximum benefits"
    },
    {
        "level": "Silver Membership",
        "value": "$100",
        "benefit": "Access to advanced resources and standard support",
        "target": "Small businesses and freelancers"
    },
    {
        "level": "Bronze Membership",
        "value": "$50",
        "benefit": "Access to basic resources",
        "target": "Micro business"
    }
];

const lmodal = document.querySelector(".levelsmodal");
function modal(type){
    lmodal.innerHTML = ``;

    const closeModal = document.createElement('button');
    closeModal.setAttribute('id', 'close-modal');
    closeModal.innerHTML = '❌';
    lmodal.appendChild(closeModal);

    let level = document.createElement("h2")
    let target = document.createElement("p")
    let value = document.createElement("p")
    let benefit = document.createElement("p")

    target.classList.add("tp")

    if(type === "np"){
        level.innerHTML = `${memberships[0].level}`
        target.innerHTML = `${memberships[0].target}`
        value.innerHTML = `<strong>Price: </strong>${memberships[0].value}`
        benefit.innerHTML = `<strong>Benefits: </strong>${memberships[0].benefit}`
    } else if(type === "gold"){
        level.innerHTML = `${memberships[1].level}`
        target.innerHTML = `${memberships[1].target}`
        value.innerHTML = `<strong>Price: </strong>${memberships[1].value}`
        benefit.innerHTML = `<strong>Benefits: </strong>${memberships[1].benefit}`
    } else if (type === "silver"){
        level.innerHTML = `${memberships[2].level}`
        target.innerHTML = `${memberships[2].target}`
        value.innerHTML = `<strong>Price: </strong>${memberships[2].value}`
        benefit.innerHTML = `<strong>Benefits: </strong>${memberships[2].benefit}`
    } else if(type === "bronze"){
        level.innerHTML = `${memberships[3].level}`
        target.innerHTML = `${memberships[3].target}`
        value.innerHTML = `<strong>Price: </strong>${memberships[3].value}`
        benefit.innerHTML = `<strong>Benefits: </strong>${memberships[3].benefit}`
    }

    lmodal.appendChild(level)
    lmodal.appendChild(target)
    lmodal.appendChild(value)
    lmodal.appendChild(benefit)

    lmodal.showModal()

    closeModal.addEventListener("click", ()=>{
        lmodal.close()
    })
}

const np = document.querySelector("#mnp")
const bronze = document.querySelector("#mbronze")
const silver = document.querySelector("#msilver")
const gold = document.querySelector("#mgold")

if(np){
    np.addEventListener("click",()=>{
        modal("np")
    })
    bronze.addEventListener("click",()=>{
        modal("bronze")
    })
    silver.addEventListener("click",()=>{
        modal("silver")
    })
    gold.addEventListener("click",()=>{
        modal("gold")
    })
}

const sec = document.querySelector(".thanks");
const currentUrl = window.location.href;
const all = currentUrl.split("?")[1]
const itens = all.split("&")

console.log(itens)

function show(cup){
    itens.forEach(i=>{
        if(i.startsWith(cup)){
            result = i.split("=")[1].replace("%40","@")
        }
    })
    console.log(result)
    return result
}

sec.innerHTML =`
    <h2>Thanks for your application</h2>
    <h3>Dear ${show("fname")} ${show("lname")},</h3>
    <p>We recieve the application for your business: <strong>${show("busi")}</strong></p>
    <p>You are <strong>${show("orga")}</strong> in this business</p>
    <p>Your phone to contact is: <strong>${show("phone")}</strong></p>
    <p>Your email to contact is: <strong>${show("email")}</strong></p>
    <p>Your business description:<br> <strong>${show("descri")}</strong></p>
`;
