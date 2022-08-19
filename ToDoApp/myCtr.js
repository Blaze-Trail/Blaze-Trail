
let firstName;
let lastName; 
{ { firstName + ' ' + lastName } }
app.controller('myCtr', function ($scope) {
    $scope.firstName = 'James';
    $scope.lastName = 'Samuel';
})