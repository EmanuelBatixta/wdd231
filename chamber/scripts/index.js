import { createEnterpriseCard } from "./enterprises.js";

async function getEnterprises() {
    try{
        const business = document.querySelector(".business")
        const entUrl = "https://raw.githubusercontent.com/EmanuelBatixta/wdd231/refs/heads/main/chamber/members.json"
        const response = await fetch(entUrl);
        const data = await response.json();
        console.log(data)
        createEnterpriseCard(data)
        const filteredMembers = data.filter(
            (member) => member.membershipLevel === 2 || member.membershipLevel === 3
        );
        const randomMembers = [];

        const selectedIndices = new Set();
        while (randomMembers.length < 3) {
            const randomIndex = Math.floor(Math.random() * filteredMembers.length);
            if (!selectedIndices.has(randomIndex)) {
              selectedIndices.add(randomIndex);
              randomMembers.push(filteredMembers[randomIndex]);
            }
        }

        createEnterpriseCard(randomMembers)
    }
    catch(error){
        console.error(error)
    }
}

getEnterprises()

const btn = document.querySelector(".joinbtn");
btn.addEventListener("click",()=> {
    window.location.href = "join.html"
})