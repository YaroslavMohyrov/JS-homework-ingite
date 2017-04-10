
var teamBtns = document.querySelectorAll('#team-list img');
var detName = document.querySelector('#team-details .name');
var detTexts = document.querySelectorAll('#team-details .pros-text');
var skillsDiag = document.getElementById('skills-diagramms');

var detArrow = document.getElementById('details-arrow');

teamBtns[0].onclick = function(e) { teamHeandler(0, e) }
teamBtns[1].onclick = function(e) { teamHeandler(1, e) }
teamBtns[2].onclick = function(e) { teamHeandler(2, e) }
teamBtns[3].onclick = function(e) { teamHeandler(3, e) }

var htmlcssCircle = createCircle('#htmlcss_progress');
var aipsCircle = createCircle('#aips_progress');
var jsphpCircle = createCircle('#jsphp_progress');
var photoCircle = createCircle('#photo_progress');

var members = [
    {htmlcssSkill: 83, aipsSkill: 65, jsphpSkill: 74, photoSkill: 64 },
    {htmlcssSkill: 92, aipsSkill: 92, jsphpSkill: 57, photoSkill: 92 },
    {htmlcssSkill: 100, aipsSkill: 92, jsphpSkill: 97, photoSkill: 54 },
    {htmlcssSkill: 74, aipsSkill: 100, jsphpSkill: 62, photoSkill: 100 }
];

var memberIndex = 0; //на случай если перед первым появлением диаграм на экране пользователь переключит члена команды, см. counter.js

function teamHeandler(index, e) {
    memberIndex = index;
    var offset, base;
    if (document.documentElement.clientWidth < 1170) { offset = 200; base = 60;} 
    else { offset = 300; base = 110; };
    detArrow.style.left = base + offset * index + "px";
    for (var i = 0; i < detTexts.length; i++) {
        detTexts[i].style.display = "none";
    }
    detTexts[index].style.display = "block";
    detName.innerText = e.target.parentNode.children[1].innerText;
    htmlcssCircle.set(members[index].htmlcssSkill / 100);
    aipsCircle.set(members[index].aipsSkill / 100);
    jsphpCircle.set(members[index].jsphpSkill / 100);
    photoCircle.set(members[index].photoSkill / 100);
}


function createCircle(container) {
    return new ProgressBar.Circle(container, {
        color: '#ffe600',
        text: { value: '0%', className: 'progress-inner-text'},
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 3.5,
        step: function(state, circle) {
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value+'%');
            }

        }
    });
}