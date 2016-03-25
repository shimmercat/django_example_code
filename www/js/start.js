    require.config({
        shim: {
            'angular.min': {
                exports: 'angular'
            }
        }
    });

    define(["app/mainController", "angular.min" ], function(mainController, angular) {

        angular.element(document).ready(function() {
            angular.bootstrap(document, ["myApp"]);
        });

    });
