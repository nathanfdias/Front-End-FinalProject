const verification = async () => {
    const responde = await fetch("../../json/contas.json")
    const dados = await responde.json();
    const username = document.querySelector('#email-user').value;
    const password = document.querySelector('#password-user').value;

    console.log(dados)

    for (let item of dados) {
        console.log(item.name) 
        if (username == item.name && password == item.password) {
            localStorage.setItem("acesso", true);
            window.location.href = "./../views/index.html";
        } 
    }
};


function registrate() {
    alert("Successfully register")
}