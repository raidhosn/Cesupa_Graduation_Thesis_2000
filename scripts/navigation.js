document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('sidebar');

  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');

      const isOpen = sidebar.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    document.addEventListener('click', function(event) {
      if (!sidebar.contains(event.target) && !mobileToggle.contains(event.target)) {
        if (sidebar.classList.contains('open')) {
          sidebar.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileToggle.setAttribute('aria-label', 'Abrir menu');
        }
      }
    });
  }

  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.sidebar-nav-link');

  navLinks.forEach(link => {
    if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
});
