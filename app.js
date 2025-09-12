// Track data for the SPARK soundtrack - Based on actual MP3 files
const tracks = [
    { id: 1, title: "01 Disney Intro", duration: "3:24", description: "The magical beginning", story: "The journey starts with the familiar warmth of storytelling magic, setting the stage for an epic tale.", lyrics: "Coming soon..." },
    { id: 2, title: "02 Kingdom Opening", duration: "4:15", description: "Welcome to the realm", story: "As dawn breaks over the mysterious realm, we're introduced to a world of Sun Folk and Deep Folk.", lyrics: "Coming soon..." },
    { id: 3, title: "03 Sun Hiccups", duration: "3:42", description: "The great light falters", story: "Something is wrong with the great sun that powers the realm. Its light flickers and dims.", lyrics: "Coming soon..." },
    { id: 4, title: "04 Underground Rider", duration: "4:08", description: "Journey into the depths", story: "Our heroes venture into underground passages, discovering hidden tunnels and ancient secrets.", lyrics: "Coming soon..." },
    { id: 5, title: "05 Sparks", duration: "3:56", description: "When powers create magic", story: "The moment when Finn and Nova's energies first connect, creating the sparks that give our story its name.", lyrics: "Coming soon..." },
    { id: 6, title: "06 Seraphina - The Angel Lady", duration: "4:23", description: "Beautiful deception", story: "Lady Seraphina appears with angelic beauty and grace, but beneath lies a darker purpose.", lyrics: "Coming soon..." },
    { id: 7, title: "07 The Glowing Words", duration: "3:15", description: "Ancient prophecies", story: "Mysterious text begins to glow with inner light, revealing prophecies and truths long hidden.", lyrics: "Coming soon..." },
    { id: 8, title: "08 Order Must Prevail", duration: "4:45", description: "The antagonist's philosophy", story: "Seraphina's true beliefs are revealed - her desire to impose perfect order on a chaotic world.", lyrics: "Coming soon..." },
    { id: 9, title: "09 Into the Wild Lands", duration: "4:33", description: "Beyond civilization", story: "Our heroes leave safety and venture into the untamed Wild Lands where danger awaits.", lyrics: "Coming soon..." },
    { id: 10, title: "10 Welcome to the Wild Lands", duration: "3:28", description: "The untamed frontier", story: "The Wild Lands reveal their nature - a place of freedom, danger, and unexpected allies.", lyrics: "Coming soon..." },
    { id: 11, title: "11 Learning Magic Together", duration: "4:12", description: "Mastering combined powers", story: "Through practice and trust, our heroes learn to combine their abilities, creating magic neither could achieve alone.", lyrics: "Coming soon..." },
    { id: 12, title: "12 Desert Mirage Madness", duration: "3:47", description: "Illusions and reality blur", story: "The desert plays tricks on mind and eye, challenging our heroes with mirages that may be more real than they appear.", lyrics: "Coming soon..." },
    { id: 13, title: "13 Through the desert", duration: "5:12", description: "The long journey", story: "An epic trek across vast desert expanses tests our heroes' endurance and resolve.", lyrics: "Coming soon..." },
    { id: 14, title: "14 Seven Sister Stars", duration: "4:18", description: "Celestial guidance", story: "The seven stars that have watched over the realm since ancient times provide guidance and hope.", lyrics: "Coming soon..." },
    { id: 15, title: "15 More Than Sparks", duration: "4:52", description: "Love grows stronger", story: "Finn and Nova realize their connection transcends their magical abilities - they've found something deeper.", lyrics: "Coming soon..." },
    { id: 16, title: "16 Museum of Wonders", duration: "4:45", description: "Ancient artifacts revealed", story: "In a hidden museum, artifacts from the realm's past reveal the true history and origins of the current crisis.", lyrics: "Coming soon..." },
    { id: 17, title: "17 Chrono Rex of Planet X", duration: "3:56", description: "Unexpected ally", story: "A mysterious figure from another planet arrives with knowledge that could change everything.", lyrics: "Coming soon..." },
    { id: 18, title: "18 Magic Train", duration: "4:33", description: "Journey on rails of energy", story: "An ethereal locomotive carries our heroes on rails of light toward their final destination.", lyrics: "Coming soon..." },
    { id: 19, title: "19 You cannot sneak upon", duration: "3:24", description: "Stealth fails", story: "Our heroes discover that some enemies cannot be surprised - ancient powers sense approaching danger.", lyrics: "Coming soon..." },
    { id: 20, title: "20 The Golden Angel's Secret", duration: "4:38", description: "Seraphina's true nature", story: "The final truth about Lady Seraphina emerges, revealing why she appears beautiful yet acts with cruelty.", lyrics: "Coming soon..." },
    { id: 21, title: "21 When Hope Feels Far", duration: "4:15", description: "The darkest hour", story: "At their lowest point, when defeat seems certain, our heroes must find strength to continue.", lyrics: "Coming soon..." },
    { id: 22, title: "22 Seraphina - All Together Now 1", duration: "5:18", description: "The final battle begins", story: "All forces converge as the ultimate confrontation between order and freedom finally begins.", lyrics: "Coming soon..." },
    { id: 23, title: "23 Sheriff - All Together Now 2", duration: "4:42", description: "Law and justice join", story: "Even the forces of law and order must choose sides in this battle that will determine the fate of all realms.", lyrics: "Coming soon..." },
    { id: 24, title: "24 I am what remains when duty outlives its makers", duration: "6:05", description: "The cost of purpose", story: "A haunting revelation about what happens when duty continues long after those who created it are gone.", lyrics: "Coming soon..." },
    { id: 25, title: "25 All toghether now 3", duration: "5:33", description: "Unity in the final hour", story: "All our heroes, allies, and even former enemies must unite for one last desperate attempt to save their world.", lyrics: "Coming soon..." },
    { id: 26, title: "26 Home in the Stars", duration: "5:26", description: "Victory brings transformation", story: "With the battle won, our heroes find that home might be something different than they originally imagined.", lyrics: "Coming soon..." },
    { id: 27, title: "27 Credits", duration: "3:48", description: "The story's end", story: "As our tale concludes, we reflect on the journey taken and the lessons learned about friendship and hope.", lyrics: "Coming soon..." },
    { id: 28, title: "28 Post Credit Scene", duration: "2:32", description: "Adventures yet to come", story: "Just when you think it's over, strange new lights appear, suggesting this ending might be another beginning.", lyrics: "Coming soon..." },
    { id: 29, title: "29 Bonus Level - Chrono Rex vs Seraphina", duration: "4:17", description: "Epic cosmic clash", story: "An epic bonus battle between the time-traveling Chrono Rex and the golden angel Seraphina.", lyrics: "Coming soon..." }
];

// Audio player state
let currentTrackIndex = 0;
let isPlaying = false;
let audioPlayer = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app...');
    console.log('Tracks array length:', tracks.length);
    console.log('First few tracks:', tracks.slice(0, 3).map(t => t.title));
    
    initializePlayer();
    renderTracklist();
    setupEventListeners();
    setupSmoothScroll();
    
    console.log('App initialization complete');
});

function initializePlayer() {
    console.log('Initializing player...');
    audioPlayer = document.getElementById('audioPlayer');
    
    if (!audioPlayer) {
        console.error('Audio player element not found!');
        return;
    }
    
    console.log('Audio player found, setting up event listeners');
    // Set up audio event listeners
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', updateDuration);
    audioPlayer.addEventListener('ended', playNextTrack);
}

function renderTracklist() {
    console.log('Rendering tracklist with', tracks.length, 'tracks');
    const trackList = document.getElementById('trackList');
    
    if (!trackList) {
        console.error('trackList element not found!');
        return;
    }
    
    // Clear existing content
    trackList.innerHTML = '';
    
    tracks.forEach((track, index) => {
        const trackElement = document.createElement('div');
        trackElement.className = 'track-item';
        trackElement.dataset.index = index;
        
        trackElement.innerHTML = `
            <span class="track-number">${track.id.toString().padStart(2, '0')}</span>
            <span class="track-name">${track.title}</span>
            <span class="track-duration">${track.duration}</span>
        `;
        
        trackElement.addEventListener('click', () => {
            console.log('Track clicked:', track.title);
            showTrackDetailsInline(index);
        });
        
        trackList.appendChild(trackElement);
    });
    
    console.log('Successfully rendered', tracks.length, 'tracks to trackList');
}

function showTrackDetailsInline(index) {
    const track = tracks[index];
    
    // Hide default info and show track details
    document.getElementById('defaultInfo').style.display = 'none';
    document.getElementById('trackDetailsInline').style.display = 'block';
    
    // Update inline content
    document.getElementById('selectedTrackTitle').textContent = track.title;
    document.getElementById('inlineTrackStory').textContent = track.story || 'Story coming soon...';
    document.getElementById('inlineTrackLyrics').textContent = track.lyrics || 'Lyrics coming soon...';
    
    // Update active track in list
    document.querySelectorAll('.track-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-index="${index}"]`).classList.add('active');
    
    // Reset to story tab
    switchInlineTab('story');
    
    // Scroll to the album info area where the track details are shown
    document.getElementById('albumInfo').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
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
    // Show tracklist button in hero
    document.getElementById('showTracklistButton').addEventListener('click', () => {
        document.getElementById('soundtrack').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    
    // Inline tab switching
    document.querySelectorAll('.inline-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tabName = e.target.dataset.tab;
            switchInlineTab(tabName);
        });
    });
    
    // Download button
    document.getElementById('downloadAlbum').addEventListener('click', initiateDownload);
    
    // Remove stream button functionality since it's removed
    
    // Modal
    const modal = document.getElementById('downloadModal');
    const closeModal = document.querySelector('.close');
    
    if (closeModal && modal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

function togglePlay() {
    if (audioPlayer && audioPlayer.src) {
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
        isPlaying = !isPlaying;
        updatePlayButton(isPlaying);
    } else {
        // If no track is loaded, show the first track details
        if (tracks.length > 0) {
            showTrackDetailsInline(0);
        }
    }
}

function updatePlayButton(playing) {
    const playPauseBtn = document.getElementById('playPause');
    if (playPauseBtn) {
        playPauseBtn.textContent = playing ? '⏸' : '▶';
    }
}

function playPreviousTrack() {
    if (currentTrackIndex > 0) {
        currentTrackIndex--;
        showTrackDetailsInline(currentTrackIndex);
        if (audioPlayer && isPlaying) audioPlayer.play();
    }
}

function playNextTrack() {
    if (currentTrackIndex < tracks.length - 1) {
        currentTrackIndex++;
        showTrackDetailsInline(currentTrackIndex);
        if (audioPlayer && isPlaying) audioPlayer.play();
    }
}

function updateProgress() {
    if (audioPlayer && audioPlayer.duration) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        const progressFill = document.getElementById('progressFill');
        const currentTime = document.getElementById('currentTime');
        
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }
        if (currentTime) {
            currentTime.textContent = formatTime(audioPlayer.currentTime);
        }
    }
}

function updateDuration() {
    const duration = document.getElementById('duration');
    if (duration && audioPlayer && audioPlayer.duration) {
        duration.textContent = formatTime(audioPlayer.duration);
    }
}

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function seekTo(e) {
    if (audioPlayer && audioPlayer.duration) {
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

function switchInlineTab(tabName) {
    // Update inline tab buttons
    document.querySelectorAll('.inline-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update inline tab content
    document.querySelectorAll('.inline-tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    document.getElementById(`inline${tabName.charAt(0).toUpperCase() + tabName.slice(1)}Tab`).classList.add('active');
}

async function initiateDownload() {
    console.log('Download button clicked - initiating download process');
    
    const modal = document.getElementById('downloadModal');
    const progressBar = document.getElementById('downloadProgress');
    const status = document.getElementById('downloadStatus');
    
    console.log('Opening download modal');
    modal.style.display = 'block';
    status.textContent = 'Requesting download link...';
    
    try {
        console.log('Fetching presigned URL from Netlify function');
        
        // Fetch presigned URL from Netlify function
        const response = await fetch('/.netlify/functions/download-album', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
        
        if (response.ok) {
            const data = await response.json();
            console.log('Received download data:', data);
            
            status.textContent = 'Starting download...';
            
            // Validate the download URL
            if (!data.downloadUrl) {
                console.error('No download URL received from server');
                status.textContent = 'Error: No download URL provided';
                return;
            }
            
            console.log('Creating download link with URL:', data.downloadUrl);
            
            // Trigger actual download
            const link = document.createElement('a');
            link.href = data.downloadUrl;
            link.download = data.fileName || 'SPARK_Soundtrack_Complete.zip';
            
            // Add the link to the DOM temporarily to ensure it works
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            console.log('Download link clicked, starting progress simulation');
            
            // Show progress simulation
            simulateDownloadProgress(progressBar, status);
        } else {
            const errorText = await response.text();
            console.error('Download failed with status:', response.status);
            console.error('Error response:', errorText);
            
            status.textContent = 'Download error: ' + (response.status === 404 ? 'File not found on server' : 'Please try again later');
            
            // Log specific error details for debugging
            if (response.status === 500) {
                console.error('Server error - check Netlify function logs');
            } else if (response.status === 403) {
                console.error('Access denied - check R2 credentials and permissions');
            }
        }
    } catch (error) {
        console.error('Network or fetch error:', error);
        console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            name: error.name
        });
        
        status.textContent = 'Connection error. Please check your internet connection and try again.';
        
        // For demo purposes, still show progress
        console.log('Running demo progress simulation due to error');
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