// jsを記述する際はここに記載していく
  function scrollToSection(id) {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 50 // Adjusted for header height
      });
    }
  }
  
  // Add event listeners to each menu item
  document.querySelectorAll('.header nav ul li a').forEach((item, index) => {
    item.addEventListener('click', event => {
      event.preventDefault();
      // Get the target section ID based on the index of the menu item
      const targetId = '#' + item.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });