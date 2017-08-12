var app = angular.module('suus',['ui.router','ui.bootstrap','ui.sortable']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider

        .state('suppliers',{
            url: '/suppliers',
            templateUrl: 'js/suppliers/index.html',
            controller:'SuppliersCtrl'
        })
        .state('supplier',{
            url: '/suppliers/:supplierId',
            templateUrl: 'js/suppliers/supplier/index.html',
            controller:'SupplierCtrl'
        })
        .state('supplier-edit',{
            url: '/suppliers/:supplierId/edit',
            templateUrl: 'js/suppliers/edit-supplier/index.html',
            controller: 'SupplierEditCtrl'
        })
    
//        .state('new-delivery',{
//            url : '/new-delivery',
//            templateUrl : 'js/deliveries/new-delivery/index.html',
//            controller: 'DeliveryNewCtrl'
//        })

    $locationProvider.hashPrefix('');
});