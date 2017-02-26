function validate() {
	if (document.register.firstName.value == '') {
		alert("Please enter your first name");
		return false;
	}
	
	if (document.register.lastName.value == '') {
		alert("Please enter your last name");
		return false;
	}

	if (document.register.contact.value == '') {
		alert("Please enter your contact number");
		return false;
	}
	
	if (document.register.email.value == '') {
		alert("Please enter your contact number");
		return false;
	}      
	
	if (document.register.district.value == '') {
		alert("Please enter your password");
		return false;
	}

	if (document.register.password.length < 5) {
		alert("Password must be 5 or more characters long");
        return false;
    }

	if (document.register.confirm_password.length < 5) {
		alert("Password must be 5 or more characters long");
        return false;
    }	
	
	if (document.register.password.value != document.user.password_confirm.value) {
    	alert("Password confirmation does not match");
        return false;
	}
	return confirm("Do you want to register?");
}