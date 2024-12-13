export function movieCard(list, html) {
    html.innerHTML = ``;
    list.forEach((movie) => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = ` 
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" loading="lazy" width="150">
        `;
        html.appendChild(movieElement);

        movieElement.addEventListener("click", ()=>{
            movieModal(movie)
        })
    });
}

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
