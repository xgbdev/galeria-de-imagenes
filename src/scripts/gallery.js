document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('fullscreenModal');
    const fullscreenImg = document.getElementById('fullscreenImage');
    const copyrightModal = document.getElementById('copyrightmodal');
    const closeButton = document.getElementById('closeButton');
  
    function openFullscreen(element) {
        const src = element.dataset.src;
        const alt = element.dataset.alt;
        const copyright = element.dataset.copyright;
        
        fullscreenImg.src = src;
        fullscreenImg.alt = alt;
        fullscreenImg.copyright = copyright;
        modal.classList.remove('pointer-events-none');
        modal.classList.remove('opacity-0');
        fullscreenImg.classList.remove('scale-95');
        fullscreenImg.classList.add('scale-100');
        document.body.style.overflow = 'hidden';
        copyrightModal.innerText = fullscreenImg.copyright;
    }
    
    function closeFullscreen() {
        modal.classList.add('opacity-0');
        modal.classList.add('pointer-events-none');
        fullscreenImg.classList.remove('scale-110');
        fullscreenImg.classList.add('scale-95');
        document.body.style.overflow = 'auto';
    }
  
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        openFullscreen(item)
      });
    });
  
    closeButton.addEventListener('click', closeFullscreen);
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeFullscreen();
    });
  });