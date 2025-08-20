document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form submission

    const role = document.getElementById('role').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const response = await fetch('https://medifusion-4.onrender.com/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ role, name, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            document.getElementById('signup-form').reset(); // Clear form fields after successful signup
            window.location.href = 'login.html'; // Redirect to login page after signup
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error during signup:', error);
        alert('An error occurred. Please try again later.');
    }
});
