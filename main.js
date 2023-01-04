const menuBtn = document.querySelector('.mobile');
const closeBtn = document.querySelector('#close');
const mobileDrop = document.querySelector('.menu-drop');

function showMenu() {
  mobileDrop.style.display = 'block';
  closeBtn.style.display = 'block';
  menuBtn.style.display = 'none';
}

function hideMenu() {
  menuBtn.style.display = 'block';
  mobileDrop.style.display = 'none';
  closeBtn.style.display = 'none';
}

menuBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', hideMenu);