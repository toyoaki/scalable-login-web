function logon() {
	if (validateLogon()) {
		var loginData = {username: username(), password: password()};
		callAjax('POST', getService('logon'), JSON.stringify(loginData), success)
	}

	function validateLogon() {
		if (!username() || !password()) {
			displayErrorMessage("Preencher Usuário e Senha");
			return false;
		}
		return true;
	}	

	function success(data, textStatus, jqXHR){
  		window.sessionStorage.token = data.token;
		window.location.href = getPage('profile');
	}
}

function username() {
	return $("#username").val();
}

function password() {
	return $("#password").val();
}
