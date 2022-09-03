const api_key = `AIzaSyB6iG8fxGXxVHECLPWWSECUHGECo2LoyQg`

//   'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}' 

let search = async () => {
    try{
        let query = document.getElementById("query").value
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`
        let res = await fetch(url)

        let data = await res.json();

        append(data.items)
    }
    catch(err){
        console.log("err:",err)
    }
    
}

let append = (data)=>{
    let container = document.getElementById("results")
    container.innerHTML = ""
    console.log(data)
    data.forEach(({ id: {videoId},snippet: {title,thumbnails} }) => {

        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src = thumbnails.medium.url
        // iframe.allow = "fullscreen"

        let h3 = document.createElement('h3')
        h3.innerText = title

        div.append(img,h3)

        let video = {title,
            videoId}
            

        container.append(div)

        div.onclick = () =>{
            plavideo(video)
        }


    });

}

let plavideo = (video) => {
    localStorage.setItem("video",JSON.stringify(video))
    window.location.href = "video.html";
}


/*
<iframe width="560" height="315" 
 src="https://www.youtube.com/embed/Etxo-bULjRw" // Video Id
 title="YouTube video player" 
 frameborder="0" 
 allow="accelerometer; 
 autoplay; clipboard-write; 
 encrypted-media; 
 gyroscope; picture-in-picture" allowfullscreen></iframe>
 */