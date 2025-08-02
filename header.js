let user= localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : "";

let loginBtn = document.querySelector('.log-in');
let logoutBtn = document.querySelector('.log-out');
let loginNavItems = document.querySelector('.loginNavItems');
if(user){
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
    loginNavItems.style.display = 'flex';
    document.getElementById('username').innerHTML = user.username;
}else{
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
    loginNavItems.style.display = 'none';
    document.getElementById('username').innerHTML = '';
}


logoutBtn.addEventListener('click', function() {
    localStorage.removeItem('user');
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
    loginNavItems.style.display = 'none';
    document.getElementById('username').innerHTML = '';
    window.location.href = "../Home/index.html";
})

console.log(loginNavItems);

localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :localStorage.setItem('cart', JSON.stringify([]));