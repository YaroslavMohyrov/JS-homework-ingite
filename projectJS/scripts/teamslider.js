var teamSlides = document.querySelectorAll('#team-slider li');
var teamPrev = document.getElementById('team-prev-arr');
var teamFw = document.getElementById('team-forward-arr');

var teamCurrent = 0;

teamPrev.onclick = teamPrevSlide;
teamFw.onclick = teamNextSlide;

function teamNextSlide() {
    //см. team.js
    for (var i = 0; i < detTexts.length; i++) {
        detTexts[i].style.display = "none";
    }

    teamSlides[teamCurrent].style.opacity = 0;
    if (teamCurrent + 1 > teamSlides.length - 1) {
        teamSlides[0].style.opacity = 1;

        memberIndex = 0;
        detTexts[0].style.display = "block";
        detName.innerText = teamSlides[0].children[1].innerText;
        htmlcssCircle.set(members[0].htmlcssSkill / 100);
        aipsCircle.set(members[0].aipsSkill / 100);
        jsphpCircle.set(members[0].jsphpSkill / 100);
        photoCircle.set(members[0].photoSkill / 100);

        teamCurrent = 0; 
    } else {
        teamSlides[teamCurrent + 1].style.opacity = 1;

        memberIndex = teamCurrent + 1;
        detTexts[teamCurrent + 1].style.display = "block";
        detName.innerText = teamSlides[teamCurrent + 1].children[1].innerText;
        htmlcssCircle.set(members[teamCurrent + 1].htmlcssSkill / 100);
        aipsCircle.set(members[teamCurrent + 1].aipsSkill / 100);
        jsphpCircle.set(members[teamCurrent + 1].jsphpSkill / 100);
        photoCircle.set(members[teamCurrent + 1].photoSkill / 100);

        teamCurrent++;     
    }
}

function teamPrevSlide() {
    for (var i = 0; i < detTexts.length; i++) {
        detTexts[i].style.display = "none";
    }

    teamSlides[teamCurrent].style.opacity = 0;
    if (teamCurrent - 1 < 0) {
        teamSlides[teamSlides.length - 1].style.opacity = 1;

        memberIndex = teamSlides.length - 1;
        detTexts[teamSlides.length - 1].style.display = "block";
        detName.innerText = teamSlides[teamSlides.length - 1].children[1].innerText;
        htmlcssCircle.set(members[teamSlides.length - 1].htmlcssSkill / 100);
        aipsCircle.set(members[teamSlides.length - 1].aipsSkill / 100);
        jsphpCircle.set(members[teamSlides.length - 1].jsphpSkill / 100);
        photoCircle.set(members[teamSlides.length - 1].photoSkill / 100);

        teamCurrent = teamSlides.length - 1;
    } else {
        teamSlides[teamCurrent - 1].style.opacity = 1;

        memberIndex = teamCurrent - 1;
        detTexts[teamCurrent - 1].style.display = "block";
        detName.innerText = teamSlides[teamCurrent - 1].children[1].innerText;
        htmlcssCircle.set(members[teamCurrent - 1].htmlcssSkill / 100);
        aipsCircle.set(members[teamCurrent - 1].aipsSkill / 100);
        jsphpCircle.set(members[teamCurrent - 1].jsphpSkill / 100);
        photoCircle.set(members[teamCurrent - 1].photoSkill / 100);

        teamCurrent--;
    }
}