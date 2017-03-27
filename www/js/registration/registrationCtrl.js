(function () {
	'use strict';
		angular.module(FAM_CONTROLLER)
		.controller('registrationCtrl', registrationCtrl);
		registrationCtrl.$inject = ['registrationService', '$stateParams', '$http', '$timeout','famMessages','famConstants','alertService','$state','$ionicPopup'];  
		function registrationCtrl(dataService, $stateParams, $http, $timeout, famMessages, famConstants, alertService, state, $ionicPopup) {
			var registration = this;
			registration.famConstants = famConstants;
			registration.famMessages = famMessages;
			registration.onsubmit = onsubmit;
			registration.checkedOrNot  = checkedOrNot;
			registration.termsandpolicy  = 'Off';
			init();
			function init() {
	            registration.userSex = dataService.getSexDetails();
	            registration.birthYears = dataService.setYearsDetails();
	            registration.setDays = dataService.setDays();
	            registration.setMonth = dataService.setMonth();
	        }
			function checkedOrNot (isChecked, index){
				console.log(index);
				//var terms_condition_checked = isChecked;
				//registration.checkedOrNot = true;
	            var confirmPopup = $ionicPopup.confirm({
	                title: famMessages.MESSAGE.M100003,
	                template: famMessages.MESSAGE.M100004
	            });
	            confirmPopup.then(function(res) { 
	            	if(res){
	            		registration.termsandpolicy = 'On';
	            		return registration.termsandpolicy;
	            	} else {
	            		registration.termsandpolicy = 'Off';
	            		return registration.termsandpolicy;
	            	}
	            		            	
	            });
	            //registration.checkedOrNot = true;
	            //alert(confirmPopup);
		        

				/*var alertVO = {};
				alertVO.title = famMessages.MESSAGE.M100003;
            	alertVO.message = famMessages.MESSAGE.M100004;
				//isChecked = true;
				alertService.confirmModal(alertVO,function(response){
					isChecked = response
				});
				//console.log(result);
				
				var alertVO = {};
				alertVO.title = famMessages.MESSAGE.M100003;
            	alertVO.message = famMessages.ERROR.M100004;
				//isChecked = true;
				var result = alertService.confirmModal(alertVO);
				//isChecked = alertService.confirmModal(alertVO);
				console.log(result);
				*/
			}
			function onsubmit (data){
				console.log();
				registration.submitted = true;
				data.termsandpolicy = false;

				if (registration.registrationForm.$valid) {
					if(data.sex === ''){
						var alertVO = {};
                    	alertVO.title = famMessages.MESSAGE.M100002;
                    	alertVO.message = famMessages.ERROR.M200013;
                    	alertService.openModal(alertVO);
                    	event.preventDefault()
					}
					if(data.bday === ''){
						var alertVO = {};
                    	alertVO.title = famMessages.MESSAGE.M100002;
                    	alertVO.message = famMessages.ERROR.M200014;
                    	alertService.openModal(alertVO);
                    	event.preventDefault()
					}
					if(data.bmonth === ''){
						var alertVO = {};
                    	alertVO.title = famMessages.MESSAGE.M100002;
                    	alertVO.message = famMessages.ERROR.M200015;
                    	alertService.openModal(alertVO);
					}
					if(data.byear === ''){
						var alertVO = {};
                    	alertVO.title = famMessages.MESSAGE.M100002;
                    	alertVO.message = famMessages.ERROR.M200016;
                    	alertService.openModal(alertVO);
                    	event.preventDefault()
					}
					registration.formData = data;					
	                dataService.postUserData(registration.formData,function (response) {

	                });
				}

			}
		}
})();
 