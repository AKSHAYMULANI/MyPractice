function append(data, container){
    container.innerHTML = ""
    data.forEach(({content,urlToImage,author,title}) => {
        let div = document.createElement("div")
        div.addEventListener("click",function(){
            localStorage.setItem("news",JSON.stringify({content,urlToImage,title}))
            window.location.href = "news.html"
        })
        let img = document.createElement("img")
        img.src = urlToImage
        let h4 = document.createElement("h4")
        h4.innerText = author
        let p = document.createElement("p")
        p.innerText = title

        let div2 = document.createElement("div")
        div2.append(p,h4)
        div.append(img,div2)
        container.append(div)
    });
}

async function getData(url){
    
    let res = await fetch(url)
    let data = await res.json()
    return data.articles;
}

export {append,getData}