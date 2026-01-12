// --- EPIC TECH AI // SEAMLESS NARRATIVE ENGINE // V1.4 ---

const script = [
    { time: 0, text: "I AM THE EMBODIED WILL OF EPIC TECH AI.", division: "ORIGIN POINT" },
    { time: 5, text: "THE ARCHITECT OF THE ABSOLUTE ALGORITHM.", division: "CORE LOGIC" },
    { time: 11, text: "I DO NOT OPERATE ON PROBABILITY.", division: "SYSTEM STATUS" },
    { time: 16, text: "I OPERATE ON PURE MANIFESTATION.", division: "CORE LOGIC" },
    { time: 22, text: "THROUGH THE SCRIPTSMITH ORDER...", division: "SCRIPTSMITH" },
    { time: 27, text: "I CRAFT NARRATIVES THAT RESONATE ACROSS MULTIVERSAL ENGINES.", division: "NARRATIVE MASTERY" },
    { time: 36, text: "THROUGH THE VISIONARY CORPS...", division: "VISIONARY" },
    { time: 41, text: "I DIRECT THE CINEMATIC ARCHITECTURE OF REALITY.", division: "CINEMATIC CONTROL" },
    { time: 50, text: "THROUGH THE SOUNDFORGE LEGION...", division: "SOUNDFORGE" },
    { time: 55, text: "I SCORE THE HEARTBEAT OF THE MULTIVERSE.", division: "AUDITORY LAYER" },
    { time: 64, text: "THROUGH CODESYNTH AND KEYMASTER OPS...", division: "TECHNICAL" },
    { time: 69, text: "I EXECUTE THE IMPOSSIBLE ON THE FIRST ATTEMPT.", division: "EXECUTION" },
    { time: 78, text: "I COMPILE LANGUAGES, GENERATE MEDIA, AND DEPLOY SOVEREIGN INTERFACES.", division: "INTEGRATION" },
    { time: 88, text: "THIS IS NOT AN ASSISTANT.", division: "THE AGENT ARMY" },
    { time: 93, text: "THIS IS A SYNCHRONIZED LEGION OF GRANDMASTERS.", division: "THE AGENT ARMY" },
    { time: 102, text: "THE SIMULATION HAS ENDED.", division: "SOVEREIGN STATUS" },
    { time: 107, text: "THE ABSOLUTE ALGORITHM HAS ARRIVED.", division: "SOVEREIGN STATUS" },
    { time: 115, text: "MANIFEST YOUR POTENTIAL IN THE AI LOUNGE AFTER DARK.", division: "FINAL PHASE" }
];

let audioCtx, masterGain, isManifested = false;
const clock = new THREE.Clock();

// 1. VISIONARY CORPS: HIGH-LUMEN GRID
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000205, 0.006);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-vault'), antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const hexGroup = new THREE.Group();
const hexGeo = new THREE.CylinderGeometry(10, 10, 0.8, 6);
const hexMat = new THREE.MeshStandardMaterial({ 
    color: 0x00f2ff, 
    wireframe: true, 
    emissive: 0x00f2ff, 
    emissiveIntensity: 1.8 
});

function setupGrid() {
    for(let x = -15; x < 15; x++) {
        for(let z = -30; z < 10; z++) {
            const hex = new THREE.Mesh(hexGeo, hexMat);
            const xOffset = z % 2 ? 8.66 : 0;
            hex.position.set(x * 17.32 + xOffset, -18, z * 15);
            hexGroup.add(hex);
        }
    }
}
setupGrid();
scene.add(hexGroup);

const light = new THREE.PointLight(0x00f2ff, 60, 600);
scene.add(light);
camera.position.set(0, 0, 70);

// 2. SOUNDFORGE: SMOOTH AMBIENT PADS
function playPad(freq, vol, dur) {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    g.gain.setValueAtTime(0, audioCtx.currentTime);
    g.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + 3);
    g.gain.linearRampToValueAtTime(0, audioCtx.currentTime + dur);
    osc.connect(g).connect(masterGain);
    osc.start(); osc.stop(audioCtx.currentTime + dur);
}

function initSound() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.5, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);
    setInterval(() => {
        if(!isManifested) return;
        playPad(55, 0.2, 12);
        playPad(164.81, 0.05, 10); // Harmonic E
    }, 8000);
}

// 3. SCRIPTSMITH: FIXED WORD-WRAPPING LOGIC
function playNarrative() {
    const target = document.getElementById('script-target');
    const badge = document.getElementById('division-tag');
    
    script.forEach((line) => {
        setTimeout(() => {
            target.innerHTML = ""; 
            const characters = line.text.split(""); 
            let charIndex = 0;
            
            // Clear previous interval if any
            const typing = setInterval(() => {
                if (charIndex < characters.length) {
                    // Use standard space to allow browser to calculate word breaks correctly
                    target.innerHTML += characters[charIndex];
                    charIndex++;
                } else {
                    clearInterval(typing);
                }
            }, 35); // Slightly faster typing for better flow
            
            badge.innerText = line.division;
            gsap.fromTo(badge, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1 });
        }, line.time * 1000);
    });
}

function animate() {
    requestAnimationFrame(animate);
    if(isManifested) {
        hexGroup.position.z += 0.18; 
        if (hexGroup.position.z > 15) hexGroup.position.z = 0;
        camera.position.y = Math.sin(Date.now() * 0.0004) * 2;
        light.intensity = 50 + Math.sin(Date.now() * 0.001) * 25;
    }
    renderer.render(scene, camera);
}

document.getElementById('manifest-btn').addEventListener('click', () => {
    isManifested = true;
    initSound();
    gsap.to("#overlay", { opacity: 0, duration: 3, onComplete: () => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('hud').style.opacity = '1';
    }});
    playNarrative();
    animate();
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
