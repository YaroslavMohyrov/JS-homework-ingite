appModule.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'views/main.html', 
            controller: 'mainController'            
        })
        .when('/news/:id', {
            templateUrl: 'views/news.html', 
            controller: 'newsController'
        })
        .otherwise({
            redirectTo: '/main'
        });
    $locationProvider.hashPrefix('');
})