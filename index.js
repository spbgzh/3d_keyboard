import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import  model  from './model.js';//模型对象

//场景
const scene = new THREE.Scene();
scene.add(model); //模型对象添加到场景中




//光源设置

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.02);
directionalLight1.position.set(0, 500, 500);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.02);
directionalLight2.position.set(0, -800, -500);
const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.001);
directionalLight3.position.set(0, -10000,0);
const ambient = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient);
scene.add(directionalLight1);
scene.add(directionalLight2);
scene.add(directionalLight3);


//渲染器和相机
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(4, width / height, 1, 100);
camera.position.set(0, 4, 0);
camera.lookAt(0, 0, 0);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(0x1E2025, 1)
document.body.appendChild(renderer.domElement);

// 渲染循环
function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();


const controls = new OrbitControls(camera, renderer.domElement);

// 画布跟随窗口变化
window.onresize = function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};