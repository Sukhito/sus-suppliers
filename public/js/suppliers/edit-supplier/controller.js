app.controller('SupplierEditCtrl',function($scope,SupplierService,$stateParams,$state){
    
    SupplierService.getSupplier($stateParams.supplierId).then(function(response){
        $scope.supplier = response.data;
    });
    
	$scope.addContact = function(contacts){
        newContact = {
            name : "",
            phone : "",
            position : ""
        };
        contacts.push(newContact);
    }

    $scope.deleteContact = function(index,volume){
        volume.splice(index,1)
    }
    
	$scope.save = function(){
        SupplierService.updateSupplier($scope.supplier).then(function(response){
            if(response.data){
                alert("Success");
                $state.go('supplier',{supplierId:$scope.supplier._id})

            }else{
                alert("Failed");
            }
        })
    }
    
});