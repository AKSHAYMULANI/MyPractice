/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
function submit(){
    let name = document.getElementById("user_name")
    let email = document.getElementById("user_email")
    let image = document.getElementById("user_pic")
    let country = document.getElementById("user_country")
    let userData = new UserData(name.value,image.value,email.value,country.value)
    localStorage.setItem("user",JSON.stringify(userData))
    name.value = ""
    email.value = ""
    image.value = ""
}

class UserData{
    constructor(n,i,e,c){
        this.name = n;
        this.email = e;
        this.image = i;
        this.country = c;
    }
}