var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true, 
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Get the toggle button
const toggleButton = document.getElementById('dark-mode-toggle');

// Check for saved dark mode preference in localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save the preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
document.getElementById('dark-mode-toggle').addEventListener('change', function () {
  document.body.classList.toggle('dark-mode', this.checked);
});