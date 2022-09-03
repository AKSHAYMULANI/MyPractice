function sidebar(){
    let userData = JSON.parse(localStorage.getItem('user'))
    let name = userData.name
    let email = userData.email
    let image = userData.image
    var country;
    if(userData.country=="in"){
        country = "India"
    }
    else if(userData.country=="ch"){
        country = "China"
    }
    else if(userData.country=="us"){
        country = "Usa"
    }
    else if(userData.country=="uk"){
        country = "UK"
    }
    else{
        country = "Newzeland"
    }
    return `  <img src="${image}" id="user_image" alt="">
    <h3 id="user_name">${name}</h3>
    <p id="user_email">${email}</p>
    <p id="user_country">${country}</p>`
}

export { sidebar }

