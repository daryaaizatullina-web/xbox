// Бургер-меню
const burger = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');
const body = document.body;

// Создаём оверлей
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

function toggleMenu() {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

burger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Закрытие меню при клике на ссылку (опционально)
document.querySelectorAll('.nav-menu li').forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 768) toggleMenu();
  });
});