/*
* 控制器，将相应的数据放到响应的视图
* */

angular.module("ctrls",["services"])
    .controller("list",function($scope,$routeParams,$http,listDate){
        listDate.then(function(data){
            var data=data.data;
            var arr=[];
            data.forEach(function(obj){
                if(obj.cid==$routeParams.id){
                    arr.push(obj);
                }
            });
            console.log(arr);
            $scope.data=arr;
        });

    }).controller("show",function($scope,$routeParams){
        $scope.id = $routeParams.id;

}).controller("index",function($scope,$http,indexDate){
    indexDate.then(function(data){
        $scope.data = data.data;
    })
});