function validate() {
    // Wrap the entire script in a DOMContentLoaded event listener
    document.addEventListener('DOMContentLoaded', () => {
        // Select the form and feedback division
        const form = document.getElementById('registration-form');
        const feedbackDiv = document.getElementById('form-feedback');

        // Add event listener for form's 'submit' event
        form.addEventListener('submit', (event) => {
            // Prevent the form from submitting to the server
            event.preventDefault();

            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            let isValid = true;
            const messages = [];

            if (username.length < 3) {
                isValid = false;
                messages.push('Username must be at least 3 characters long.');
            }

            if (!email.includes('@') || !email.includes('.')) {
                isValid = false;
                messages.push('Please enter a valid email address.');
            }

            if (password.length < 8) {
                isValid = false;
                messages.push('Password must be at least 8 characters long.');
            }

            // Make feedbackDiv visible
            feedbackDiv.style.display = 'block';

            if (isValid) {
                feedbackDiv.textContent = 'Registration successful!';
                feedbackDiv.style.color = '#28a745';
                // form.submit();
            } else {
                feedbackDiv.innerHTML = messages.join('<br>');
                feedbackDiv.style.color = '#dc3545';
            }
        });
    });
}
