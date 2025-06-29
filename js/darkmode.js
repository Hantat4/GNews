window.addEventListener('DOMContentLoaded', () => {
    // lo de dark mode aquí...
  document.body.style.visibility = 'visible';

  const toggleBtn = document.getElementById('toggleDark');

  // Aplica el modo oscuro si estaba activado
  const isDark = localStorage.getItem('darkMode') === 'enabled';
  if (isDark) {
    document.body.classList.add('dark-mode');
    if (toggleBtn) toggleBtn.textContent = 'Light Mode';
  }
  
  // Solo si hay botón, permite alternar
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      const isDarkMode = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
      toggleBtn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    });
  }
});
