const title = document.querySelector(".thanks-name")

const url = window.location.href
const infos = url.split("?")[1]
const info = infos.split("&")


title.innerHTML = `Dear ${show("name")}`

function show(cup){
    info.forEach(element => {
        if(element.startsWith(cup)){
            i = element.split("=")[1]
            if(cup === "name"){
               i = i.charAt(0).toUpperCase() + i.slice(1)
            }
        }
    });
    return i
}

console.log(info)