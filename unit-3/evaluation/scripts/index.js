//store the products array in localstorage as "products"

function storeData(e){
    e.preventDefault();
    let form = document.getElementById("products")
    let type = form.type.value
    let desc = form.desc.value
    let price = form.price.value
    let image = form.image.value

    let s1 = new productData(type,desc,price,image)

    let data = JSON.parse(localStorage.getItem("products")) || []
    data.push(s1)
    localStorage.setItem("products",JSON.stringify(data))

   let Type = document.getElementById("type")
   Type.value = ""
   let Desc = document.getElementById("desc")
   Desc.value = ""
   let Price = document.getElementById("price")
   Price.value = ""
   let Image = document.getElementById("image")
   Image.value = ""
}

function productData(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}

function inventory(){
    window.location.href = "inventory.html" 
}