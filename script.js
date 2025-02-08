// script.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic validation (you can expand this)
        if (email === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate a successful login (you can replace this with actual login logic)
        alert(`Logged
