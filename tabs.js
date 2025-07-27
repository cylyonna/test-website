// Script to show one section at a time via navigation
document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll('#nav-list li');
  const sections = document.querySelectorAll('.section-tab');

  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove 'active' from all nav items
      navItems.forEach(n => n.classList.remove('active'));
      // Add 'active' to clicked nav item
      this.classList.add('active');

      // Hide all sections
      sections.forEach(section => section.style.display = 'none');
      // Show the selected section
      const sectionId = this.getAttribute('data-section');
      document.getElementById(sectionId).style.display = '';
    });
    // Also support keyboard navigation
    item.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        this.click();
      }
    });
  });
});