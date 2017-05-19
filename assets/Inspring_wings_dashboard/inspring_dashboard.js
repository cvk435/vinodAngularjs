app.controller('dashboardcntrl',['$rootScope','$scope','$localStorage','localData','preService', function($rootScope,$scope,$localStorage,localData,preService){
//Decleration
     $rootScope.session = localData.get();
var sessiondata=$rootScope.session;
var geetingdata=sessiondata.response_info[0];
$rootScope.userType = geetingdata.role_id;
$rootScope.username = geetingdata.first_name;
}]);
