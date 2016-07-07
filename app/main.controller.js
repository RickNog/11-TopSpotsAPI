(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController',MainController);

    MainController.$inject = ['$http'];
    /* @ngInject */
    function MainController($http) {
        var vm = this;
        vm.title = 'MainController';
        activate();
        ////////////////
        function activate() {
                $http({
                method: "GET",
                url: "http://localhost:53141/api/topspots"
             }).then(function(response) {
              vm.topspots = response.data;
          });
        }
    }
})();


// RN, MM




