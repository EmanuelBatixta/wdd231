const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmVmYTJmMmZiNDI0ODc1OWZlZGEwMGY1NTA2NjkxMCIsIm5iZiI6MTczMzQwNzc0Ni40MjcsInN1YiI6IjY3NTFiNDAyODcxYTQyYzljMjQ1MTAxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BI3lM_5RIwR0C4rFBlfTHXWc_V5RTH7fkrKNp6y9hiw"
    }
};

const topSec = document.querySelector(".top");
const actionSec = document.querySelector(".action");
const dramaSec = document.querySelector(".drama");
const comedySec = document.querySelector(".comedy");
const animationSec = document.querySelector(".animation");
const documentarySec = document.querySelector(".documentary");
const familySec = document.querySelector(".family");


let allMovie = []
async function getMovies(html) {
    try {
        for (let i = 1; i < 2; i++) {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated`, options);
            const rjson = await response.json();   
            rjson.results.forEach((movie)=>{
                allMovie.push(movie);
            })
        }
        movieCard(allMovie, html)
        console.log(allMovie)
    } catch (error) {
        console.log(error);
    }
}

async function movieByGenere(genre, html) {
    try {
        let moviesList = []
        for (let i = 1; i < 2; i++) {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?&with_genres=${genre}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`, options)
            const rjson = await response.json();   
            rjson.results.forEach((movie)=>{
                moviesList.push(movie);
            })
        }
        movieCard(moviesList, html)
    } catch(error){
        console.log(error)
    }
}

getMovies(topSec);
movieByGenere(28, actionSec)
movieByGenere(12, dramaSec)
movieByGenere(16, animationSec)
movieByGenere(35, comedySec)
movieByGenere(99, documentarySec)
movieByGenere(10751, familySec)

function movieCard(list, html) {
    html.innerHTML = ``;
    list.forEach((movie) => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = ` 
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} loading="lazy" width="150">
        `;
        html.appendChild(movieElement);

        movieElement.addEventListener("click", ()=>{
            movieModal(movie)
        })
    });
}

async function getProviders(id) {
    try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers`,options)
        const rjson = await response.json()
        if (rjson.results && rjson.results.US) {
            const us = await rjson.results.US; 
            const providers = await us.rent.slice(0,3); 
            return providers; 
            
        } else { 
            return null;
        }
        
    }catch(error){
        console.log(error)
    }
}

// Modal Box ####################################################################################

const modal = document.querySelector(".movieModal")

async function movieModal(movie){
    const providers = await getProviders(movie.id) || []
    console.log(providers)
    modal.innerHTML = ``
    modal.innerHTML = `
    <div id="mvDiv">
        <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt="${movie.title} loading="lazy" width="300" class="movie-banner">
        <div id="mvInf">
            <span><h3>${movie.title}</h3><p id="relased"> (${movie.release_date.split("-")[0]})</p></span>
            <span id="rate">Rate: ${movie.vote_average.toFixed(1)}</span>
            <br>
            <p>${movie.overview}</p>
            <div id="providers"><p>Loanding Providers...</p></div>
        </div>
        <button id="closeModal">❌</button>
    </div>
    `

    if (providers.length > 0){
        document.querySelector("#providers").innerHTML = providers.map(provider => `<img src="https://image.tmdb.org/t/p/w500${provider.logo_path}" alt="${provider.provider_name}" title="${provider.provider_name}" width="50" loading="lazy">`).join(" ")
    }else{
        document.querySelector("#providers").innerHTML = `No providers yet :(`
    }

    modal.showModal();

    closeModal.addEventListener("click", ()=> {
        modal.close();
    })
}

// banner #######################################################################################
const banner = document.querySelector(".banner")

function bannerIMG(){
    let banner_list = [
        "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        "/vxJ08SvwomfKbpboCWynC3uqUg4.jpg",
        "/gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg",
        "/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg"
    ]

}