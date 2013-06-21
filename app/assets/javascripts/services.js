angular.module('time.services', []).factory('now',function(){
    return function(){
        return moment();
    }
}).factory('dateService',function(now){
    return {
        monthStartDate: function(){
            return now().startOf('month');
        }
    }
})