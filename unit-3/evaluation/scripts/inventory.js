append()

function append(){
    let data = JSON.parse(localStorage.getItem("products")) || []

    let all_products = document.getElementById("all_products")
    all_products.innerHTML = null

    data.forEach(function(el,index) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.image
        let type = document.createElement("h3")
        type.innerText = el.type
        let desc = document.createElement("p")
        desc.innerText = el.desc
        let price = document.createElement("h3")
        price.innerText = 'Rs.'+ el.price + '/-'

        let btn = document.createElement("button")
        btn.innerText = "Remove"
        btn.id = "remove_product"
        btn.addEventListener("click",function(){
            Remove(el,index)
        })

        

        div.append(img,type,desc,price,btn)
        all_products.append(div)
        
    });
}

function Remove(el,index){
    let data = JSON.parse(localStorage.getItem("products")) || []
    
    let newData = data.filter(function(el,i){
        return i!=index;
    })
    console.log(newData)

    localStorage.setItem("products",JSON.stringify(newData))
    
    append()
}

function addMorePro(){
    window.location.href = "index.html" 
}
