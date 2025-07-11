// document.addEventListener('DOMContentLoaded', function () {
//     const signupForm = document.getElementById('signup-form');
//     if (signupForm) {
//         signupForm.addEventListener('submit', function (e) {
//             e.preventDefault();

//             const name = signupForm.elements['name'].value;
//             const surname = signupForm.elements['surname'].value;
//             const email = signupForm.elements['email'].value;
//             const username = signupForm.elements['username'].value;
//             const password = signupForm.elements['password'].value;


//             localStorage.setItem('userFullName', name);
//             localStorage.setItem('userSurname', surname);
//             localStorage.setItem('userEmail', email);
//             localStorage.setItem('username', username);
//             localStorage.setItem('userPassword', password); 
//             localStorage.setItem('userRole', 'User');


//             window.location.href = "../Profile/profile.html";
//         });
//     }
// });



document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();


            const formData = new FormData(signupForm);


            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });


            fetch('http://195.26.245.5:9505/api/clients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    if (!data.success) {
                      //  alert(data.message || "Qeydiyyat uğursuz oldu. Zəhmət olmasa məlumatlarınızı yoxlayın.");
                        return;
                    }
                    // window.location.href = "../Profile/profile.html";
      console.log(data);
                

                
                })
                .catch(error => {
                    alert("Serverə qoşulmaq mümkün olmadı.");
                });
        });
    }
});