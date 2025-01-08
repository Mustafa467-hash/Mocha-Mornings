
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  

  const yearSpan = document.querySelector('.year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  
  
  const socialLinks = {
    tiktok: 'https://www.tiktok.com',
    youtube: 'https://www.youtube.com',
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com',
  };
  
  document.querySelectorAll('.fa-brands').forEach(icon => {
    const platform = icon.classList[1].split('-')[2]; // Extract platform name
    if (socialLinks[platform]) {
      icon.style.cursor = 'pointer';
      icon.addEventListener('click', () => {
        window.open(socialLinks[platform], '_blank');
      });
    }
  });
  

  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      const name = this.querySelector('input[name="name"]').value.trim();
      const email = this.querySelector('input[name="email"]').value.trim();
      const message = this.querySelector('textarea[name="message"]').value.trim();
      
      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields!');
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address!');
      }
    });
  }
  