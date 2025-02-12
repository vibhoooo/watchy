export const validate = (email, password) => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
	
	if(emailRegex.test(email) && passwordRegex.test(password)) {
		return 1;
	} 
	else {
		return 0;
	}
}
