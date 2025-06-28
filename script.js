 
    // This script adds a 'scrolled' class to the navigation bar when you scroll down.
    const nav = document.querySelector('.top-nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) { // you can change '50' to a larger number
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
