/* When button is clicked, animate fade in for hidden container */
function makeVisible() {
  let message = document.getElementById('hiddenDiv');
  message.style.opacity = '1'; 
  message.style.transition = 'opacity 3s ease-in-out';
}
