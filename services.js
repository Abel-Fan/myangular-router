angular.module("services",[])
.factory("indexDate",["$http",function($http){
    return $http({url:"index.txt"});
}]).factory("listDate",["$http",function($http){
    return $http({url:"list.txt"});
}]);