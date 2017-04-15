var quoteSlidesTxt = document.querySelectorAll('#quote-text li');
var quoteSlidesAuthor = document.querySelectorAll('#quote-author li');
var quoteNav = document.querySelectorAll('#quote-navigation li');

var currentQuoteSlide = 0;

quoteNav[0].onclick = function() { goToSlide(0); }
quoteNav[1].onclick = function() { goToSlide(1); }
quoteNav[2].onclick = function() { goToSlide(2); }
quoteNav[3].onclick = function() { goToSlide(3); }

function goToSlide(slide) {
    if (slide > currentQuoteSlide) {

        quoteSlidesTxt[slide].style.left = 100 + '%';
        quoteSlidesAuthor[slide].style.left = 100 + '%';

        quoteNav[currentQuoteSlide].children[0].classList.remove('separator');
        quoteNav[slide].children[0].classList.add('separator');

        animate(function(timePassed) {
            quoteSlidesTxt[currentQuoteSlide].style.left = (timePassed > 0) ? -(timePassed / 5) + '%' : 0;
            quoteSlidesTxt[slide].style.left = 100 - timePassed / 5 + '%';
            quoteSlidesAuthor[currentQuoteSlide].style.left = (timePassed > 0) ? -(timePassed / 5) + '%' : 0;
            quoteSlidesAuthor[slide].style.left = 100 - timePassed / 5 + '%';
        }, 500);

        setTimeout(function(){
            quoteSlidesTxt[currentQuoteSlide].style.left = "-100%";
            quoteSlidesTxt[slide].style.left = 0;
            quoteSlidesAuthor[currentQuoteSlide].style.left = "-100%";
            quoteSlidesAuthor[slide].style.left = 0;
            currentQuoteSlide = slide;
        }, 500);
    } else {
        quoteSlidesTxt[slide].style.left = -100 + '%';
        quoteSlidesAuthor[slide].style.left = -100 + '%';

        quoteNav[currentQuoteSlide].children[0].classList.remove('separator');
        quoteNav[slide].children[0].classList.add('separator');

        animate(function(timePassed) {
            quoteSlidesTxt[currentQuoteSlide].style.left = (timePassed > 0) ? timePassed / 5 + '%' : 0;
            quoteSlidesTxt[slide].style.left = -100 + timePassed / 5 + '%';
            quoteSlidesAuthor[currentQuoteSlide].style.left = (timePassed > 0) ? timePassed / 5 + '%' : 0;
            quoteSlidesAuthor[slide].style.left = -100 + timePassed / 5 + '%';
        }, 500);

        setTimeout(function(){
            quoteSlidesTxt[currentQuoteSlide].style.left = "100%";
            quoteSlidesTxt[slide].style.left = 0;
            quoteSlidesAuthor[currentQuoteSlide].style.left = "100%";
            quoteSlidesAuthor[slide].style.left = 0;
            currentQuoteSlide = slide;
        }, 500);
    }
}