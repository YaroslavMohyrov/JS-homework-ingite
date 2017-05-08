appModule.controller('newsController', function($scope, $routeParams, Shared) {
    $scope.news = Shared.news;
    $scope.id = $routeParams.id - 1;
})