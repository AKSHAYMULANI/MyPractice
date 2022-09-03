
let purchaseData = JSON.parse(localStorage.getItem("purchase")) 
let userData = JSON.parse(localStorage.getItem("user"))


let wallet_balance = document.getElementById("balance")
wallet_balance.innerText = userData.wallet

let append = (data)=>{
    let container = document.getElementById("purchased_vouchers")
    container.innerHTML = ""
    data.forEach(function (el){
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.image
        let name = document.createElement("p")
        name.innerText = el.name
        let price = document.createElement("h3")
        price.innerText = el.price
        div.append(img,name,price)
        container.append(div)
    });
  
}

append(purchaseData)