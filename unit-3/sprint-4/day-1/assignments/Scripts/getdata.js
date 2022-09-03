
let getDataSearch = async (url)=>{
    try{
        let res = await fetch(url)

        let data = await res.json()

        return data.meals
    }
    catch(err){
        console.log("err:",err)
    }
}

let append = (data,container)=>{
    container.innerHTML = ""
    data.forEach((el) => {
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        h1.innerText = el.strMeal
        let img = document.createElement("img")
        img.src = el.strMealThumb
        div.append(img,h1)
        container.append(div)
    });
}

let appendRandom = (data,container)=>{
    container.innerHTML = ""
    data.forEach((el) => {
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        h1.innerText = el.strMeal
        let img = document.createElement("img")
        img.src = el.strMealThumb
        let cate = document.createElement('p')
        cate.innerText = `Category: ${el.strCategory}`
        let desc = document.createElement('p')
        desc.innerHTML = `Description: ${el.strInstructions}`
        div.append(img,h1,cate,desc)
        container.append(div)
    });
}

class UserData{
    constructor(n,e,p){
        this.name = n;
        this.email = e;
        this._password = p
    }
}

let appenduser = (data,container)=>{
    container.innerHTML = ""
    
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        h1.innerText = `Name: ${data.name}`
        let cate = document.createElement('p')
        cate.innerText = `email: ${data.email}`
        div.append(h1,cate,)
        container.append(div)
}


export {getDataSearch,append,appendRandom,UserData,appenduser};