const searchInput = document.querySelector("#search");


export function searchMovie() {
    const searchValue = searchInput.value;
    if (searchValue) {
        window.location.href = `results.html?query=${encodeURIComponent(searchValue)}`;
    }
}

export function getURL() {
    const currentURL = window.location.href;
    const url = currentURL.split("?")[1];
    let name = url.split("=")[1];
    name = name.replaceAll("%20"," ")
    name = name.charAt(0).toUpperCase() + name.slice(1)
    return name;
}

