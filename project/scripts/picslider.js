function animate(draw, duration) {
    var start = performance.now();

    requestAnimationFrame(function animate(time) {
        var timePassed = time - start;
        if (timePassed > duration) timePassed = duration;
        draw(timePassed);
        if (timePassed < duration) {
            requestAnimationFrame(animate);
        }
    });
}

function nextSlide() {
    fwBtn.disabled = true;
    prevBtn.disabled = true;

    var next = Math.abs((index + 1) % sliderBgs.length);

    sliderBgs[next].style.left = 100 + '%';
    sliderTxt[next].style.left = 100 + '%';


    animate(function(timePassed) {
        sliderBgs[Math.abs(index)].style.left = (timePassed > 0) ? -(timePassed / 5) + '%' : 0;
        sliderBgs[next].style.left = 100 - timePassed / 5 + '%';
        sliderTxt[Math.abs(index)].style.left = (timePassed > 0) ? -(timePassed / 5) + '%' : 0;
        sliderTxt[next].style.left = 100 - timePassed / 5 + '%';
    }, 500);

    setTimeout(function(){
        sliderBgs[Math.abs(index)].style.left = "-100%";
        sliderBgs[next].style.left = 0;
        sliderTxt[Math.abs(index)].style.left = "-100%";
        sliderTxt[next].style.left = 0;
        index = ++index % sliderBgs.length;
        fwBtn.disabled = false;
        prevBtn.disabled = false;
    }, 500);
}

function previousSlide() {
    fwBtn.disabled = true;
    prevBtn.disabled = true;

    var prev = Math.abs((index - 1) % sliderBgs.length);

    sliderBgs[prev].style.left = -100 + '%';
    sliderTxt[prev].style.left = -100 + '%';

    animate(function(timePassed) {
        sliderBgs[Math.abs(index)].style.left = (timePassed > 0) ? timePassed / 5 + '%' : 0;
        sliderBgs[prev].style.left = -100 + timePassed / 5 + '%';
        sliderTxt[Math.abs(index)].style.left = (timePassed > 0) ? timePassed / 5 + '%' : 0;
        sliderTxt[prev].style.left = -100 + timePassed / 5 + '%';
    }, 500);

    setTimeout(function(){
        sliderBgs[Math.abs(index)].style.left = "100%";
        sliderBgs[prev].style.left = 0;
        sliderTxt[Math.abs(index)].style.left = "100%";
        sliderTxt[prev].style.left = 0;
        index = --index % sliderBgs.length;
        fwBtn.disabled = false;
        prevBtn.disabled = false;
    }, 500);
}

var fwBtn = document.getElementById('forward-arr');
var prevBtn = document.getElementById('prev-arr');

var sliderBgs = document.querySelectorAll('#slider-bg li');
var sliderTxt = document.querySelectorAll('#slider-text li');
var index = 0;

var interval = setInterval(nextSlide, 3000);

fwBtn.onclick = function() {
    clearInterval(interval);
    setTimeout(function() {
        if (!interval == 1) interval = setInterval(nextSlide, 3000);
    }, 5000);
    nextSlide();
}
prevBtn.onclick = function() {
    clearInterval(interval);
    setTimeout(function() {
        if (interval == 1) interval = setInterval(nextSlide, 3000);
    }, 5000);
    previousSlide();
}