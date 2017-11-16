    var app = angular.module('almocoAPP', [
    	'ngRoute' // MÓDULO DE CONTROLE DAS URL/ROTAS    
    ]);

    app.run(['$http', '$rootScope', function ($http, $rootScope) {

	    $http({method: 'GET', url: 'public/data/restaurants.json' }).then(function successCallback(response) {
	        $rootScope.dadosRestaurante = response.data;
	    }, function errorCallback(response) {
           swal("Ops!", "Aconteceu algum problema na consulta dos pratos!", "warning");
	       console.log("Erro: Promise reject. \n" + JSON.stringify(error));
	    });        

    }]);

    app.controller('principalController', function principalController($scope) {
    	$scope.tituloPagina = "Almoço da Firrrrrrmaaa!";

	})