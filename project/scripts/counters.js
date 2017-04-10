var achievCounters = document.getElementById('counters-list');
var happyClients = achievCounters.children[0].children[0];
var complProjecs = achievCounters.children[1].children[0];
var awards = achievCounters.children[2].children[0];
var coffDrinks = achievCounters.children[3].children[0];

var isLaunched = false;
var isLaunchedDiag = false;

window.onscroll = function() {
    if (achievCounters.getBoundingClientRect().top < document.documentElement.clientHeight) {
        if (!isLaunched) {
            isLaunched = true;
            var interval = setInterval(function() {
                happyClients.innerText = +happyClients.innerText + 16;
                complProjecs.innerText = +complProjecs.innerText + 32;
                coffDrinks.innerText = +coffDrinks.innerText + 199;
            }, 30);
            var intervalAwards = setInterval(function() {
                awards.innerText = +awards.innerText + 1;
            }, 75);
            setTimeout(function() {
                clearInterval(interval);
                clearInterval(intervalAwards);
                happyClients.innerText = 1600;
                complProjecs.innerText = 3200;
                coffDrinks.innerText = 20000;
                awards.innerText = 40;
            }, 3000);
        }
    }

    //см. скрипт team.js
    if (skillsDiag.getBoundingClientRect().top < document.documentElement.clientHeight) {
        if (!isLaunchedDiag) {
            isLaunchedDiag = true;

            htmlcssCircle.set(0);
            aipsCircle.set(0);
            jsphpCircle.set(0);
            photoCircle.set(0);

            htmlcssCircle.animate(members[memberIndex].htmlcssSkill / 100);
            aipsCircle.animate(members[memberIndex].aipsSkill / 100);
            jsphpCircle.animate(members[memberIndex].jsphpSkill / 100);
            photoCircle.animate(members[memberIndex].photoSkill / 100);
        }
    }
}