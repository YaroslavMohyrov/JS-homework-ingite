var textField = document.getElementById('name-field');
var mailField = document.getElementById('mail-field');
var subject = document.getElementById('subject');
var nameErr = document.getElementById('name-error');
var mailErr = document.getElementById('mail-error');
var subjErr = document.getElementById('subj-error');

textField.onkeyup = function() {
    if (!/^[A-Z,a-z]*$/.test(textField.value)) {
        nameErr.style.display = "block";
    } else { nameErr.style.display = "none"; }
}

mailField.onkeyup = function() {
    if (!/^[A-Z,a-z,0-9,\_,\@]*$/.test(mailField.value)) {
        mailErr.style.display = "block";
    } else { mailErr.style.display = "none"; }
}

subject.onkeyup = function() {
    if (!/^[A-Z,a-z,0-9]*$/.test(subject.value)) {
        subjErr.style.display = "block";
    } else { subjErr.style.display = "none"; }
}



