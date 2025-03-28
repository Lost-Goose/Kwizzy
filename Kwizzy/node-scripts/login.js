document.querySelector('.login-btn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/login', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ email, password })
     });

    if (response.ok) {
        if (confirm('Login successful! Do you want to proceed to the dashboard?')) {
             window.location.href = 'home.html';
         }
     } else {
        alert('Invalid email or password. Please try again.');
    }
});
