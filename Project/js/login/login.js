//window.addEventListener("load", setup);

/*document.getElementById("passWord").required=true; 

document.getElementById("newPassword").required=true; 

document.getElementById("newPasswordCopy").required=true; 
*/
window.onload = setup;

function setup () {
	document.getElementById("createUser").addEventListener("click", () => {

		// Creating a new user
	    login(
	        createUser(
	            document.getElementById("newUsername").value, document.getElementById("newPassword").value
	        )
	    );

	});	

	document.getElementById("loginButton").addEventListener("click", () => {

		// Logging into an existing user
	    if (!login(
		        getUser(
		            document.getElementById("userName").value, document.getElementById("password").value
		        )
	    	)
	    ) {
	    	document.getElementById("wrongLogin").style.display = "block";
	    }
	});	
}
