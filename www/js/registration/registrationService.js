(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .service('registrationService', registrationService);

    registrationService.$inject = ['$http', '$rootScope', '$window', '$state', 'famConstants', 'userDetails', 'famProxy'];
    function registrationService($http, $rootScope, $window, $state, famConstants, userDetails, famProxy) {
        return {
        setYearsDetails : setYearsDetails,
        getSexDetails : getSexDetails,
        setMonth : setMonth,
        setDays : setDays,
        
            postUserData: postUserData
        };
        var config = {
            headers : {
                'Content-Type': 'application/json'                                  
            }               
        }

        function postUserData(data) {
            return $http({
                method: 'POST',
                url: famProxy.getUrl(famConstants.STATE_USER.USER_REGISTRATION),
                data: data
            }).then(successHandler)
            .catch(errorHandler);
        }

        function setYearsDetails() {
            var year='',
            jsonYear = [];
            for(year = 1980; year<2016; year++){               
                jsonYear.push({
                    id: year,
                    optionValue: year
                });
            }
            return jsonYear;
        }

        function setDays() {
            var days='',
            jsonDay = [];
            for(days = 1; days<=31; days++){
               jsonDay.push({
                    id: days,
                    optionValue: days
                });
            }
            return jsonDay;
        }

        function setMonth() {
            var setMonth = '';
            return setMonth = [
            {
                id : 'January',
                optionValue : 'January'
            },
            {
                id : 'February',
                optionValue : 'February'
            },
            {
                id : 'March',
                optionValue : 'March'
            },
            {
                id : 'April',
                optionValue : 'April'
            },
            {
                id : 'May',
                optionValue : 'May'
            },
            {
                id : 'June',
                optionValue : 'June'
            },
            {
                id : 'July',
                optionValue : 'July'
            },
            {
                id : 'August',
                optionValue : 'August'
            },
            {
                id : 'September',
                optionValue : 'September'
            },
            {
                id : 'October',
                optionValue : 'October'
            },
            {
                id : 'November',
                optionValue : 'November'
            },
            {
                id : 'December',
                optionValue : 'December'
            }];
        }        

        function getSexDetails() {
            var sexDetails = '';
            return sexDetails = [
            {
                id : 'male',
                optionValue : 'Male'
            },
            {
                id : 'female',
                optionValue : 'Female'
            }];
        }


       

    }
})();



