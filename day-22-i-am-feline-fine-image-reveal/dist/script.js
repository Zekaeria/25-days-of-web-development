//Pixel art by me :)
//Thank you to Laaouatni Anas for the help. https://stackoverflow.com/questions/70670068/mouse-movement-image-layer-effect
//Thank you to Royal Smith for the static

let circle = document.getElementById('circle');

// on mouse move move the circle
document.addEventListener('mousemove', (e) => {
  // makes image move relative to the mouse
  circle.style.left = e.pageX - 125 + 'px'; // 125 = half height of circle --> cursor is in the middle
  circle.style.top = e.pageY - 125 + 'px';
});