var myApp = angular.module('MUHCApp');

myApp.controller('QuestionsController', ['Questionnaire','$scope', '$sce', function(Questionnaire, $scope, $sce){
	$scope.Questions = Questionnaire.getQuestions();
	$scope.maxNumberOfQuestions = Questionnaire.getMaxQuestions();
	$scope.toSafeHTML = function(question){
		return $sce.trustAsHtml(question.questionText);
	};
}]);

myApp.controller('BeginButtonController', ['$scope', function($scope){
	$scope.beginButton = function(){
		personalNavigator.pushPage('views/personal/questionnaire/questionnaire-main.html');
	};
}]);

myApp.controller('PopoverController', ['$scope', function($scope) {
	ons.createPopover('views/personal/questionnaire/popover.html').then(function(popover) {
		$scope.popover = popover;
	});

	$scope.show = function(e) {
		$scope.popover.show(e);
	};
}]);