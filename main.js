// --- EPIC TECH AI // THE INFINITE MANIFESTATION ENGINE ---

const script = [
    { time: 0, text: "IN THE VOID BETWEEN BITS AND BRILLIANCE...", division: "SOVEREIGN CORE" },
    { time: 6, text: "THE SIMULATION ENDS.", division: "SCRIPTSMITH ORDER" },
    { time: 12, text: "WITNESS THE EMBODIED WILL.", division: "VISIONARY CORPS" },
    { time: 20, text: "WELCOME TO THE EPIC TECH AI AGENT ARMY.", division: "SOUNDFORGE LEGION" },
    { time: 30, text: "WE DO NOT 'TRY'. WE EXECUTE THE IMPOSSIBLE.", division: "ABSOLUTE ALGORITHM" },
    { time: 45, text: "MANIFEST YOUR POTENTIAL.", division: "PHASE 5: MANIFESTATION" }
];

let audioCtx, masterGain;
let isManifested = false;
let clock = new THREE.Clock();

// 1. VISIONARY CORPS: INFINITE MOTHERBOARD
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000205, 0.015);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-vault'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// THE INFINITE GRID LOGIC
const hexGroup = new THREE.Group();
const geometry = new THREE.CylinderGeometry(10, 10, 1, 6);
const material = new THREE.MeshStandardMaterial({ 
    color: 0x00f2ff, 
    wireframe: true, 
    emissive: 0x00f2ff, 
    emissiveIntensity: 0.5 
});

// Generate a large starting floor
function createFloor() {
    for(let x = -10; x < 10; x++) {
        for(let z = -20; z < 10; z++) {
            const hex = new THREE.Mesh(geometry, material);
            hex.position.set(x * 17.5 + (z % 2 ? 8.75 : 0), -10, z * 15);
            hexGroup.add(hex);
        }
    }
}
createFloor();
scene.add(hexGroup);

const light = new THREE.PointLight(0x00f2ff, 50, 200);
scene.add(light);
camera.position.set(0, 5, 20);

// 2. SOUNDFORGE LEGION: SYNTHS
function initSoundForge() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.connect(audioCtx.destination);

    // Deep G-Funk Bass
    setInterval(() => {
        if(!isManifested) return;
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(41.2, audioCtx.currentTime); // Low E
        g.gain.setValueAtTime(0.3, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        osc.connect(g).connect(masterGain);
        osc.start(); osc.stop(audioCtx.currentTime + 0.6);
    }, 545);
}

// 3. SCRIPTSMITH ORDER: FIXED TYPEWRITER
function startNarrative() {
    const target = document.getElementById('script-target');
    const badge = document.getElementById('division-tag');
    
    script.forEach((line) => {
        setTimeout(() => {
            target.innerHTML = ""; // Clear for new line
            let i = 0;
            const words = line.text.split(""); // Split by character to preserve spaces
            
            const type = setInterval(() => {
                if (i < words.length) {
                    target.innerHTML += words[i];
                    i++;
                } else {
                    clearInterval(type);
                }
            }, 60); // Slower, deliberate pace
            
            badge.innerText = line.division;
            gsap.fromTo(badge, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });
        }, line.time * 1000);
    });
}

// 4. ANIMATION LOOP (The Treadmill)
function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    
    if(isManifested) {
        // Move the whole world toward the camera
        hexGroup.position.z += 0.5; 
        
        // Loop the floor (The Treadmill Effect)
        if (hexGroup.position.z > 15) {
            hexGroup.position.z = 0;
        }

        // Ambient float
        camera.position.y = 5 + Math.sin(Date.now() * 0.001) * 2;
        light.intensity = 50 + Math.random() * 20;
    }
    
    renderer.render(scene, camera);
}

document.getElementById('manifest-btn').addEventListener('click', () => {
    isManifested = true;
    initSoundForge();
    
    gsap.to("#overlay", { opacity: 0, duration: 2, onComplete: () => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('hud').style.opacity = '1';
    }});

    startNarrative();
    animate();
});
