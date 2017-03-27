(function () {
	'use strict';
		angular.module(FAM_CONTROLLER)
		.controller('loginCtrl', loginCtrl);
		loginCtrl.$inject = ['loginDataService', '$stateParams', '$http', '$timeout','famMessages','famConstants','userDetails','alertService','$state'];  
		
		function loginCtrl(dataService, $stateParams, $http, $timeout, famMessages, famConstants, userDetails, alertService, $state) {
			var login = this;
			login.famMessages = famMessages;
			login.famConstants = famConstants;
			login.userLocked = false;
			login.onsubmit = onsubmit;
			login.showServerErrorMsg = showServerErrorMsg;			
			function onsubmit(data) {
				login.submitted = true;
				if (login.loginForm.$valid) {
					login.formData = data;					
	                dataService.getUserData(login.formData,function (response) {
                    if (response && response.success == 'true') {
                        userDetails.setUserDetails(response.token);
                        //testerService.prepreNotifications(response.data.notifications);
                        $state.go(famConstants.STATE_TESTER.HOME);
                    } else {
                    	var alertVO = {};
                    	alertVO.title = famMessages.MESSAGE.M100002;
                    	alertVO.message = famMessages.ERROR.M200008;
                    	alertService.openModal(alertVO);
                        //login.showServerErrorMsg(response.errorCode);
                    }

                });
            	}
			}
		}
		 function showServerErrorMsg(code) {
            /*ctrl.serverErrorMsg = ptpMessages.BUSINESS_MESSAGE[code];
            if (code === 900006 || code === 900002 || code === 900008) {
                ctrl.userLocked = true;
            }*/
        }
})();
 