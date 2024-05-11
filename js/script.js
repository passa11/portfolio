document.addEventListener('DOMContentLoaded', function() {
            const menu = document.querySelector('nav ul');
            const menuButton = document.querySelector('.menu-button');

            menuButton.addEventListener('click', function() {
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; 
            });
        });