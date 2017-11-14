app.controller('todosJsController', function ($scope, $rootScope, $rootScope) {
    console.clear();

    var aux = 0;
    $scope.votacao = true;
    $scope.voltarVotar = false;
    $scope.dadosIniciais = function(posicao){

        if(posicao >= $rootScope.dadosRestaurante.length){
            $scope.imagemRotativa = "valor ultrapassou";
            $scope.nomeDoPrato = "Você votou em todos os pratos! Deseja votar novamente?";
            $scope.votacao = false;
            $scope.voltarVotar = true;

        }else{
          angular.forEach($rootScope.dadosRestaurante, function(value, key){
            if(key == posicao){
              $scope.imagemRotativa = value.url;
              $scope.nomeDoPrato = value.name;
            }
          });        
        }

    }
    $scope.dadosIniciais(aux);

    $scope.opcaoUsuario = function(nomePrato, opcao){
      angular.forEach($rootScope.dadosRestaurante, function(value, key){
          if(value.name == nomePrato){
            if(opcao == "likes"){
              value.likes = value.likes + 1;
            }else{
              value.dislikes = value.dislikes + 1;
            }
          }
      });
    }

    $scope.linkesDislikes = function(nomeDoPrato, escolhido){
      $scope.opcaoUsuario(nomeDoPrato, escolhido);
      aux+=1;
      $scope.dadosIniciais(aux);
    }

    $scope.votarNovamente = function(){
        aux = 0;
        $scope.dadosIniciais(aux);
        $scope.votacao = true;
        $scope.voltarVotar = false;
    }
    
    console.log($rootScope.dadosRestaurante);

});