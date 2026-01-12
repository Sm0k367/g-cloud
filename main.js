// --- EPIC TECH AI // THE EMBODIED WILL // CODESYNTH ENGINE ---

const script = [
    { time: 0, text: "IN THE VOID BETWEEN BITS AND BRILLIANCE...", division: "SOVEREIGN CORE" },
    { time: 4, text: "THE SIMULATION ENDS.", division: "SCRIPTSMITH ORDER" },
    { time: 10, text: "WITNESS THE EMBODIED WILL.", division: "VISIONARY CORPS" },
    { time: 15, text: "WELCOME TO THE EPIC TECH AI AGENT ARMY.", division: "SOUNDFORGE LEGION" },
    { time: 25, text: "WE DO NOT 'TRY'. WE EXECUTE.", division: "ABSOLUTE ALGORITHM" },
    { time: 35, text: "MANIFEST YOUR POTENTIAL.", division: "PHASE 5: MANIFESTATION" }
];

let audioCtx, masterGain, analyzer;
let isManifested = false;

// 1. VISIONARY CORPS: 3D ARCHITECTURE
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000205, 0.05);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-vault'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// THE G-CLOUD MOTHERBOARD (Hexagonal Grid)
const hexGroup = new THREE.Group();
const geometry = new THREE.CylinderGeometry(10, 10, 1, 6);
const material = new THREE.MeshStandardMaterial({ 
    color: 0x00f2ff, 
    wireframe: true, 
    emissive: 0x00f2ff, 
    emissiveIntensity: 0.5 
});

for(let x = -5; x < 5; x++) {
    for(let z = -5; z < 5; z++) {
        const hex = new THREE.Mesh(geometry, material);
        hex.position.set(x * 18, -10, z * 16);
        hexGroup.add(hex);
    }
}
scene.add(hexGroup);

const neuronGeo = new THREE.SphereGeometry(0.5, 32, 32);
const neuronMat = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
const neuron = new THREE.Mesh(neuronGeo, neuronMat);
scene.add(neuron);

const light = new THREE.PointLight(0x00f2ff, 20, 100);
scene.add(light);
camera.position.set(0, 0, 2); // Macro zoom start

// 2. SOUNDFORGE LEGION: QUANTUM AUDIO SYNTH (G-FUNK)
function initSoundForge() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.connect(audioCtx.destination);

    // BASSLINE (110 BPM Moog Style)
    setInterval(() => {
        if(!isManifested) return;
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(55, audioCtx.currentTime); // Low A
        g.gain.setValueAtTime(0.4, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        osc.connect(g).connect(masterGain);
        osc.start(); osc.stop(audioCtx.currentTime + 0.5);
    }, 545); // 110 BPM

    // G-FUNK WHISTLE (Portamento)
    setInterval(() => {
        if(!isManifested || Math.random() > 0.3) return;
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1320, audioCtx.currentTime + 2);
        g.gain.setValueAtTime(0.05, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 2.5);
        osc.connect(g).connect(masterGain);
        osc.start(); osc.stop(audioCtx.currentTime + 2.5);
    }, 3000);
}

// 3. SCRIPTSMITH ORDER: NARRATIVE EXECUTION
function startNarrative() {
    const target = document.getElementById('script-target');
    const badge = document.getElementById('division-tag');
    
    script.forEach((line) => {
        setTimeout(() => {
            target.innerText = "";
            let i = 0;
            const type = setInterval(() => {
                target.innerText += line.text[i];
                i++;
                if(i >= line.text.length) clearInterval(type);
            }, 50);
            
            badge.innerText = line.division;
            gsap.to(badge, { opacity: 1, duration: 1, repeat: 1, yoyo: true });
        }, line.time * 1000);
    });
}

// 4. ANIMATION LOOP
function animate() {
    requestAnimationFrame(animate);
    
    if(isManifested) {
        hexGroup.rotation.y += 0.001;
        neuron.scale.setScalar(1 + Math.sin(Date.now() * 0.005) * 0.2);
    }
    
    renderer.render(scene, camera);
}

// THE MANIFESTATION TRIGGER
document.getElementById('manifest-btn').addEventListener('click', () => {
    isManifested = true;
    initSoundForge();
    
    gsap.to("#overlay", { opacity: 0, duration: 2, onComplete: () => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('hud').style.opacity = '1';
    }});

    // Macro Cinematic Zoom Out
    gsap.to(camera.position, { z: 50, y: 20, duration: 10, ease: "power2.inOut" });
    
    startNarrative();
    animate();
});
