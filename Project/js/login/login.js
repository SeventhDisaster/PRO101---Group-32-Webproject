/*window.addEventListener("load", login);

document.getElementById("passWord").required=true; 

document.getElementById("newPassword").required=true; 

document.getElementById("newPasswordCopy").required=true; 
window.onload = setup;
*/
function setup () {
	document.getElementById("createUser").addEventListener("click", () => {

	    login(
	        createUser(
	            document.getElementById("newUsername").value, document.getElementById("newPassword").value
	        )
	    );

	});	

	document.getElementById("loginButton").addEventListener("click", () => {

	    if (!login(
		        getUser(
		            document.getElementById("userName").value, document.getElementById("passWord").value
		        )
	    	)
	    ) {
	    	document.getElementById("wrongLogin").style.display = "block";
	    }
	});	
}
