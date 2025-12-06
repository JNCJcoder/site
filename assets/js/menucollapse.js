const toggleButton = document.getElementsByClassName('navbar-toggler')[0];
const menu = document.getElementById('navbarNav');

toggleButton.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu.style.display === '')
    {
        menu.style.display = 'block';
    }
    else
    {
        menu.style.display = 'none';
    }
});