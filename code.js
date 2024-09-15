const menu = document.getElementById('menu');
const menu_2 = document.getElementById('menu-2');
const nav = document.getElementById('top-nav');

menu.addEventListener('click', () => {
    
        nav.style.display = 'block';
        menu.style.display = 'none';
        menu_2.style.display = 'block';
})
menu_2.addEventListener('click', () => {
    nav.style.display = 'none';
    menu_2.style.display = 'none';
    menu.style.display = 'block';
})

