appModule.directive('team', function () {
    return {
        link: function (scope, elem, attr) {
            scope.avatarUrl = attr.avatarUrl;
            scope.name = attr.name;
            scope.employment = attr.employment;
            scope.fbUrl = attr.fbUrl ? attr.fbUrl : "#";
            scope.twUrl = attr.twUrl ? attr.twUrl : "#";
            scope.glUrl = attr.glUrl ? attr.glUrl : "#";
            scope.dbUrl = attr.dbUrl ? attr.dbUrl : "#";
        },
        restrict: 'E',
        templateUrl: '../templates/team-template.html',
        replace: true,
        scope: { }
    }
})