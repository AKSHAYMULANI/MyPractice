
// {
//     name: "String",
//     email: "String",
//     address: "String",
//     wallet: "Number"
//    }
let submit = ()=>{
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let address = document.getElementById("address")
    let wallet = document.getElementById("amount")

    let userData = new UserData(name.value,email.value,address.value,wallet.value)
    localStorage.setItem("user",JSON.stringify(userData))

    name.value = ""
    email.value = ""
    address.value = ""
    wallet.value = ""
}




class UserData{
    constructor(name,email,address,wallet){
        this.name = name;
        this.email = email;
        this.address = address;
        this.wallet = wallet;
    }
}