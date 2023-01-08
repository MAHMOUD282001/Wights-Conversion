let pound = document.querySelector(".pound")

let kilo = document.querySelector(".kilo")

let gram = document.querySelector(".gram")

let once = document.querySelector(".once")


pound.onchange = function(e){
    let val = e.target.value;
    kilo.value = val * .45359237
    gram.value = val * 453.59237
    once.value = val * 16
}

kilo.onchange = function(e){
    let val = e.target.value;
    pound.value = val * 2.20462262
    gram.value = val * 1000
    once.value = val * 35.27396
}


gram.onchange = function(e){
    let val = e.target.value;
    kilo.value = val * .001
    pound.value = val * .00220462262
    once.value = val * .03527396195
}


once.onchange = function(e){
    let val = e.target.value;
    kilo.value = val * .45359237
    pound.value = val * .0625
    gram.value = val * 28.3495231
}
