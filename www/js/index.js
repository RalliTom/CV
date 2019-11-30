// Tommi Ralli 1800583

// very basic login function. Checks if fields are filled and lets user in if they used exact login values
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
// logout function, clears localstorage and guides the user to login page
function logout() {

    localStorage.clear();
    window.location.href = 'index.html';
    console.log("Localstorage Cleared");
}
// closes the side menu
function close() {
    document.getElementById('sideMenu');
    console.log("close called");
}
