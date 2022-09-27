
// document.getElementById('login-verify').addEventListener('click', verification())


function verification() {
    const username = document.querySelector('#email-user').value;
    const password = document.querySelector('#password-user').value;

    if (username == 'admin@admin' && password == 'admin') {
        localStorage.setItem("acesso", true);
        alert("Welcome");
        window.location.href = "./../views/index.html";
        // href="./../views/index.html"
    } else {
        alert('Please enter a valid username and password')
    }
}

function registrate() {
    alert("Successfully register")
}