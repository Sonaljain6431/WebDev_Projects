var pic=["./images/black_watch.png",
        "./images/blue_watch.png",
        "./images/pink_watch.png",
        "./images/purple_watch.png",
        "./images/red_watch.png"];
setInterval(showTime, 1000);
function set_Black(){
    document.getElementById("img").src = pic[0];
}
function set_Blue(){
    document.getElementById("img").src = pic[1];
}
function set_Pink(){
    document.getElementById("img").src = pic[2];
}
function set_Purple(){
    document.getElementById("img").src = pic[3];
}
function set_Red(){
    document.getElementById("img").src = pic[4];
}
    

function showTime() { 
    let time = new Date(); 
    let hour = time.getHours(); 
    let min = time.getMinutes(); 
    let sec = time.getSeconds();  

    if (hour > 12) { 
        hour -= 12; 
    } 
    if (hour == 0) { 
        hr = 12; 
    } 

    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 

    let currentTime = hour + ":" + min + ":" + sec ;

    document.getElementById("clock").innerHTML = currentTime; 
    // document.getElementById("heart").style.display = "none";
}

function heart_beat(){
    document.getElementById("heart").style.display = "block";
    document.getElementById("clock").style.display = "none";
}
