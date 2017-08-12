app.controller('SuppliersCtrl',function($scope,SupplierService){
    SupplierService.getSuppliers().then(function(response){
        $scope.suppliers = response.data;
    })
});