app.controller('myProfileCntrl',['$rootScope','$scope','$state','$http','httpService','$localStorage','localData','preService','$timeout',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData,preService,$timeout){



   $scope.userDetails=JSON.parse(localStorage.getItem("userDetails"));
   //alert("login");
   //lert($scope.userDetails.email_id);
   //alert(JSON.stringify($scope.userDetails));

       $rootScope.session = localData.get();
       var sessiondata=$rootScope.session;
       var geetingdata=sessiondata.response_info[0];
       $rootScope.userType = geetingdata.role_id  ;
       $rootScope.username = geetingdata.first_name;


       $scope.onSubmit=function()
       {
             var Eventdata=$scope.userDetails;
             var data = Eventdata;
             var userid=Eventdata.user_id;

             preService.edituser(data).then(function(res)
             {
                 if(res.status==1)
                {
                      $scope.status=res.status;
                     $scope.message="Updated SuccessFully";
                     var data = {userid};

                    preService.getUsers(data).then(function(res)
                    {

                        $scope.userDetails= res;

                      $state.go("Dashboard")
                    },
                    function(err)
                    {
                     window.alert("err");
                    });
                }
                 else
                 {
                   $scope.status=0;
                   $scope.message=" Not Updated ";
                 }
             },
             function(err)
             {
                  window.alert("err");
             });

     }
   // $scope.changePassword.email_id = localStorage.getItem("emailid");
}]);
