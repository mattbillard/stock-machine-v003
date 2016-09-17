
//Controller for RecentStocks modal
angular.module('stockMachineApp').controller('RecentStockListModalCtrl', ['$scope', '$modalInstance', 'StocksServ', function($scope, $modalInstance, StocksServ) {
    'use strict';
    var $ctrl = this;

    function modalOk() {
        $modalInstance.close();
    }

    function modalCancel() {
        $modalInstance.dismiss('cancel');
    }

    $ctrl.StocksServ = StocksServ;
    $ctrl.modalOk = modalOk;
    $ctrl.modalCancel = modalCancel;
}]);
