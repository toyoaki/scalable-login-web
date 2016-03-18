var serviceEndpoint = 'http://localhost:8080/scalable-login/';

function getPage(page){
	return getContextRoot() + '/' + page + ".html";

	function getContextRoot(){
		var path = window.location.pathname;
		return path.substring(0, path.indexOf("/",2));
	}
}

function getService(serviceName){
	return serviceEndpoint + serviceName;
}

function displayErrorMessage(msg, errorComponentId) {
	errorComponentId = errorComponentId ? errorComponentId : "errorMessages";
	var errorMessages = $("#" + errorComponentId);
	errorMessages.empty();
	errorMessages.append(msg);
	errorMessages.removeClass("hidden");
	errorMessages.addClass("show");
}

function callAjax(method, url, data, success, errorPanel) {
	var error = function() {
		displayErrorMessage("Desculpe, algo deu errado...", errorPanel);
	};

	var newSuccess = function(args) {
		if (success) {
			success.apply(this, arguments);
		}
	}

	$.ajax({
		method : method,
		url : url,
		dataType : "json",
		contentType : 'application/json',
		data : data,
		statusCode: {
			401: function() { displayErrorMessage('Por favor verifique se Usuário / Senha estão corretos!') },
			403: function() { displayErrorMessage('Não Autorizado!') }
		},
    	beforeSend: function (request){
    		var token = window.sessionStorage.token;
    		if(token) request.setRequestHeader("Authority", "Bearer " + token);
    	},
    }).then(newSuccess, error);
}
