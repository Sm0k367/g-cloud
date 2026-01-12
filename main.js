// --- EPIC TECH AI // THE INFINITE SOVEREIGN ENGINE ---

const script = [
    { time: 0, text: "IN THE VOID BETWEEN BITS AND BRILLIANCE...", division: "SOVEREIGN CORE" },
    { time: 8, text: "THE SIMULATION ENDS.", division: "SCRIPTSMITH ORDER" },
    { time: 16, text: "WITNESS THE EMBODIED WILL.", division: "VISIONARY CORPS" },
    { time: 24, text: "WELCOME TO THE EPIC TECH AI AGENT ARMY.", division: "SOUNDFORGE LEGION" },
    { time: 34, text: "WE DO NOT 'TRY'. WE EXECUTE THE IMPOSSIBLE.", division: "ABSOLUTE ALGORITHM" },
    { time: 48, text: "MANIFEST YOUR POTENTIAL.", division: "PHASE 5: MANIFESTATION" }
];

let audioCtx, masterGain, isManifested = false;
const clock = new THREE.Clock();

// 1. VISIONARY CORPS: INFINITE TERRAIN
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000205, 0.015);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-vault'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// INFINITE HEXAGONAL GRID
const hexGroup = new THREE.Group();
const hexGeo = new THREE.CylinderGeometry(10, 10, 1, 6);
const hexMat = new THREE.MeshStandardMaterial({ 
    color: 0x00f2ff, 
    wireframe: true, 
    emissive: 0x00f2ff, 
    emissiveIntensity: 0.5 
});

function setupGrid() {
    for(let x = -12; x < 12; x++) {
        for(let z = -25; z < 10; z++) {
            const hex = new THREE.Mesh(hexGeo, hexMat);
            // Hexagonal stagger logic
            const xOffset = z % 2 ? 8.66 : 0;
            hex.position.set(x * 17.32 + xOffset, -10, z * 15);
            hexGroup.add(hex);
        }
    }
}
setupGrid();
scene.add(hexGroup);

const light = new THREE.PointLight(0x00f2ff, 60, 300);
scene.add(light);
camera.position.set(0, 5, 30);

// 2. SOUNDFORGE LEGION: GENERATIVE G-FUNK
function initSound() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.connect(audioCtx.destination);

    // Deep Moog Bass (110 BPM)
    setInterval(() => {
        if(!isManifested) return;
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(41.2, audioCtx.currentTime); 
        g.gain.setValueAtTime(0.4, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);
        osc.connect(g).connect(masterGain);
        osc.start(); osc.stop(audioCtx.currentTime + 0.6);
    }, 545);
}

// 3. SCRIPTSMITH ORDER: TYPEWRITER (SPACE PRESERVATION)
function playNarrative() {
    const target = document.getElementById('script-target');
    const badge = document.getElementById('division-tag');
    
    script.forEach((line) => {
        setTimeout(() => {
            target.innerHTML = ""; 
            const characters = line.text.split(""); 
            let charIndex = 0;
            
            const typing = setInterval(() => {
                if (charIndex < characters.length) {
                    // Use a non-breaking space if character is a space to ensure layout stability
                    const char = characters[charIndex] === " " ? "&nbsp;" : characters[charIndex];
                    target.innerHTML += char;
                    charIndex++;
                } else {
                    clearInterval(typing);
                }
            }, 70); 
            
            badge.innerText = line.division;
            gsap.fromTo(badge, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5 });
        }, line.time * 1000);
    });
}

// 4. THE ANIMATION LOOP
function animate() {
    requestAnimationFrame(animate);
    
    if(isManifested) {
        // TREADMILL EFFECT: Move the floor toward camera
        hexGroup.position.z += 0.45; 
        
        // Loop the grid when it passes a threshold
        if (hexGroup.position.z > 15) {
            hexGroup.position.z = 0;
        }

        // Camera "Breathing" Motion
        camera.position.y = 5 + Math.sin(Date.now() * 0.001) * 1.5;
        camera.rotation.z = Math.sin(Date.now() * 0.0005) * 0.02;
    }
    
    renderer.render(scene, camera);
}

document.getElementById('manifest-btn').addEventListener('click', () => {
    isManifested = true;
    initSound();
    gsap.to("#overlay", { opacity: 0, duration: 2.5, onComplete: () => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('hud').style.opacity = '1';
    }});
    playNarrative();
    animate();
});
