include('index', 'cv');

function login() {
    var un = document.getElementById("username").value;
    var pw = document.getElementById("password").value;

    do {
        if (un == null || un == "") {
            alert("Please enter username.")
            return false;
        }
        if (pw == null || pw == "") {
            alert("Please enter the password.")
            return false;
        }
    } while (false);

    var user = "tommi";
    var passw = "123";

    if ((un == user) && (pw == passw)) {
        window.location.href = 'cv.html';

    } else {
        alert('Invalid user. Hint: tommi and 123 will let you in.');
    }
}

/*function logout() {
    window.location.href = 'index.html';
    location.reload(true);
}*/

function close() {
    document.querySelector('ion.menu-controller').close();
}