appModule.controller('mainController', function($scope, $document, $http, Carousel, Shared) {
    // плавная прокрутка
    $scope.scrollTo = function(e, id) {
        var duration = 1000;
        var offset = 50;
        var targetElement = angular.element(document.getElementById(id));
        $document.scrollToElement(targetElement, offset, duration);
        e.preventDefault();         
    }
    
    // табы и карусель сервисов
    $scope.service = 0;
    $scope.Carousel = Carousel;
    var pointerBlocks = angular.element(document.querySelectorAll('#service-list .pointer-block'));
    $scope.changeTab = function(index) {
        index = (index + 4) % 4;
        Carousel.get('service-carousel').toIndex(index);
        pointerBlocks.removeClass('pointer-block-active');
        pointerBlocks.eq(index).addClass('pointer-block-active');
        $scope.service = index;
    }

    // портфолио
    $http({
        method: 'GET',
        url: 'data-portfolio.json'
    }).then(
        response => $scope.pictures = response.data, 
        response => console.log('Error: '+ response.statusText)
    );
    $scope.filterVal = "ALL";
    $scope.filterFunc = function (pic) {
        if (pic.category == $scope.filterVal || $scope.filterVal == "ALL") {
            return pic;
        }
    }
    var filterBtns = angular.element(document.querySelectorAll("#filter li"));
    $scope.setFilter = function (target, val) {
        filterBtns.removeClass('filter-btn-active');
        angular.element(target).addClass('filter-btn-active');
        $scope.filterVal = val;
    }

    // counters
    $http({
        method: 'GET',
        url: 'data-numbers.json'
    }).then(
        response => {
            $scope.numbers = response.data
            $scope.initCount = function() {
                $scope.projects = $scope.numbers.projects;
                $scope.clicks = $scope.numbers.clicks;
                $scope.mails = $scope.numbers.mails;
                $scope.jokes = $scope.numbers.jokes;
            }
    }, 
        response => console.log('Error: '+ response.statusText)
    );
    $scope.projects = $scope.clicks = $scope.mails = $scope.jokes = 0;

    // news
    $http({
        method: 'GET',
        url: 'data.json'
    }).then(
        response => {
            Shared.news = response.data;
            Shared.news.forEach(item => item.date = new Date(item.date));
            $scope.news = Shared.news;
        },
        response => console.log('Error: '+ response.statusText)
    );

    // contact
    $scope.nameReg = /^[A-Za-z]*$/;
    $scope.mailReg = /^[/^[A-Za-z0-9\_\.]+@[A-Za-z0-9\_\.]+$/;
    $scope.mesReg = /^.{20,}$/;

    //burger
    $scope.isBurgerOpened = false;
    $scope.toggleBurgerMenu = function () {
        $scope.isBurgerOpened = !$scope.isBurgerOpened;
    }

    
    
})