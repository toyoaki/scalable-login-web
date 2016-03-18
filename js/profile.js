$(document).ready(function() {

	loadProfile();

	function loadProfile(){
		callAjax('get', getService('profile'), undefined, success);

		function success(data, textStatus, jqXHR){
			$('#profileBox').css('background-color', data.backgroundColor);
			$('#description').text(data.userDescription);
			$('#favoriteSong').text(data.favoriteSong);
		}
	}	

});
