var attempt = 3;

var users =[
	{
		username: "Martim T. Chambel",
		email: "M@g.c",
		password: "12"
	},
	{
		username: "João Bagulho",
		email: "jb@g.c",
		password: "321"
	},
	{
		username: "Afonso Costa",
		email: "ac@g.c",
		password: "21"
	},
	{
		username: "Jorge Madeira",
		email: "jm@g.c",
		password: "1904"
	},
	{
		username: "Matheus Castro",
		email: "mc@g.c",
		password: "123"
	}

]


function validate(){
	console.log('Validate');
	var email = document.getElementById("floatingInput").value;
	var password = document.getElementById("floatingPassword").value;
	for (let i = 0; i < users.length; i++) {
		if ((users[i].email === email) && (users[i].password === password)) {
			alert ("Login successfully");
			sessionStorage.setItem("user",  JSON.stringify(users[i]));
			window.location.href="index.html";/*
			window.location = "index.html"; // Redirecting to other page.*/
			return false;			
		}
	}
	attempt --;// Decrementing by one.
	alert("You have left "+attempt+" attempt;");
	// Disabling fields after 3 attempts.
	if( attempt == 0){
		document.getElementById("email").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
		return false;
	}
	return true;
}