document.getElementById('register-btn').addEventListener('click', async () => {
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/register', {
         method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password })
    });

    if (response.ok) {
        alert('Registration successful!');
        window.location.href = 'dashboard.html';
    } else {
         alert('Registration failed. Please try again.');
    }
});