document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 800 });

  const navLinks = document.getElementById("navLinks");
  const hamburger = document.getElementById("hamburger");
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabSections = document.querySelectorAll(".tab-content");
  const navItems = document.querySelectorAll(".nav-links a");

  // Toggle hamburger
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Handle tab switching
  function activateTab(tabName) {
    tabButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tabName);
    });

    tabSections.forEach((section) => {
      section.classList.toggle("active", section.id === tabName);
    });
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      activateTab(btn.dataset.tab);
    });
  });

  navItems.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = link.dataset.tab;
      activateTab(tab);
      navLinks.classList.remove("active"); // close nav on mobile
    });
  });

  // Activate default tab
  activateTab("experience");
});
