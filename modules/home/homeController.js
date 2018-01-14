function hController ($scope) {
	$scope.isEdit = false;
	$scope.editSave = "Edit";
	$scope.setEditFlag = function(record){
		if($scope.isEdit == true){
			$scope.editSave = "Edit";
			$scope.isEdit = false;
		}else{
			$scope.editSave = "Save";
			$scope.isEdit = true;
		}
	}

}