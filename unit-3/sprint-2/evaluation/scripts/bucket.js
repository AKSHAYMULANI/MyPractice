// On clicking remove button the item should be removed from DOM as well as localstorage.


let bucketData =  JSON.parse(localStorage.getItem("coffee")) || []

console.log(bucketData)
appendBucket(bucketData)

function appendBucket(data){
    let bucket = document.getElementById("bucket")
    bucket.innerHTML = ""

    var total = 0
    
    data.forEach(function(ele,index){

        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = ele.image

        let title = document.createElement("p")
        title.innerText = ele.title

        let price = document.createElement("p")
        price.innerText = ele.price

        total = total + ele.price

        let btn = document.createElement("button")
        btn.id = "remove_coffee"
        btn.innerText = "Remove"
        btn.addEventListener("click",function(){
            removeCoffee(ele,index)
        })
        
        div.append(img,title,price,btn)
        bucket.append(div)

        

        })

        let totalAmount = document.getElementById("total_amount")
        totalAmount.innerText = total

}

function removeCoffee(ele,index){
    bucketData.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(bucketData))
    console.log(bucketData)
    window.location.reload()
}

function confirmCheckout(){
    if(bucketData[0]==undefined){
        alert("add the items")
    }
    else{
        window.location.href = "checkout.html"
    }
    
}