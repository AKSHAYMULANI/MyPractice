let api_key = `e4b62f9a7cb5716c852ac7e5b83f346b`

async function getData(){
    let city = document.getElementById("city").value

    let  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    let res = await fetch(url)

    let data = await res.json()

    append(data)

    console.log(data)
}

function append(data){
    let container = document.getElementById("container")
    container.innerHTML = ""

    let iframe = document.querySelector("iframe")
    if(data.name==undefined){
        iframe.src = ""
    }
    else{
        iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    }
    
    console.log(iframe.innerHTML)

    let div = document.createElement("div")

    let name = document.createElement("h2")
    name.innerText = data.name
   
    let min_temp = document.createElement("p")
    min_temp.innerText = `Min Temperature: ${data.main.temp_min}`

    let max_temp = document.createElement("p")
    max_temp.innerText = `Max Temperature: ${data.main.temp_max}`

    let wind = document.createElement("p")
    wind.innerText = `Wind: Speed is ${data.wind.speed}`

    let clounds = document.createElement("p")
    clounds.innerText = `clounds: ${data.clouds.all}`

    let sunrise = document.createElement("p")
    sunrise.innerText = `sunrise: ${data.sys.sunrise}`

    let sunset= document.createElement("p")
    sunset.innerText = `sunset: ${data.sys.sunrise}`

    div.append(name,min_temp,max_temp,wind,clounds,sunrise,sunset)
    container.prepend(div)

   

}