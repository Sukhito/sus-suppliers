app.controller('SupplierCtrl',function($scope,SupplierService,$stateParams){
    
    SupplierService.getSupplier($stateParams.supplierId).then(function(response){
        $scope.supplier = response.data;
    });
});