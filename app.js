// Track data for the SPARK soundtrack
const tracks = [
    {
        id: 1,
        title: "The Dying Sun (Main Theme)",
        duration: "4:23",
        description: "The kingdom awakens to a flickering sun",
        act: 1
    },
    {
        id: 2,
        title: "Finn's Dawn",
        duration: "3:15",
        description: "A young Sun Folk hero emerges",
        act: 1
    },
    {
        id: 3,
        title: "Nova's Depths",
        duration: "3:42",
        description: "The Deep Folk's mysterious power",
        act: 1
    },
    {
        id: 4,
        title: "When Sparks Fly",
        duration: "4:08",
        description: "Two enemies create unexpected magic",
        act: 1
    },
    {
        id: 5,
        title: "Seraphina's Waltz",
        duration: "3:56",
        description: "Beautiful deception hiding dark intentions",
        act: 1
    },
    {
        id: 6,
        title: "Underground Odyssey",
        duration: "5:12",
        description: "Journey through forgotten tunnels",
        act: 2
    },
    {
        id: 7,
        title: "Luna's Ballad",
        duration: "3:28",
        description: "The gunslinger's humorous courage",
        act: 2
    },
    {
        id: 8,
        title: "Museum of Memories",
        duration: "4:45",
        description: "Ancient truths revealed in silence",
        act: 2
    },
    {
        id: 9,
        title: "The Magic Train",
        duration: "4:33",
        description: "Romance blooms on rails of light",
        act: 2
    },
    {
        id: 10,
        title: "Battle for the Sun",
        duration: "6:18",
        description: "Heroes unite against golden tyranny",
        act: 3
    },
    {
        id: 11,
        title: "The Price of Light",
        duration: "4:52",
        description: "Sacrifice changes everything",
        act: 3
    },
    {
        id: 12,
        title: "Healing Dawn",
        duration: "5:26",
        description: "The sun rises on a changed world",
        act: 3
    },
    {
        id: 13,
        title: "Stars Beyond (Epilogue)",
        duration: "3:14",
        description: "New lights appear in endless skies",
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
        
        trackElement.addEventListener('click', () => selectTrack(index));
        trackList.appendChild(trackElement);
    });
}

function selectTrack(index) {
    currentTrackIndex = index;
    const track = tracks[index];
    
    // Update UI
    document.getElementById('trackTitle').textContent = track.title;
    document.getElementById('trackDescription').textContent = track.description;
    
    // Update active track in list
    document.querySelectorAll('.track-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-index="${index}"]`).classList.add('active');
    
    // In a real implementation, this would load the actual audio file
    // For now, we'll simulate it
    loadTrackAudio(track);
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
        selectTrack(0);
        togglePlay();
    });
    
    // Player controls
    document.getElementById('playPause').addEventListener('click', togglePlay);
    document.getElementById('prevTrack').addEventListener('click', playPreviousTrack);
    document.getElementById('nextTrack').addEventListener('click', playNextTrack);
    
    // Progress bar
    const progressBar = document.querySelector('.progress-bar');
    progressBar.addEventListener('click', seekTo);
    
    // Download button
    document.getElementById('downloadAlbum').addEventListener('click', initiateDownload);
    
    // Stream button
    document.getElementById('streamButton').addEventListener('click', () => {
        document.getElementById('soundtrack').scrollIntoView({ behavior: 'smooth' });
        selectTrack(0);
        togglePlay();
    });
    
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

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
            
            // Simulate download progress (in real app, this would track actual download)
            simulateDownloadProgress(progressBar, status);
            
            // Trigger actual download
            const link = document.createElement('a');
            link.href = data.downloadUrl;
            link.download = 'SPARK_Soundtrack_Complete.zip';
            link.click();
        } else {
            status.textContent = 'Download temporarily unavailable. Please try again later.';
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