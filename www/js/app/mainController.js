    define(["../angular.min"], function(angular) {

        angular.module('myApp', [])
          .controller('mainController', ['$scope', '$http', function ($scope, $http) {
              $scope.add_person = function(name) {
                    $http.get(
                        'https://api.httpdos.com/api/person/',
                        {params: {'name': name}}
                    ).then(function(response) {
                        $scope.persons = response.data;
                    });
              }
          }]);

    });
