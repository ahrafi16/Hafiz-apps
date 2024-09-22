const themeButton = document.getElementById('themeButton');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Toggle icon visibility based on current theme
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    if (body.classList.contains('dark-mode')) {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
});
