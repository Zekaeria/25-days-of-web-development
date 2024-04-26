//Thank you Louis Hoebregts for the help (https://codepen.io/Mamboleoo/pen/MOwqOp)
//Always remember I need 3 things: Scene, Camera, Renderer

/* VARIABLES */
var ww = window.innerWidth; //width of the window's layout viewport
var wh = window.innerHeight; //height of the window's layout viewport

/* RENDERER var displays the scene onto a HTML Canvas Element,
antialias to smooth out object edges, ref html canvas */
var renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector('canvas')
});
renderer.setSize(ww, wh);
renderer.setClearColor(0x001a2d); //hex color for canvas

var scene = new THREE.Scene(); //SCENE: group containing all the objects I want to render
scene.fog = new THREE.Fog(0x001a2d, 80, 140); //fog for scene

var camera = new THREE.PerspectiveCamera(45, ww/wh, 0.1, 200); //CAMERA: defines position & orientation from which to view a scene
camera.position.x = 70;
camera.position.y = 30;
camera.position.z = 5;
camera.lookAt(new THREE.Vector3());

/* LIGHT */
var heartLight = new THREE.PointLight(0xffffff, 2, 150);
scene.add(heartLight); //add heartLight to scene

var heart;
function createHeart(){
    var heartShape = new THREE.Shape();
    heartShape.moveTo(25, 25);
    heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0);
    heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
    heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
    heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35);
    heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0);
    heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25);
  const extrudeSettings = { 
	amount: 8, //thickness of shape
	bevelEnabled: true, 
	bevelSegments: 10, 
	steps: 2, 
	bevelSize: 15, 
	bevelThickness: 15
};
  const geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
  //var geometry = new THREE.SphereGeometry(8, 32, 32);
  var material = new THREE.MeshPhongMaterial({
    color: 0xfd2692, //highlight
    shininess:15,
    emissive: 0xc43372,
    emissiveIntensity:0.8
  });
  heart = new THREE.Mesh(geometry, material);
  heart.position.x = -9;
  heart.position.z = -6.5;
  heart.position.y = 17;
  heart.rotation.y = 5; /* rotate for y-axis */
  heart.rotation.x = -3;
  heart.scale.set(.2,.2,.2);
  scene.add(heart);
  heartLight.position.copy(heart.position);
  heartLight.position.y += 4;
  var heartLight2 = new THREE.PointLight(0xffffff, 0.6, 150);
  scene.add(heartLight2);
  heartLight2.position.x += 20;
  heartLight2.position.y -= 20;
  heartLight2.position.z -= 25;  
}

function createTerrain () {
  var geometry = new THREE.PlaneGeometry(150,150,120,120);
  var m = new THREE.Matrix4();
  m.makeRotationX(Math.PI * -0.5);
  geometry.applyMatrix(m);
  for(var i=0;i<geometry.vertices.length;i++) {
    var vector = geometry.vertices[i];
    var ratio = noise.simplex3(vector.x*0.03, vector.z*0.03, 0);
    vector.y = ratio * 10;
  }
  var material = new THREE.MeshPhongMaterial({  
    color: 0xc22d7c, //terrain color, hyexextra: 821948
    emissive: 0x032f50
  });
  var plane = new THREE.Mesh(geometry, material);
  scene.add( plane );
}

var stars = new THREE.Group();
scene.add(stars);
var starsLights = new THREE.Group();
scene.add(starsLights);
var starsAmount = 21;
function createStars() {
  var geometry = new THREE.SphereGeometry(0.3, 16, 16);
  var material = new THREE.MeshBasicMaterial({color: 0xffffff});
  for(var i=0;i<starsAmount;i++) {
    var star = new THREE.Mesh(geometry, material);
    star.position.x = (Math.random() - 0.5) * 150;
    star.position.z = (Math.random() - 0.5) * 150;
    var ratio = noise.simplex3(star.position.x*0.03, star.position.z*0.03, 0);
    star.position.y = ratio * 10 + 0.3;
    stars.add(star);
    var velX = (Math.random() + 0.1) * 0.1 * (Math.random()<0.5?-1:1);
    var velY = (Math.random() + 0.1) * 0.1 * (Math.random()<0.5?-1:1);
    star.vel = new THREE.Vector2(velX, velY);
    var starLight = new THREE.PointLight(0xffffff, 0.8, 3);
    starLight.position.copy(star.position);
    starLight.position.y += 0.5;
    starsLights.add(starLight);
  }
}

// Updates position of stars for movement
function updateStar(star, index) {
  if (star.position.x < -75) {
    star.position.x = 75;
  }
  if (star.position.x > 75) {
    star.position.x = -75;
  }
  if (star.position.z < -75) {
    star.position.z = 75;
  }
  if (star.position.z > 75) {
    star.position.z = -75;
  }
  
  star.position.x += star.vel.x;
  star.position.z += star.vel.y;
  var ratio = noise.simplex3(star.position.x*0.03, star.position.z*0.03, 0);
  star.position.y = ratio * 10 + 0.3;
  
  
  starsLights.children[index].position.copy(star.position);
  starsLights.children[index].position.y += 0.5;
}

function render(a) {
  requestAnimationFrame(render);
  for(var i=0;i<starsAmount;i++) {
    updateStar(stars.children[i], i);
  }
  renderer.render(scene, camera);
}

function onResize() {
  ww = window.innerWidth;
  wh = window.innerHeight;
  camera.aspect = ww / wh;
  camera.updateProjectionMatrix();
  renderer.setSize(ww, wh);
}

createHeart();
createTerrain();
createStars();
requestAnimationFrame(render);
window.addEventListener('resize', onResize);