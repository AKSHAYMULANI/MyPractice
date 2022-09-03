
let userData = JSON.parse(localStorage.getItem("user"))

let purchaseData = JSON.parse(localStorage.getItem("purchase")) || []

let wallet_balance = document.getElementById("wallet_balance")
wallet_balance.innerText = userData.wallet

async function getData(){
    try{
        let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"
        let res = await fetch(url)
        let data = await res.json()
        let voucherData = data[0].vouchers
        append(voucherData)
        
    }
    catch(err){
        console.log("err:",err)
    }
}

getData()

let append = (data)=>{
    let container = document.getElementById("voucher_list")
    data.forEach(function (el){
        let div = document.createElement("div")
        div.className = "voucher"
        let img = document.createElement("img")
        img.src = el.image
        let name = document.createElement("p")
        name.innerText = el.name
        let price = document.createElement("h3")
        price.innerText = el.price
        let btn = document.createElement("button")
        btn.innerText = "BUY"
        btn.className= "buy_voucher"
        btn.addEventListener("click" , function(){
            addToPurchase(el)
        })

        div.append(img,name,price,btn)
        container.append(div)
    });
  
}

let addToPurchase = (el)=>{
    let wallet = Number(userData.wallet)
    
    if(el.price<wallet){
        purchaseData.push(el)
        localStorage.setItem("purchase",JSON.stringify(purchaseData))
        alert("Hurray! purchase successful")
        userData.wallet = wallet - el.price
        wallet_balance.innerText = userData.wallet
        localStorage.setItem("user",JSON.stringify(userData))
    }
    else{
        alert("Sorry! insufficient balance")
    }
    
}