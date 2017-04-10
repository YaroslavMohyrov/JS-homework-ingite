var links = document.querySelectorAll('#menu a');
var services = document.getElementById('services');
var work = document.getElementById('portfolio');
var aboutUs = document.getElementById('about-us');

$(document).ready(function(){
    $('a[href^="#"]').click(function(){
        var $element = $('a[name=' + $(this).attr('href').substr(1) + ']');
        if($element.length == 1) {
            $('html, body').animate({ scrollTop: $element.offset().top }, 500);
        }     
        return false;
    });
});



