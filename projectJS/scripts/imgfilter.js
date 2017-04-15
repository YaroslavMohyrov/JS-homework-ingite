var portfImgs = document.getElementsByClassName('pic-wrapper');
var filterBtns = document.querySelectorAll('#filter button');
showALL();

filterBtns[0].onclick = showALL;
filterBtns[1].onclick = function() { showCategory("WEB DESIGN", 1) };
filterBtns[2].onclick = function() { showCategory("GRAPHIC DESIGN", 2) };
filterBtns[3].onclick = function() { showCategory("PHOTOGRAPHY", 3) };
filterBtns[4].onclick = function() { showCategory("ILLUSTRATION", 4) };

function showCategory(categoryTitle, btnNumber) {
    for (var i = 0; i < filterBtns.length; i++) {
        filterBtns[i].style.color = "#515151";
    }
    filterBtns[btnNumber].style.color = "#ffe600";
    for (i = 0; i < portfImgs.length; i++) {
        if (portfImgs[i].children[1].children[0].children[1].innerText == categoryTitle) {
            portfImgs[i].style.display = "block";
        } else { portfImgs[i].style.display = "none"; }
    }
}

function showALL() {
    for (var i = 0; i < filterBtns.length; i++) {
        filterBtns[i].style.color = "#515151";
    }
    filterBtns[0].style.color = "#ffe600";
    for (i = 0; i < portfImgs.length; i++) {
        portfImgs[i].style.display = "block";
    }
}