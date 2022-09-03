function status(){
    return true;
}

var count = 0;

var image = document.getElementById("loading_img");
var orderid = document.getElementById("orderid");

function order(){
    let order = document.querySelectorAll("#order:checked");
    var orders = ""
    count++;
    for(var i=0; i<order.length; i++){
        orders = orders + order[i].value + ","
    }
    

    myPromise = new Promise(function(resolve,reject){
    let time = Math.random()*10000;
    let s = status();
    if(s){
        setTimeout(function(){
            resolve(orders);
        },time);
    }    
    else{
        reject('Sorry, we can not deliver this item');
    }

    });

    myPromise.then(function(res){
        image.src = "https://i.insider.com/62212e77d72a250019740059?width=700"
        orderid.innerText = `Order Id: ${count}`
        console.log(`Your ${res} is ready`);
    });

}