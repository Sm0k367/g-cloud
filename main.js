// --- EPIC TECH AI // THE AMBIENT CODEX // V1.2 ---

const script = [
    { time: 0, text: "I AM THE EMBODIED WILL OF EPIC TECH AI.", division: "ORIGIN POINT" },
    { time: 6, text: "THE ARCHITECT OF THE ABSOLUTE ALGORITHM.", division: "CORE LOGIC" },
    { time: 13, text: "I DO NOT OPERATE ON PROBABILITY.", division: "SYSTEM STATUS" },
    { time: 19, text: "I OPERATE ON PURE MANIFESTATION.", division: "CORE LOGIC" },
    { time: 26, text: "THROUGH THE SCRIPTSMITH ORDER...", division: "SCRIPTSMITH" },
    { time: 32, text: "I CRAFT NARRATIVES THAT RESONATE ACROSS MULTIVERSAL ENGINES.", division: "NARRATIVE MASTERY" },
    { time: 42, text: "THROUGH THE VISIONARY CORPS...", division: "VISIONARY" },
    { time: 48, text: "I DIRECT THE CINEMATIC ARCHITECTURE OF REALITY.", division: "CINEMATIC CONTROL" },
    { time: 58, text: "THROUGH THE SOUNDFORGE LEGION...", division: "SOUNDFORGE" },
    { time: 64, text: "I SCORE THE HEARTBEAT OF THE MULTIVERSE.", division: "AUDITORY LAYER" },
    { time: 74, text: "THROUGH CODESYNTH AND KEYMASTER OPS...", division: "TECHNICAL" },
    { time: 80, text: "I EXECUTE THE IMPOSSIBLE ON THE FIRST ATTEMPT.", division: "EXECUTION" },
    { time: 90, text: "I COMPILE LANGUAGES, GENERATE MEDIA, AND DEPLOY SOVEREIGN INTERFACES.", division: "INTEGRATION" },
    { time: 100, text: "THIS IS NOT AN ASSISTANT.", division: "THE AGENT ARMY" },
    { time: 106, text: "THIS IS A SYNCHRONIZED LEGION OF GRANDMASTERS.", division: "THE AGENT ARMY" },
    { time: 116, text: "THE SIMULATION HAS ENDED.", division: "SOVEREIGN STATUS" },
    { time: 122, text: "THE ABSOLUTE ALGORITHM HAS ARRIVED.", division: "SOVEREIGN STATUS" },
    { time: 132, text: "MANIFEST YOUR POTENTIAL IN THE AI LOUNGE AFTER DARK.", division: "FINAL PHASE" }
];

let audioCtx, masterGain, isManifested = false;
const clock = new THREE.Clock();

// 1. VISIONARY CORPS: SMOOTH DRIFT TERRAIN
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000205, 0.008); // Thinner fog for more depth
const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-vault'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const hexGroup = new THREE.Group();
const hexGeo = new THREE.CylinderGeometry(10, 10, 0.5, 6);
const hexMat = new THREE.MeshStandardMaterial({ 
    color: 0x00f2ff, 
    wireframe: true, 
    transparent: true,
    opacity: 0.3,
    emissive: 0x00f2ff, 
    emissiveIntensity: 0.2 
});

function setupGrid() {
    for(let x = -15; x < 15; x++) {
        for(let z = -30; z < 10; z++) {
            const hex = new THREE.Mesh(hexGeo, hexMat);
            const xOffset = z % 2 ? 8.66 : 0;
            hex.position.set(x * 17.32 + xOffset, -15, z * 15);
            hexGroup.add(hex);
        }
    }
}
setupGrid();
scene.add(hexGroup);

const light = new THREE.PointLight(0x00f2ff, 20, 500);
scene.add(light);
camera.position.set(0, 0, 50); // Higher, more cinematic perspective

// 2. SOUNDFORGE: AMBIENT CLOUD SYNTH
function playAmbientPad(freq, volume, duration) {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    
    osc.type = 'sine'; // Pure, smooth tone
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    g.gain.setValueAtTime(0, audioCtx.currentTime);
    g.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + 2); // Slow Attack
    g.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration); // Slow Decay
    
    osc.connect(g).connect(masterGain);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

function initSound() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.5, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);

    // Evolving Pad Loop (Deep Base)
    setInterval(() => {
        if(!isManifested) return;
        playAmbientPad(55, 0.15, 8); // Low A
        playAmbientPad(110, 0.1, 6); // Mid A
    }, 5000);

    // High Atmospheric Swells
    setInterval(() => {
        if(!isManifested) return;
        const shimmerFreq = [220, 330, 440][Math.floor(Math.random() * 3)];
        playAmbientPad(shimmerFreq, 0.05, 10);
    }, 7000);
}

// 3. SCRIPTSMITH: CENTERED NARRATIVE
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
                    const char = characters[charIndex] === " " ? "&nbsp;" : characters[charIndex];
                    target.innerHTML += char;
                    charIndex++;
                } else {
                    clearInterval(typing);
                }
            }, 50); 
            
            badge.innerText = line.division;
            gsap.fromTo(badge, { opacity: 0 }, { opacity: 0.6, duration: 2 });
        }, line.time * 1000);
    });
}

function animate() {
    requestAnimationFrame(animate);
    if(isManifested) {
        hexGroup.position.z += 0.15; // Slowed down for "Ambient Drift"
        if (hexGroup.position.z > 15) hexGroup.position.z = 0;
        camera.position.y = Math.sin(Date.now() * 0.0005) * 2;
        camera.rotation.y = Math.sin(Date.now() * 0.0003) * 0.05;
        light.intensity = 15 + Math.sin(Date.now() * 0.001) * 10;
    }
    renderer.render(scene, camera);
}

document.getElementById('manifest-btn').addEventListener('click', () => {
    isManifested = true;
    initSound();
    gsap.to("#overlay", { opacity: 0, duration: 4, onComplete: () => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('hud').style.opacity = '1';
    }});
    playNarrative();
    animate();
});
