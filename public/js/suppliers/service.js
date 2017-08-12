app.factory('SupplierService',function($http){
    return{
        getSuppliers: function(){
            return $http.get('api/suppliers');
        },
        getSupplier : function(_id){
            return $http.get('api/suppliers/' + _id);
        },
        updateSupplier : function(supplier){
            return $http.put('api/suppliers/' + supplier._id,supplier);
        }
    }
})