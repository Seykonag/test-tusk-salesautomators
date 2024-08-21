document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault()

    let isValid = true

    // Check if required fields are filled
    const requiredFields = document.querySelectorAll('#orderForm [required]')
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false
            field.classList.add('invalid')
            field.nextElementSibling.innerText = 'This field is required'
        } else {
            field.classList.remove('invalid')
        }
    });

    // Additional validation can go here (e.g., regex for phone number, email format)

    if (isValid) {
        alert('Form submitted successfully!')
        // Submit form or send data to server here
    } else {
        alert('Please fill out all required fields correctly.')
    }
});
