console.log('client.js sourced');

var app = angular.module('SalaryApp', []);

app.controller('SalaryController', ['$http', function($http) {
    console.log('Angular sourced');
    var self = this;

    self.newEmployee = [];

    self.getEmployees = function() {
        $http({
            method: 'GET',
            url: '/'
        }).then(function(response) {
            console.log(response.data_);
            self.employees = response.data;
        
        }) // end then
    } //end getEmployees

    self.getEmployees();
    
}])