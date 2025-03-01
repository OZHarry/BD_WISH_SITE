
document.getElementById('heart').addEventListener('click', function() {
    const message = document.getElementById('message');

    // Toggle the visibility of the message
    if (message.style.display === 'block') {
        message.style.display = 'none'; // Hide the message if it's already visible
    } else {
        message.style.display = 'block'; // Show the message if it's hidden
    }
});

