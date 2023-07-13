function changeTab(index) {
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.section');
  
    tabs.forEach(tab => tab.classList.remove('active'));
    sections.forEach(section => section.style.display = 'none');
  
    tabs[index].classList.add('active');
    sections[index].style.display = 'block';
  }
  
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
  
    let currentSection = sections[0];
    let currentSectionIndex = 0;
  
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight) {
        currentSection = section;
        currentSectionIndex = index;
      }
    });
  
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabs[currentSectionIndex].classList.add('active');
  });