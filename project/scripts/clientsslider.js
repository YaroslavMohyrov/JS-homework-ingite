var sliders = document.getElementsByClassName('clients-list');
var currentPosition1 = 0;
var currentPosition2 = 1000;
var currentPosition0 = -1000;
setInterval(function() {
    if (currentPosition0 < -999) {
        currentPosition0 = 2000;
        sliders[0].style.display = "none";
        sliders[0].style.left = 2000+"px";
    }

    if (currentPosition1 < -999) {
        currentPosition1 = 2000;
        sliders[1].style.display = "none";
        sliders[1].style.left = 2000+"px";
    }
    if (currentPosition2 < -999) {
        currentPosition2 = 2000;
        sliders[2].style.display = "none";
        sliders[2].style.left = 2000+"px";
    }

    if (currentPosition0 < 1500) {
        sliders[0].style.display = "block";
    }

    if (currentPosition1 < 1500) {
        sliders[1].style.display = "block";
    }

    if (currentPosition2 < 1500) {
        sliders[2].style.display = "block";
    }

    sliders[0].style.left = currentPosition0 - 200 + 'px';  
    sliders[1].style.left = currentPosition1 - 200 + 'px';  
    sliders[2].style.left = currentPosition2 - 200 + 'px';

    currentPosition0 = parseInt(sliders[0].style.left);
    currentPosition1 = parseInt(sliders[1].style.left);
    currentPosition2 = parseInt(sliders[2].style.left);
}, 2000);