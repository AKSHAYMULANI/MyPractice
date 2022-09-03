let getData = async (url)=>{
    
    let res = await fetch(url)
    let data = await res.json()
    return data;
}

let append = (data,container) => {
    data.forEach((el) => {
        let img = document.createElement("img")
        img.src = el.image
        let title = document.createElement("p")
        title.innerText = el.title
        let div = document.createElement("div")
        div.append(img,title)
        container.append(div)
    });
}

export {getData, append};