// const url = "http://www.omdbapi.com/?i=tt3896198&apikey=30d8708b"
 

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
    let searchbtn = document.getElementById("search").value
    let response = searchData(searchbtn)
    let data = await response
    append(data)
}

function append(data){
    
    let container = document.getElementById("container")
    container.innerHTML=""
    container.style.display = "grid"
    
    if(data===undefined){
        let img = document.createElement("img");
        img.src = "https://c.tenor.com/9JOoBLgNIYcAAAAM/not-available.gif";
        img.id = "error"
        container.style.display = "flex"
        container.append(img)
    }
    data.forEach( async function(el){
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
        
         
        if(Number(imdbdata.imdbRating)>7.5){
            let recom = document.createElement("p");
            recom.style.backgroundColor = "green"
            recom.innerText = "Recommanded"
            div.append(img,recom,title,release_date,rating,actor);
        }
        else{
            div.append(img,title,release_date,rating,actor);
        }
        container.append(div);
    });
}    




// async function getData(){
//     try {
//         let res = await fetch(url);

//         let movie = await res.json();
//         // append(products)
//         var movieData = []
//         movieData.push(movie);
//         return movieData;
//     } catch(err){
//         console.log(err);
//     }
// }



// let data = getData




// console.log(data)





// function search(){
//     let search = document.getElementById("search")
//     console.log(search.value)
//     var str1 = (data[0].Title)
//     str2 = str1.toUpperCase()
//     console.log(str2)
//     let ans = str2.search((search.value).toUpperCase())
//     if(search.value==""){
//         let container = document.getElementById("container")
//         container.innerHTML = ""

//         let p1 = document.createElement("p")
//         p1.innerText= "Enter Movie Name"
        
//         container.append(p1)
//     }
//     else if (ans!= -1){
//         append(data)
//     }
//     else{
//         let container = document.getElementById("container")
//         container.innerHTML = ""

//         let p1 = document.createElement("p")
//         p1.innerText= "Movie is not found"
        
//         container.append(p1)

//     }
    
    
// }


    
//