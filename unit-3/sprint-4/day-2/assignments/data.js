
function secTomin (time){
    let hour = Math.floor(time/3600)
    let min = Math.floor((time-(hour*3600))/60)
    let sec = time - (hour*3600) - (min*60)

    return `${min} minute ${sec} seconds`;
    
}



export default secTomin;