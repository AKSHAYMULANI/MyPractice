import { sidebar } from "../components/sidebar.js";

import {append,getData} from "../components/fetch.js"

document.getElementById("sidebar").innerHTML = sidebar();


let userData = JSON.parse(localStorage.getItem('user'))

let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${userData.country}`

async function getNewData(url){
    let container = document.getElementById("news_result")
    let data = await getData(url)
    append(data,container)
}

getNewData(url)

let category = document.getElementById('category').children

for(let el of category){
    el.addEventListener("click",cate)
}

async function cate(){
    let data = await getData(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`)
    let container = document.getElementById("news_result")
    append(data,container)
}

async function searchNews(){
    let query = document.getElementById("search_box").value
    let data =  await getData(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
    let container = document.getElementById("news_result")
    append(data,container)
}

let search = (e) =>{
    if(e.key=="Enter"){
        searchNews()
    }
}

document.getElementById("search_box").addEventListener("keydown",search)