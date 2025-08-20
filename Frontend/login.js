document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate input (basic validation)
    if (!role || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Create an object to send in the request body
    const loginData = {
        role: role,
        email: email,
        password: password
    };

    // Send a POST request to the backend
    fetch('https://medifusion-4.onrender.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData) // Convert loginData to JSON string
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // If login is successful, store user and token in localStorage
            localStorage.setItem('loggedInUser', data.name); // Save user data
            localStorage.setItem('authToken', data.jwtToken); // Save token
            localStorage.setItem('Role', role);
            // Notify user of success and redirect
            alert('Login successful');
            if(role=="Admin")
            window.location.href ='Dashboard/Admin.html'; // Redirect to dashboard or specified page
            else if(role=="Doctor")
                window.location.href ='Dashboard/doctor.html';
            else 
            window.location.href ='Dashboard/patient.html';
        } else {
            // Show error message if login fails
            alert(data.message || 'Login failed. Please check your credentials.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
