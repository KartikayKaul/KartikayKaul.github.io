document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 800 });

  const navLinks = document.getElementById("navLinks");
  const hamburger = document.getElementById("hamburger");
  const navItems = document.querySelectorAll(".nav-links a");
  const tabSections = document.querySelectorAll(".tab-content");

  // Hamburger menu toggle
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Handle tab switching via navbar links
  function activateTab(tabName) {
    tabSections.forEach((section) => {
      section.classList.toggle("active", section.id === tabName);
    });
  }

  navItems.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = link.dataset.tab;
      activateTab(tab);
      navLinks.classList.remove("active"); // Close menu on mobile
    });
  });

  // Show "experience" by default
  activateTab("experience");
});
