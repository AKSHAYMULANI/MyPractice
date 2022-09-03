// Add the coffee to local storage with key "coffee"
// let url = `https://masai-mock-api.herokuapp.com/coffee/menu`

getData()

let bucketData =  JSON.parse(localStorage.getItem("coffee")) || [] 

async function getData(){
    try{
        let url = "https://masai-mock-api.herokuapp.com/coffee/menu"

        let res = await fetch(url)

        let data = await res.json()

        let coffeeData = data.menu.data
        console.log(coffeeData)
        append(coffeeData)

    }
    catch(err){
        console.log("err:",err)
    }
    
}



function append(data){
    let menu = document.getElementById("menu")
    data.forEach(function(ele){

        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = ele.image

        let title = document.createElement("p")
        title.innerText = ele.title

        let price = document.createElement("p")
        price.innerText = ele.price

        let btn = document.createElement("button")
        btn.id = "add_to_bucket"
        btn.innerText = "Add To Bucket"
        btn.addEventListener("click",function(){
            addToBucket(ele)
        })
       


        div.append(img,title,price,btn)
        menu.append(div)
    });

     let coffee_count = document.getElementById("coffee_count")
     coffee_count.innerText = bucketData.length
}


function addToBucket(ele){
    bucketData.push(ele)
    localStorage.setItem("coffee",JSON.stringify(bucketData))
    console.log(bucketData)
    getData()
}