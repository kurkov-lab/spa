let oscarsModule = angular.module('oscarsModule', []);

oscarsModule.controller("myController", function($scope, $http) {
    $http.get('oscars.json')
        .then(function(res) {
            $scope.stuff = res.data;
        });
});