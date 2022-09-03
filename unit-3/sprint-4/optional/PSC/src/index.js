// Link: https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=sjhgeq7IWysMlcaxk_Rq-4NJh5ETFygXMIMlGRtYjPg

const API = "sjhgeq7IWysMlcaxk_Rq-4NJh5ETFygXMIMlGRtYjPg"

import axios from "axios";
import { navbar } from "../components/navbar.js";
import {searchImages,append} from "./fetch.js";


let nav = document.getElementById('navbar')
nav.innerHTML = navbar();

async function search(){
        let query = document.getElementById("query").value
        let url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=${API}`
        let data = await searchImages(url);   
        let container = document.getElementById("container")
        append(data,container)
    
}

let categories = document.getElementById("categories").children

async function cate(){
   
   let URL= `https://api.unsplash.com/search/photos/?query=${this.id}&per_page=20&client_id=${API}`
   let data = await searchImages(URL);   
   let container = document.getElementById("container")
   append(data,container)
   document.getElementById("query").value = this.id;
}

async function sort(){
    let query = document.getElementById("query").value
    let sortvalue = document.getElementById("sort").value
    let URL= `https://api.unsplash.com/search/photos/?query=${query}&order_by=${sortvalue}&per_page=20&client_id=${API}`
    let data = await searchImages(URL);   
    let container = document.getElementById("container")
    append(data,container)
    console.log(data)
 }

 document.getElementById("sort").addEventListener("change",sort)

 async function filter(){
    let query = document.getElementById("query").value
    let filtervalue = document.getElementById("filter").value
    let URL= `https://api.unsplash.com/search/photos/?query=${query}&content_filter=${filtervalue}&per_page=20&client_id=${API}`
    let data = await searchImages(URL);   
    let container = document.getElementById("container")
    append(data,container)
    console.log(data)
 }

 document.getElementById("filter").addEventListener("change",filter)


for(let el of categories){
    el.addEventListener("click",cate)

}

var ids;

async function debouncing(func,delay){
    if(ids){
       clearTimeout(ids)
    }

    ids = setTimeout(() => {
        func()
    }, delay);
}

document.getElementById("query").addEventListener("input",function(){
    debouncing(search,1000)})

