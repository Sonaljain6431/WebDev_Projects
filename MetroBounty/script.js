
function ctof(){
    var input=document.getElementById('cf').value;
    var output= (input*1.8000) + 32;
    document.getElementById('ctof').innerHTML= output+" F";
}

function ftoc(){
    var input=document.getElementById('fc').value;
    var output= (input - 32) * 5/9;
    document.getElementById('ftoc').innerHTML= output+" C";
}

function ktof(){
    var input=parseInt(document.getElementById('kf').value);
    var output= (input * 1.8)- 459.67;
    document.getElementById('ktof').innerHTML= output+" F";
}

function ftok(){
    var input=parseInt(document.getElementById('fk').value);
    var output= ((input+ 459.67) * 5/9);
    document.getElementById('ftok').innerHTML= output+" K";
}

function ctok(){
    var input=parseInt(document.getElementById('ck').value);
    var output= input + 273.15;
    document.getElementById('ctok').innerHTML= output+" K";
}

function ktoc(){
    var input=parseInt(document.getElementById('kc').value);
    var output= input-273.15;
    document.getElementById('ktoc').innerHTML= output+" C";
}
