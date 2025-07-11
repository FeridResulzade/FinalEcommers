
    const userDetails= {}

    fetch("http://195.26.245.5:9505/api/clients/get-details",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : ''}`
        }
    })
    .then(response => response.json())
    .then(data => {
       userDetails = data; 
    })

    const { username, name, surname, email } = userDetails;
   

    const userDetailsContainer = document.getElementById('userDetails');

    if (userDetailsContainer ) {
        userDetailsContainer.innerHTML = `
            <h2>User Details</h2>
            <p><strong>Name:</strong> ${name || 'Ferid'}</p>
            <p><strong>Surname:</strong> ${surname || 'Resulzade'}</p>
            <p><strong>Email:</strong> ${email || 'resulzadeferid@gmail.com'}</p>
            <p><strong>Username:</strong> ${username}</p>
        `;
    } else if (userDetailsContainer) {
        userDetailsContainer.innerHTML = `
            <h2>User Details</h2>
            <p class="text-warning">No user data found. Please log in.</p>
        `;
    }