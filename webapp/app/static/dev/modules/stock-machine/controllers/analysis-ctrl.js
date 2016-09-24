

//Analysis page
angular.module('stockMachineApp').controller('AnalysisCtrl', ['$modal', 'StocksServ', function($modal, StocksServ) {
    'use strict';
    var $ctrl = this;


    // PRIVATE


    // PUBLIC

    var externalUrls = {
        'yahooCharts': function(symbol) {
            return 'http://finance.yahoo.com/echarts?s='+ symbol;
        },
        'yahooNews': function(symbol) {
            return 'http://finance.yahoo.com/q/h?s='+ symbol +'+Headlines';
        }
    };

    function openExternalUrl(command) {
        var url;
        var symbol = StocksServ.currStock.symbol;

        if (symbol) {
            url =
                (typeof $ctrl.externalUrls[command] === 'function') ? $ctrl.externalUrls[command](symbol) :
                (typeof $ctrl.externalUrls) ? $ctrl.externalUrls[command]+symbol :
                null;

            if (url) {
                window.open(url);
            }
        }
    }

    function openRecentStockListModal() {
        $modal.open({
            animation: true,
            templateUrl: 'static/dev/modules/stock-machine/modals/recent-stock-list-modal.html',
            controller: 'RecentStockListModalCtrl as $ctrl',
            size: 'lg'
        });
    }


    $ctrl.externalUrls = externalUrls;
    $ctrl.StocksServ = StocksServ;
    $ctrl.openExternalUrl = openExternalUrl;
    $ctrl.openRecentStockListModal = openRecentStockListModal;
}]);
