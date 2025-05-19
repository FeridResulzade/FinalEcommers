document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = signupForm.elements['name'].value;
            const surname = signupForm.elements['surname'].value;
            const email = signupForm.elements['email'].value;
            const username = signupForm.elements['username'].value;
            const password = signupForm.elements['password'].value;

           
            localStorage.setItem('userFullName', name);
            localStorage.setItem('userSurname', surname);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('username', username);
            localStorage.setItem('userPassword', password); 
            localStorage.setItem('userRole', 'User');

           
            window.location.href = "../Profile/profile.html";
        });
    }
});