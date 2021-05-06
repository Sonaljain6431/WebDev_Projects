let allCells = document.querySelectorAll(".grid .cell")
let grid = document.querySelector(".grid");
let body = document.body;
let theme = document.querySelector("#theme");
let h1 = document.querySelector(".h1");
let rtheme = document.querySelector("#rtheme");
var audios = ["./sounds/1.wav","./sounds/2.wav","./sounds/3.wav","./sounds/4.wav","./sounds/5.wav","./sounds/6.wav","./sounds/7.wav","./sounds/8.wav","./sounds/9.wav","./sounds/10.wav"];

function random(num){
    return Math.floor(Math.random()*num);
}


/* Theme */
theme.addEventListener("click", (event) => {
  console.log(event.code);
    if(body.style.backgroundColor === ""){
        body.style.backgroundColor = "hsl(201, 34%, 13%)";
        h1.style.color="#FFC0CB";
    }
    else{
        body.style.backgroundColor = "";
        h1.style.color="black";
    }
});
rtheme.addEventListener("click", (event) => {
    console.log(event.code);
      if(body.style.backgroundColor === ""){
          body.style.backgroundColor = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
      }
      else{
          body.style.backgroundColor = "";
          h1.style.color="black";
      }
  });
/* Theme */


/* Cell hover and click event */
grid.addEventListener("mousemove", 
function clicked(){
    this.style.border="4px solid black";
});
grid.addEventListener("mouseout", function clicked(){
    this.style.border="0px";
});

allCells.forEach((cell) => {
    cell.addEventListener("mouseover", 
    function clicked(){
        this.style.border="1px solid red";
    });
    cell.addEventListener("mouseout", 
    function clicked(){
        this.style.border="0px";
    });
    cell.addEventListener("click", 
    function clicked(){
        this.style.backgroundColor = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
    });
    cell.addEventListener("click", 
    function play(){
        let url = audios[random(10)];
        let audio = new Audio(url);
        audio.currentTime = 1;
        audio.play();
        setInterval(function(){
            if(audio.currentTime>3){
                audio.pause();
            }
        },1000);
    });
});
/* Cell hover and click event */
    

/* Background change by key press */
body.addEventListener("keydown", (event) => {
    console.log(event.code);
    
    if (event.code === "KeyD") {
      body.style.backgroundColor === ""
        ? (body.style.backgroundColor = 'rgb('+random(255)+','+random(255)+','+random(255)+')')
        : (body.style.backgroundColor = "");
    }
  });
/* Background change by key press */  


