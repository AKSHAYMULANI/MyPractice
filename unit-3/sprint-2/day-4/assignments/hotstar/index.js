// const url = "http://www.omdbapi.com/?i=tt3896198&apikey=30d8708b"

let movies_div = document.getElementById("movie")

var id;

async function searchData(q){
    try{
        let url = `http://www.omdbapi.com/?s=${q}&apikey=d806bd70`

        let res = await fetch(url)

        let data = await res.json()

        return data.Search
    }
    catch(err){
        console.log("err:", err)
    }     
}

async function ImdbData(el){
    try{
        let url = `http://www.omdbapi.com/?i=${el.imdbID}&apikey=30d8708b`

        let res = await fetch(url)

        let data = await res.json()

        return data
    }
    catch(err){
        console.log("err:", err)
    }     
}

async function main(){
    let searchbtn = document.getElementById("query").value
    let response = searchData(searchbtn)
    let data = await response
    appendMovie(data)
    movies_div.style.backgroundColor = "white"
}

function appendMovie(data){
    movies_div.innerHTML = ""
    if(data===undefined){
        return false;
    }
    data.forEach(function(el){
        let p = document.createElement("p")
        p.innerText = el.Title
        p.style.cursor = "pointer"
        p.addEventListener("click",function(){
            movieShow(el)})
        movies_div.append(p)
    });
}

function debouncing(func,delay){
if(id){
    clearTimeout(id)
}

    id = setTimeout(function(){
        func()
    },delay)
}

function movieShow(data){
    movies_div.innerHTML = ""
    movies_div.style.backgroundColor = "unset"
    appendMovieShow(data)
    console.log(data)
}

async function appendMovieShow(el){

    let container = document.getElementById("container")
    container.innerHTML=""

        let img = document.createElement("img");
        img.src = el.Poster;

        let title = document.createElement("h3");
        title.innerText = el.Title;

        let release_date = document.createElement("p");
        release_date.innerText= `Year: ${el.Year}`;

        let resp = ImdbData(el)
        let imdbdata = await resp
        let rating = document.createElement("p");
        rating.innerText = `IMDB Rating: ${imdbdata.imdbRating}`

       
        let actor =  document.createElement("p")
        actor.innerText = `Actors: ${imdbdata.Actors}`

        let div= document.createElement("div");
        
        div.append(img,title,release_date,rating,actor);
        
        container.append(div);
}