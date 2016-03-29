    define(["../angular.min"], function(angular) {

        angular.module('myApp', [])
          .controller('mainController', ['$scope', '$http', function ($scope, $http) {
              $scope.add_person = function(name) {
                    $http.post(
                        'https://api.httpdos.com/api/person/',
                        {'name': name}
                    ).then(function(response) {
                        $scope.persons = response.data;
                    });
              }
          }]);

    });
