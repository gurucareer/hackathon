app.controller('homeController', function($scope, $http, $modal, $routeParams, CommonSV) {
	if(CommonSV.getItem('role') == undefined)
		CommonSV.logout();
		//$scope.role = CommonSV.getItem('role');
	
	$http.get('data/task.json').success(function(data) {
		$scope.datas = data;
    });
	
	$scope.searchJob = function() {
		var searchData = $scope.convertVnToE();
		$scope.filterSearch = searchData;		
	}

	if($routeParams.com_id != undefined){
		$http.get('data/task.json').success(function(data) {
			$scope.datas = data;
			angular.forEach($scope.datas, function(data){
				if(data.id == $routeParams.com_id){
					$scope.company = data;
				}
			});
	    });
		
	}
	$scope.convertVnToE = function() { 
		var str = (document.getElementById("final_span").value);		
		str= str.toLowerCase();
		str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
		str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
		str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
		str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
		str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
		str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
		str= str.replace(/đ/g,"d");
		str= str.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'| |\"|\&|\#|\[|\]|~/g," ");
		str= str.replace(/ + /g," "); 
		str= str.replace(/^\-+|\-+$/g,"");
		return str;
	}
});
