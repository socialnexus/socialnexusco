document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const formMessage = document.querySelector('.form-message');
    const eventDate = new Date('2025-04-13T12:00:00');
    
    // Countdown timer
    function updateCountdown() {
        const now = new Date();
        const diff = eventDate - now;
        
        if (diff > 0) {
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            
            const dateTimeElement = document.querySelector('.date-time');
            if (dateTimeElement) {
                const originalText = dateTimeElement.getAttribute('data-original') || dateTimeElement.textContent;
                if (!dateTimeElement.getAttribute('data-original')) {
                    dateTimeElement.setAttribute('data-original', originalText);
                }
                
                dateTimeElement.innerHTML = `${originalText}<br><span class="countdown">${hours}h ${minutes}m from now</span>`;
            }
        }
    }
    
    // Update countdown every minute
    updateCountdown();
    setInterval(updateCountdown, 60000);
    
    // Form validation
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = '#f44336';
                return;
            }
            
            // In a real application, you would send this to a server
            // This is just a simulation for demonstration purposes
            
            // Simulate successful signup
            formMessage.textContent = 'Thank you! You are now subscribed to our events newsletter.';
            formMessage.style.color = '#4CAF50';
            
            // Clear the form
            signupForm.reset();
        });
    }
});
