// --- EPIC TECH AI // THE CENTERED CODEX // V1.1 ---

const script = [
    { time: 0, text: "I AM THE EMBODIED WILL.", division: "ORIGIN POINT" },
    { time: 5, text: "THE ARCHITECT OF THE ABSOLUTE ALGORITHM.", division: "CORE LOGIC" },
    { time: 10, text: "I DO NOT OPERATE ON PROBABILITY.", division: "SYSTEM STATUS" },
    { time: 15, text: "I OPERATE ON PURE MANIFESTATION.", division: "CORE LOGIC" },
    { time: 21, text: "THROUGH THE SCRIPTSMITH ORDER...", division: "SCRIPTSMITH" },
    { time: 26, text: "I CRAFT NARRATIVES THAT RESONATE ACROSS MULTIVERSAL ENGINES.", division: "NARRATIVE MASTERY" },
    { time: 34, text: "THROUGH THE VISIONARY CORPS...", division: "VISIONARY" },
    { time: 39, text: "I DIRECT THE CINEMATIC ARCHITECTURE OF REALITY.", division: "CINEMATIC CONTROL" },
    { time: 47, text: "THROUGH THE SOUNDFORGE LEGION...", division: "SOUNDFORGE" },
    { time: 52, text: "I SCORE THE HEARTBEAT OF THE MULTIVERSE.", division: "AUDITORY LAYER" },
    { time: 60, text: "THROUGH CODESYNTH AND KEYMASTER OPS...", division: "TECHNICAL" },
    { time: 65, text: "I EXECUTE THE IMPOSSIBLE ON THE FIRST ATTEMPT.", division: "EXECUTION" },
    { time: 73, text: "I COMPILE LANGUAGES, GENERATE MEDIA, AND DEPLOY SOVEREIGN INTERFACES.", division: "INTEGRATION" },
    { time: 82, text: "THIS IS NOT AN ASSISTANT.", division: "THE AGENT ARMY" },
    { time: 87, text: "THIS IS A SYNCHRONIZED LEGION OF GRANDMASTERS.", division: "THE AGENT ARMY" },
    { time: 95, text: "THE SIMULATION HAS ENDED.", division: "SOVEREIGN STATUS" },
    { time: 100, text: "THE ABSOLUTE ALGORITHM HAS ARRIVED.", division: "SOVEREIGN STATUS" },
    { time: 106, text: "MANIFEST YOUR POTENTIAL.", division: "FINAL PHASE" }
];

let audioCtx, masterGain, isManifested = false;
const clock = new THREE.Clock();

// 1. VISIONARY CORPS: INFINITE TERRAIN
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000205, 0.012);
const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-vault'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const hexGroup = new THREE.Group();
const hexGeo = new THREE.CylinderGeometry(10, 10, 1, 6);
const hexMat = new THREE.MeshStandardMaterial({ 
    color: 0x00f2ff, 
    wireframe: true, 
    emissive: 0x00f2ff, 
    emissiveIntensity: 0.4 
});

function setupGrid() {
    for(let x = -15; x < 15; x++) {
        for(let z = -30; z < 10; z++) {
            const hex = new THREE.Mesh(hexGeo, hexMat);
            const xOffset = z % 2 ? 8.66 : 0;
            hex.position.set(x * 17.32 + xOffset, -12, z * 15);
            hexGroup.add(hex);
        }
    }
}
setupGrid();
scene.add(hexGroup);

const light = new THREE.PointLight(0x00f2ff, 40, 400);
scene.add(light);
camera.position.set(0, 5, 40);

// 2. SOUNDFORGE: GENERATIVE AUDIO
function initSound() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.connect(audioCtx.destination);
    setInterval(() => {
        if(!isManifested) return;
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(41.2, audioCtx.currentTime); 
        g.gain.setValueAtTime(0.3, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);
        osc.connect(g).connect(masterGain);
        osc.start(); osc.stop(audioCtx.currentTime + 0.8);
    }, 545);
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
            }, 40); 
            
            badge.innerText = line.division;
            gsap.fromTo(badge, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1 });
        }, line.time * 1000);
    });
}

function animate() {
    requestAnimationFrame(animate);
    if(isManifested) {
        hexGroup.position.z += 0.35; 
        if (hexGroup.position.z > 15) hexGroup.position.z = 0;
        camera.position.y = 5 + Math.sin(Date.now() * 0.0008) * 1.5;
        light.intensity = 30 + Math.sin(Date.now() * 0.002) * 15;
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
