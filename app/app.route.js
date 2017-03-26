(function () {

    angular
        .module('app')
        .config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routing( $stateProvider, $urlRouterProvider ) {

        // default route
        $urlRouterProvider.otherwise('/');

        // app routes
        $stateProvider
            .state('sandbox', {
                url: '/',
                templateUrl: 'sandbox/sandbox.html',
                controller: 'SandboxController',
                controllerAs: 'vm',
                data: {
                    cssClassnames: 'rw-state-sandbox'
                }
            });

    }

    // manual bootstrapping
    // app.run();

})();