//https://swapi.dev/api/people/?search={your_search_term}
let person_div= document.getElementById("person")

var id;

async function getData(query){

    if(query==""){
        return []
    }
    
    try{
        let url = `https://swapi.dev/api/people/?search=${query}`

    let res = await fetch(url)

    let data = await res.json()

    return data.results;
    }
    catch(err){
        console.log("err:",err)
    }
    
}

async function main(){
    let query = document.getElementById("query").value
    let response = getData(query)
    let data = await response
    console.log(data)
    append(data)

}

function append(data){
        person_div.innerHTML = ""
        if(data===undefined){
            return false;
        }
        data.forEach(function(el){
            let h2 = document.createElement("h2")
            h2.innerText = el.name
            let p = document.createElement("p")
            p.innerText = el.birth_year

            person_div.append(h2,p)
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
