const currentUrl = window.location.href;

const allHref = currentUrl.split("?")[1].split("&")

function show(cup){
    allHref.forEach(element => {
        if(element.startsWith(cup)){
            result =element.split("=")[1].replace("%40","@")
            if(cup === "location"){
                result = element.split("=")[1].split("+")
                result = result.join(" ")
            }
        }
    });
    console.log(result)
    return(result)
}

const showInfo = document.querySelector("#results");
showInfo.innerHTML = `
    <p>Apppointment for ${show("first")} ${show("last")}</p>
    <p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")}</p>
    <p>Your phone: ${show("phone")}</p>
    <p>Your email: ${show("email")}</p>
`;

