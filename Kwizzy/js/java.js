// script.js
const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('toggle-password');

togglePasswordButton.addEventListener('click', function () {
    // Toggle the input type between "password" and "text"
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Change the button text or icon
    this.textContent = type === 'password' ? '👁️' : '🙈';
});
