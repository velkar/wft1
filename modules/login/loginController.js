function lController ($scope,$http,$templateRequest,$compile,$document) {
	$scope.submitLogin = function(){
		$http({
			  method: 'POST',
			  url: '/validate',
			  data : {
			  	'username' : $scope.username,
			  	'password' : $scope.password
			  }
			}).then(function successCallback(response) {
				if(response.data == "Error"){
					$scope.reset();
					$scope.message = "Validation Failed";
				}else{
					$scope.dUrl='../modules/home/views/home.html';
					$scope.waitForIt = response.data;	
					 $templateRequest($scope.dUrl).then(function(template) {
					 	var ele = angular.element(lg).html(template);
					 	ele.html(template);
					 	$compile(ele.contents())($scope);
				     }, function(err) {
				     	alert(err);
				     });

				}
			  }, function errorCallback(response) {
			  	alert(response.data);
			});
		}
		$scope.reset = function(){
			$scope.username = "";
			$scope.password = "";
		}
}