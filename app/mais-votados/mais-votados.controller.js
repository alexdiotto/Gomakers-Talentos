app.controller('maisvotadoJsController', function ($scope, $rootScope) {
    console.clear();
    $scope.dadosMaisVotados = [];
    console.log($rootScope.dadosRestaurante);
    angular.forEach($rootScope.dadosRestaurante, function(value, key){
    	if(value.likes > 0){
    		$scope.dadosMaisVotados.push(value);
    	}
    	
    });

});