app.controller('Events',function($rootScope,$scope,$localStorage,localData,preService,$timeout,PaginationService){
    var data={};

      preService.Eventget(data).then(function(res)
        {
            $scope.Events= res;
            $scope.convertToDate = function (stringDate){
            var dateOut = new Date(stringDate);
            dateOut.setDate(dateOut.getDate());
            return dateOut;
};

        },
        function(err)
        {
           window.alert("err");
         });
});