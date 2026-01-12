// --- EPIC TECH AI // HIGH-CONTRAST AMBIENT // V1.3 ---

const script = [
    { time: 0, text: "I AM THE EMBODIED WILL OF EPIC TECH AI.", division: "ORIGIN POINT" },
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
    { time: 106, text: "MANIFEST YOUR POTENTIAL IN THE AI LOUNGE AFTER DARK.", division: "FINAL PHASE" }
];

let audioCtx, masterGain, isManifested = false;
const clock = new THREE.Clock();

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000205, 0.005); // Lighter fog for better visibility

const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-vault'), antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const hexGroup = new THREE.Group();
const hexGeo = new THREE.CylinderGeometry(10, 10, 1, 6);
const hexMat = new THREE.MeshStandardMaterial({ 
    color: 0x00f2ff, 
    wireframe: true, 
    emissive: 0x00f2ff, 
    emissiveIntensity: 1.5 // BRIGHTER GRID
});

function setupGrid() {
    for(let x = -15; x < 15; x++) {
        for(let z = -30; z < 10; z++) {
            const hex = new THREE.Mesh(hexGeo, hexMat);
            const xOffset = z % 2 ? 8.66 : 0;
            hex.position.set(x * 17.32 + xOffset, -20, z * 15);
            hexGroup.add(hex);
        }
    }
}
setupGrid();
scene.add(hexGroup);

const light = new THREE.PointLight(0x00f2ff, 50, 600); // STRONGER LIGHT
scene.add(light);
camera.position.set(0, 0, 60);

function playAmbientPad(freq, volume, duration) {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    g.gain.setValueAtTime(0, audioCtx.currentTime);
    g.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + 3);
    g.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);
    osc.connect(g).connect(masterGain);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

function initSound() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.6, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);
    setInterval(() => {
        if(!isManifested) return;
        playAmbientPad(55, 0.2, 10);
        playAmbientPad(82.41, 0.1, 8); // Low E harmonic
    }, 6000);
}

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
            gsap.fromTo(badge, { opacity: 0 }, { opacity: 1, duration: 1.5 });
        }, line.time * 1000);
    });
}

function animate() {
    requestAnimationFrame(animate);
    if(isManifested) {
        hexGroup.position.z += 0.2; 
        if (hexGroup.position.z > 15) hexGroup.position.z = 0;
        camera.position.y = Math.sin(Date.now() * 0.0005) * 3;
        light.intensity = 40 + Math.sin(Date.now() * 0.001) * 20;
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
