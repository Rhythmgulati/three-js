import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // Enable shadows
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth movement
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.maxDistance = 10; // Limit zoom out
controls.minDistance = 2; // Limit zoom in

// Adjusted Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
scene.add(ambientLight);

// Adjusted Directional Light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(1, 1, 1); // Move it above and slightly in front
directionalLight.castShadow = true; // Enable shadows
scene.add(directionalLight);

// Adjusted Hemisphere Light
const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.3);
scene.add(hemisphereLight);

// const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
// scene.add(dirLightHelper);


// Cube with Physical Material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhysicalMaterial({
    color: 0x00ff00,
    clearcoat: 0.62,
    roughness: 0.9,
    metalness: 0.1
});
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true; // Allow cube to cast shadows
cube.receiveShadow = true;
scene.add(cube);

camera.position.z = 5;

// Animation Loop
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
    
}

renderer.setAnimationLoop(animate);
