const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');
const menuResponsivo = () => {
  document.querySelector(".topbar").classList.toggle("responsive");
};

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    lightIcon.classList.toggle('hidden');
    darkIcon.classList.toggle('hidden');
});