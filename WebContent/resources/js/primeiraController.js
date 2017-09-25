var app = angular.module('Teste', []);

app.controller('primeiraController', ['$scope', function($scope) {
	$scope.prima = {meuNome : 'Railson Ramés'};
	
	$scope.contador = 0;
	
	$scope.addAoContador = function() {
		$scope.contador++;	
	};
	
	$scope.pessoas = ['Rayanne', 'Railson', 'Rayanninha, a.k.a. Clarice', 'Robertinho a.k.a. Henrique', 'Que sucesso juventude', 'Outro elemento do array'];
	
}]);