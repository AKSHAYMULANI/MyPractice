import axios from "axios";

let searchImages = async (url) => {
    let data = await axios.get(url)
    return data.data.results;
}

function append (data,container){
    container.innerHTML="";
    data.forEach((el) => {
        let div = document.createElement("div")
        let p = document.createElement("p")
        p.innerText = el.alt_description
        let img = document.createElement("img")
        img.src = el.urls.small
        div.append(img,p)
        container.append(div)
    });
}



export {searchImages,append};