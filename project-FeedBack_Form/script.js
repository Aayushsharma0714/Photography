document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thank-you-message').style.display = 'block';

    document.getElementById('feedback-form').reset();
});
