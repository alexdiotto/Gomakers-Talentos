app.controller('menosvotadoJsController', function ($scope, $rootScope) {
    console.clear();
    $scope.dadosMenosVotados = [];
    angular.forEach($rootScope.dadosRestaurante, function(value, key){
    	if(value.dislikes > 0){
    		$scope.dadosMenosVotados.push(value);
    	}
    	
    });

});