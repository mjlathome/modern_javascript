const button1 = document.querySelector('body > button.button1');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

// make wrapper visible to force background to be transparent
button1.addEventListener('click', () => {  
  popup.style.display = 'block'; 
});

// make wrapper invisible uppn popup close
close.addEventListener('click', () => {  
  popup.style.display = 'none'; 
});

// click background closes popup too
popup.addEventListener('click', () => {  
  popup.style.display = 'none'; 
});