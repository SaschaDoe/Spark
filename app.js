// Track data for the SPARK soundtrack
const tracks = [
    {
        id: 1,
        title: "The Dying Sun (Main Theme)",
        duration: "4:23",
        description: "The kingdom awakens to a flickering sun",
        story: "As dawn breaks over the mysterious realm, Finn and Nova witness the great light beginning to falter. Ancient energies pulse weakly through crystalline conduits, casting dancing shadows that tell of forgotten power and impending darkness.",
        lyrics: "Golden rays grow dim\nAcross the crystal sky\nWhispers in the wind\nOf power drawing nigh\n\nThe light we've always known\nBegins to fade away\nTwo hearts must find their way\nTo bring back the day",
        act: 1
    },
    {
        id: 2,
        title: "Finn's Dawn",
        duration: "3:15",
        description: "A young Sun Folk hero emerges",
        story: "Young Finn awakens to his destiny as a child of the Sun Folk. His powers manifest like the first rays of dawn, warm and hopeful, yet untrained and wild.",
        lyrics: "Child of morning light\nBorn of ancient flame\nYour time has come\nTo play the hero's game\n\nRise up, young warrior\nLet your power shine\nThe realm needs you now\nIn this darkest time",
        act: 1
    },
    {
        id: 3,
        title: "Nova's Depths",
        duration: "3:42",
        description: "The Deep Folk's mysterious power",
        story: "From the depths emerges Nova, her abilities flowing like underground rivers. The Deep Folk's ancient wisdom courses through her, mysterious and profound.",
        lyrics: "From caverns deep below\nWhere ancient secrets hide\nA power starts to flow\nLike the turning tide\n\nChild of depths unknown\nYour strength runs deep and true\nThe darkness calls you home\nBut light depends on you",
        act: 1
    },
    {
        id: 4,
        title: "When Sparks Fly",
        duration: "4:08",
        description: "Two enemies create unexpected magic",
        story: "The moment Finn and Nova's opposing energies touch, sparks of unprecedented power illuminate the darkening realm. Ancient barriers between their peoples begin to crack.",
        lyrics: "Fire meets the tide\nWhen our powers align\nSparks light up the sky\nYour energy meets mine\n\nWhat they said could never be\nNow burns bright for all to see\nTogether we can find the way\nTo save this fading day",
        act: 1
    },
    {
        id: 5,
        title: "Seraphina's Waltz",
        duration: "3:56",
        description: "Beautiful deception hiding dark intentions",
        story: "Lady Seraphina arrives with grace and beauty, her waltz enchanting all who hear it. Yet beneath the melody lurk darker harmonies, hinting at her true nature.",
        lyrics: "Dance with me, children\nIn circles of gold\nI'll keep you safe\nFrom stories untold\n\nTrust in my beauty\nBelieve what you see\nBut darkness lies waiting\nIn sweet melody",
        act: 1
    },
    {
        id: 6,
        title: "Underground Odyssey",
        duration: "5:12",
        description: "Journey through forgotten tunnels",
        story: "Trapped below, Finn and Nova discover a vast network of ancient passages. Each tunnel tells a story, each chamber holds secrets of their realm's true history.",
        lyrics: "Down, down we go\nWhere shadows dance and play\nSecrets that we need to know\nLie hidden far away\n\nThrough tunnels carved in stone\nBy hands from long ago\nWe're not alone\nThere's so much more to know",
        act: 2
    },
    {
        id: 7,
        title: "Luna's Ballad",
        duration: "3:28",
        description: "The gunslinger's humorous courage",
        story: "Luna brings laughter and courage to the darkest moments. Her quick wit and steady aim prove that heroes come in all forms, even with a smile.",
        lyrics: "Got my weapons ready\nGot a joke to share\nWhen the world gets heavy\nI'll lighten the air\n\nDon't need to be perfect\nJust need to be true\nWith a laugh and some courage\nWe'll see this thing through",
        act: 2
    },
    {
        id: 8,
        title: "Museum of Memories",
        duration: "4:45",
        description: "Ancient truths revealed in silence",
        story: "In halls filled with artifacts of the past, the truth about their world slowly emerges. Each memory preserved here tells part of a larger, more complex story.",
        lyrics: "Walking through the halls of time\nWhere memories are stored\nEvery artifact tells us\nOf the world that came before\n\nSilent guardians of the past\nHold secrets we must know\nThe truth has waited here so long\nFor us to help it grow",
        act: 2
    },
    {
        id: 9,
        title: "The Magic Train",
        duration: "4:33",
        description: "Romance blooms on rails of light",
        story: "Aboard the ethereal transport, Finn and Nova's connection deepens. As the train carries them toward their destiny, their hearts find harmony amid the chaos.",
        lyrics: "Riding rails of starlight\nThrough the cosmic night\nTwo hearts beating as one\nEverything feels right\n\nThe train carries us forward\nTo whatever lies ahead\nTogether we can face it\nNo more words need be said",
        act: 2
    },
    {
        id: 10,
        title: "Battle for the Sun",
        duration: "6:18",
        description: "Heroes unite against golden tyranny",
        story: "The final confrontation begins as all our heroes unite against Seraphina's golden power. Every choice, every sacrifice, leads to this moment of truth.",
        lyrics: "Now we stand together\nFacing the final test\nAll our hopes and dreams\nPut to the ultimate quest\n\nGolden light burns bright\nBut we will not yield\nWith love as our weapon\nAnd truth as our shield",
        act: 3
    },
    {
        id: 11,
        title: "The Price of Light",
        duration: "4:52",
        description: "Sacrifice changes everything",
        story: "Victory demands its price. Finn and Nova must give up part of themselves to save everyone else. True heroism means accepting what you must lose.",
        lyrics: "The light demands a payment\nFor the power that we need\nWe give ourselves willing\nTo plant tomorrow's seed\n\nWhat we lose today\nMakes the future bright\nSome prices must be paid\nTo restore the light",
        act: 3
    },
    {
        id: 12,
        title: "Healing Dawn",
        duration: "5:26",
        description: "The sun rises on a changed world",
        story: "As the great light is restored, the realm begins to heal. Though changed by their journey, our heroes have given their people hope for a brighter tomorrow.",
        lyrics: "See the dawn breaking\nOver our healing land\nThough we are changed now\nWe've made our final stand\n\nThe light returns to us\nWarm and strong and true\nA new day is beginning\nFor me and you",
        act: 3
    },
    {
        id: 13,
        title: "Stars Beyond (Epilogue)",
        duration: "3:14",
        description: "New lights appear in endless skies",
        story: "As our story ends, new mysteries begin to unfold. Strange lights appear in the sky, hinting at greater adventures yet to come.",
        lyrics: "Look beyond the horizon\nSee the lights appear\nNew adventures calling\nTo those who dare to hear\n\nOur story may be ending\nBut the journey's just begun\nIn the stars beyond\nAnother tale will run",
        act: 3
    }
];

// Audio player state
let currentTrackIndex = 0;
let isPlaying = false;
let audioPlayer = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializePlayer();
    renderTracklist();
    setupEventListeners();
    setupSmoothScroll();
});

function initializePlayer() {
    audioPlayer = document.getElementById('audioPlayer');
    
    // Set up audio event listeners
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', updateDuration);
    audioPlayer.addEventListener('ended', playNextTrack);
}

function renderTracklist() {
    const trackList = document.getElementById('trackList');
    
    tracks.forEach((track, index) => {
        const trackElement = document.createElement('div');
        trackElement.className = 'track-item';
        trackElement.dataset.index = index;
        
        trackElement.innerHTML = `
            <span class="track-number">${track.id}</span>
            <span class="track-name">${track.title}</span>
            <span class="track-duration">${track.duration}</span>
        `;
        
        trackElement.addEventListener('click', () => showTrackDetails(index));
        trackList.appendChild(trackElement);
    });
}

function showTrackDetails(index) {
    const track = tracks[index];
    
    // Update modal content
    document.getElementById('detailsTitle').textContent = track.title;
    document.getElementById('trackStory').textContent = track.story || 'Story coming soon...';
    document.getElementById('trackLyrics').textContent = track.lyrics || 'Lyrics coming soon...';
    
    // Show modal
    document.getElementById('trackDetails').style.display = 'flex';
    
    // Update active track in list
    document.querySelectorAll('.track-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-index="${index}"]`).classList.add('active');
}

async function loadTrackAudio(track) {
    // This is where you would fetch the presigned URL from your Netlify function
    // For demonstration, we'll show the loading state
    
    try {
        // Simulate fetching presigned URL
        const response = await fetch(`/.netlify/functions/get-track-url?trackId=${track.id}`);
        if (response.ok) {
            const data = await response.json();
            audioPlayer.src = data.url;
            
            if (isPlaying) {
                audioPlayer.play();
            }
        }
    } catch (error) {
        console.log('Track loading simulated - no backend configured yet');
        // For demo purposes, we'll just update the UI
        updatePlayButton(false);
    }
}

function setupEventListeners() {
    // Play button in hero
    document.getElementById('playButton').addEventListener('click', () => {
        showTrackDetails(0);
    });
    
    // Modal controls
    document.getElementById('closeDetails').addEventListener('click', () => {
        document.getElementById('trackDetails').style.display = 'none';
    });
    
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tabName = e.target.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // Close modal on outside click
    document.getElementById('trackDetails').addEventListener('click', (e) => {
        if (e.target.id === 'trackDetails') {
            document.getElementById('trackDetails').style.display = 'none';
        }
    });
    
    // Download button
    document.getElementById('downloadAlbum').addEventListener('click', initiateDownload);
    
    // Remove stream button functionality since it's removed
    
    // Modal
    const modal = document.getElementById('downloadModal');
    const closeModal = document.querySelector('.close');
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function togglePlay() {
    if (audioPlayer.src) {
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
        isPlaying = !isPlaying;
        updatePlayButton(isPlaying);
    } else {
        // If no track is loaded, load the first one
        selectTrack(0);
    }
}

function updatePlayButton(playing) {
    const playPauseBtn = document.getElementById('playPause');
    playPauseBtn.textContent = playing ? '⏸' : '▶';
}

function playPreviousTrack() {
    if (currentTrackIndex > 0) {
        selectTrack(currentTrackIndex - 1);
        if (isPlaying) audioPlayer.play();
    }
}

function playNextTrack() {
    if (currentTrackIndex < tracks.length - 1) {
        selectTrack(currentTrackIndex + 1);
        if (isPlaying) audioPlayer.play();
    }
}

function updateProgress() {
    if (audioPlayer.duration) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('currentTime').textContent = formatTime(audioPlayer.currentTime);
    }
}

function updateDuration() {
    document.getElementById('duration').textContent = formatTime(audioPlayer.duration);
}

function seekTo(e) {
    if (audioPlayer.duration) {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audioPlayer.currentTime = percent * audioPlayer.duration;
    }
}

function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    document.getElementById(`${tabName}Tab`).classList.add('active');
}

async function initiateDownload() {
    const modal = document.getElementById('downloadModal');
    const progressBar = document.getElementById('downloadProgress');
    const status = document.getElementById('downloadStatus');
    
    modal.style.display = 'block';
    status.textContent = 'Requesting download link...';
    
    try {
        // Fetch presigned URL from Netlify function
        const response = await fetch('/.netlify/functions/download-album', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            status.textContent = 'Starting download...';
            
            // Trigger actual download
            const link = document.createElement('a');
            link.href = data.downloadUrl;
            link.download = data.fileName || 'SPARK_Soundtrack_Complete.zip';
            link.click();
            
            // Show progress simulation
            simulateDownloadProgress(progressBar, status);
        } else {
            const errorText = await response.text();
            console.error('Download error:', errorText);
            status.textContent = 'Download error: ' + (response.status === 404 ? 'File not found on server' : 'Please try again later');
        }
    } catch (error) {
        console.error('Download error:', error);
        status.textContent = 'Please check your connection and try again.';
        
        // For demo purposes
        simulateDownloadProgress(progressBar, status);
    }
}

function simulateDownloadProgress(progressBar, status) {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            status.textContent = 'Download complete! Check your downloads folder.';
            setTimeout(() => {
                document.getElementById('downloadModal').style.display = 'none';
                progressBar.style.width = '0%';
            }, 3000);
        }
        progressBar.style.width = `${progress}%`;
        if (progress < 100) {
            status.textContent = `Downloading... ${Math.floor(progress)}%`;
        }
    }, 500);
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add some visual effects
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.background-animation');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});