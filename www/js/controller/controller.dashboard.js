(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('DashboardController', DashboardController);

  function DashboardController($scope, localStorage) {
    var vm = this;

    vm.attempt = 3;//localStorage.get('evaluation.attempt') || 0;

  }
})();