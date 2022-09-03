import { sidebar } from "../components/sidebar.js";

document.getElementById("sidebar").innerHTML = sidebar();

let NewsData = JSON.parse(localStorage.getItem("news"))

function append(data){
    let container = document.getElementById("detailed_news")
    container.innerHTML = ""
    let img = document.createElement("img")
    img.src = data.urlToImage
    let title = document.createElement("h3")
    title.innerText = data.title
    let desc = document.createElement("h4")
    desc.innerText = data.content
    let div = document.createElement("div")
    div.append(img,title,desc)
    container.append(div)
}

append(NewsData)