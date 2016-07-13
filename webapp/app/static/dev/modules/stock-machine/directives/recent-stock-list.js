
//Directive for recent stocks
angular.module('stockMachineApp').directive('recentStockList', ['StocksServ', function(StocksServ) {
    'use strict';

    return {
        restrict: 'E',
        replace: true,
        template: '' +
            '<div id="recent-stock-list">' +
            '   <strong>Recent Stocks:</strong>' +
            '   <ul ui-sortable="{ axis:\'y\' }" ng-model="vm.StocksServ.stockList">' +
            '       <li ng-repeat="stockObj in vm.StocksServ.stockList track by $index" ng-class="vm.StocksServ.percentageDiscountCssClass(stockObj)">' +
            '           <a href="" ng-click="vm.StocksServ.deleteStock($index);"><i class="fa fa-times"></i></a>&nbsp;' +
            '           <a href="" ng-click="vm.StocksServ.loadFromStockList($index); vm.modalOk();">{{stockObj.symbol}}</a>' +
            '       </li>' +
            '   </ul>' +
            '</div>' +
            ''
    };
}]);
