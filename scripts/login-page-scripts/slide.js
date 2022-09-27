const loginContainer = document.getElementById('login-container')

const moveOverlay = () => loginContainer.classList.toggle('move')
/*
const moveOverlay = () => loginContainer.classList.add('move')
const moveOverlay = () => loginContainer.classList.remove('move')
toggle alterna entre add e remove
*/ 

document.getElementById('open-register').addEventListener('click', moveOverlay)
document.getElementById('open-login').addEventListener('click', moveOverlay)
document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)