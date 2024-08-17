document.addEventListener("DOMContentLoaded", function() {
    const box = document.querySelector('.box');
  
    function handleScroll() {
      const boxPosition = box.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
  
      if (boxPosition < screenPosition) {
        box.classList.add('triggered'); // Add a class to trigger the animation
      } else {
        box.classList.remove('triggered'); // Remove the class if element is not in view
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  