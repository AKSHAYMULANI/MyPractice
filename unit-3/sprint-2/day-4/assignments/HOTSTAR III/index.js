let api_key = `0f6543bd132cbc5e704c90ac9d8c71b7`



// let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=0f6543bd132cbc5e704c90ac9d8c71b7&page=${page}`

var page = 1;

async function getData(page){
    try{
        let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=0f6543bd132cbc5e704c90ac9d8c71b7&page=${page}`

    let res = await fetch(url)

    let data = await res.json()


    console.log(data)
    append(data)
    }
    catch(err){
        console.log("err:", err)
    } 
}

getData(page)

function append(data){
    
    let container = document.getElementById("container")
    container.innerHTML=""
    container.style.display = "grid"
    
   

    if(data.results===undefined){
        let img = document.createElement("img");
        img.src = "https://c.tenor.com/9JOoBLgNIYcAAAAM/not-available.gif";
        img.id = "error"
        container.style.display = "flex"
        container.append(img)
    }
    data.results.forEach(function(el){
        let img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${el.poster_path}`;

        let title = document.createElement("h3");
        title.innerText = el.title;

        let release_date = document.createElement("p");
        release_date.innerText= `Release Date: ${el.release_date}`;

        let rating = document.createElement("p");
        rating.innerText = `Popularity: ${el.popularity}`

        let div= document.createElement("div");
        
        div.append(img,title,release_date,rating);
        
        container.append(div);
    });

    appendPage(data.total_pages)
} 

//<option value=2>--</option>

function appendPage(n){
    for(var i=1; i<n; i++){
        let PageNo = document.getElementById("PageNo")
        let option = document.createElement("option")
        option.value = i
        option.innerText = i
        PageNo.append(option)
    }
}

function pagesNo(e){

    e.preventDefault()

    let page = document.getElementById("PageNo").value

    console.log(page)
    getData(page)
}


