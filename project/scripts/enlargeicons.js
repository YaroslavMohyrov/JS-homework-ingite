var serviceList = document.getElementById('service-list');
var prosList = document.getElementById('pros');

var stdSizeServ = parseInt(getComputedStyle(serviceList.getElementsByTagName('img')[0]).width);
var enlSizeServ = parseInt(getComputedStyle(serviceList.getElementsByTagName('img')[0]).width) * 1.1;
var stdSizePros = parseInt(getComputedStyle(prosList.getElementsByTagName('img')[0]).width);
var enlSizePros = parseInt(getComputedStyle(prosList.getElementsByTagName('img')[0]).width) * 1.1;

serviceList.onmouseover = function(e) { enlarge(e, stdSizeServ, enlSizeServ); }
prosList.onmouseover = function(e) { enlarge(e, stdSizePros, enlSizePros); }

function enlarge(e, stdSize, enlSize) {
        if (e.target.tagName == "IMG") {
            animate(function(timePassed) {
                e.target.style.width = stdSize + stdSize * timePassed / 1000 + "px";
            }, 100);
            e.target.onmouseout = function() {
                animate(function(timePassed) {
                    e.target.style.width = enlSize - stdSize * timePassed / 1000 + "px";
                }, 100)
            }
        }
}