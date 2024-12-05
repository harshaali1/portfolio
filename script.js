// Get elements for the modals
const educationModal = document.getElementById('educationModal');
const aboutModal = document.getElementById('aboutModal');
const contactModal = document.getElementById('contactModal');

const educationTrigger = document.getElementById('education-trigger');
const aboutTrigger = document.getElementById('about-trigger');
const contactTrigger = document.getElementById('contact-trigger');

const closeBtns = document.querySelectorAll('.close-btn');

// Open the modal when the corresponding link is clicked
educationTrigger.addEventListener('click', (e) => {
  e.preventDefault();
  educationModal.style.display = 'flex';
});

aboutTrigger.addEventListener('click', (e) => {
  e.preventDefault();
  aboutModal.style.display = 'flex';
});

contactTrigger.addEventListener('click', (e) => {
  e.preventDefault();
  contactModal.style.display = 'flex';
});

// Close the modal when the close button is clicked
closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});



document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Offset for fixed header
          behavior: 'smooth',
        });
      }
    });
  });
  