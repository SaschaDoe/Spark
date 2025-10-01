// Main application logic for the SPARK soundtrack player
// Track data is loaded from js/tracks.js

// Audio player state
let currentTrackIndex = 0;
let isPlaying = false;
let audioPlayer = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app...');
    console.log('Tracks array length:', tracks.length);
    console.log('First few tracks:', tracks.slice(0, 3).map(t => t.title));

    // Check cover image loading
    checkCoverImageLoading();

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
    const defaultInfo = document.getElementById('defaultInfo');
    const trackDetailsInline = document.getElementById('trackDetailsInline');
    if (defaultInfo) defaultInfo.style.display = 'none';
    if (trackDetailsInline) trackDetailsInline.style.display = 'block';

    // Update inline content
    const selectedTitle = document.getElementById('selectedTrackTitle');
    const inlineStory = document.getElementById('inlineTrackStory');
    const inlineLyrics = document.getElementById('inlineTrackLyrics');
    const lyricsTab = document.getElementById('inlineLyricsTab');
    const storyTab = document.getElementById('inlineStoryTab');
    const contentWrapper = document.querySelector('.inline-content-wrapper');
    const tabsContainer = document.querySelector('.inline-tabs');

    if (selectedTitle) selectedTitle.textContent = track.title;
    if (inlineStory) inlineStory.textContent = track.story || 'Story coming soon...';

    // Check if lyrics exist (empty string means instrumental, no lyrics at all)
    const hasLyrics = track.lyrics && track.lyrics.trim() !== '';

    // Only set lyrics text if there are lyrics
    if (inlineLyrics) {
        if (hasLyrics) {
            inlineLyrics.textContent = track.lyrics;
        } else {
            inlineLyrics.textContent = ''; // Clear it for instrumental tracks
        }
    }

    // Show/hide lyrics section based on availability
    if (lyricsTab) {
        if (hasLyrics) {
            lyricsTab.style.display = '';
            lyricsTab.classList.remove('hidden');
        } else {
            lyricsTab.classList.add('hidden');
        }
    }

    if (storyTab) {
        storyTab.classList.remove('hidden');
    }

    // Hide tabs if no lyrics (only story to show)
    if (tabsContainer) {
        if (hasLyrics) {
            tabsContainer.classList.remove('hidden');
        } else {
            tabsContainer.classList.add('hidden');
        }
    }

    // On mobile with tabs: make sure story is shown if no lyrics
    if (!hasLyrics && storyTab) {
        storyTab.classList.add('active');
    } else if (hasLyrics && lyricsTab) {
        // Reset to lyrics tab when lyrics exist
        lyricsTab.classList.add('active');
        if (storyTab) storyTab.classList.remove('active');
        // Update tab buttons
        document.querySelectorAll('.inline-tab-btn').forEach(btn => {
            if (btn.dataset.tab === 'lyrics') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Adjust layout: if no lyrics, make story full width
    if (contentWrapper) {
        if (hasLyrics) {
            contentWrapper.style.gridTemplateColumns = '2fr 1fr';
        } else {
            contentWrapper.style.gridTemplateColumns = '1fr';
        }
    }

    // Update active track in list
    document.querySelectorAll('.track-item').forEach(item => {
        item.classList.remove('active');
    });
    const activeTrack = document.querySelector(`[data-index="${index}"]`);
    if (activeTrack) activeTrack.classList.add('active');

    // Scroll to the album info area where the track details are shown
    const albumInfo = document.getElementById('albumInfo');
    if (albumInfo) {
        albumInfo.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
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
    try {
        console.log('Setting up event listeners...');

        // Show tracklist button in hero
        const tracklistButton = document.getElementById('showTracklistButton');
        if (tracklistButton) {
            tracklistButton.addEventListener('click', () => {
                const soundtrack = document.getElementById('soundtrack');
                if (soundtrack) {
                    soundtrack.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
            console.log('Tracklist button listener added');
        } else {
            console.warn('showTracklistButton not found');
        }

        // Inline tab switching for mobile
        const inlineTabButtons = document.querySelectorAll('.inline-tab-btn');
        if (inlineTabButtons && inlineTabButtons.length > 0) {
            inlineTabButtons.forEach(btn => {
                if (btn) {
                    btn.addEventListener('click', (e) => {
                        const tabName = e.target.dataset.tab;
                        if (tabName) {
                            switchInlineTab(tabName);
                        }
                    });
                }
            });
            console.log(`Added listeners to ${inlineTabButtons.length} inline tab buttons`);
        }

        // Download button
        const downloadButton = document.getElementById('downloadAlbum');
        if (downloadButton) {
            downloadButton.addEventListener('click', initiateDownload);
            console.log('Download button listener added');
        } else {
            console.warn('downloadAlbum button not found');
        }


        console.log('Event listeners setup complete');
    } catch (error) {
        console.error('Error in setupEventListeners:', error);
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
    const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    const activeTab = document.getElementById(`${tabName}Tab`);
    if (activeTab) activeTab.classList.add('active');
}

function switchInlineTab(tabName) {
    // Update inline tab buttons
    document.querySelectorAll('.inline-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`.inline-tab-btn[data-tab="${tabName}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // Update inline tab content
    document.querySelectorAll('.inline-tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    const activeTab = document.getElementById(`inline${tabName.charAt(0).toUpperCase() + tabName.slice(1)}Tab`);
    if (activeTab) activeTab.classList.add('active');
}

async function initiateDownload() {
    console.log('Download button clicked - initiating download process');

    const downloadButton = document.getElementById('downloadAlbum');
    const originalText = downloadButton ? downloadButton.textContent : 'Download Album (200MB)';

    if (downloadButton) {
        downloadButton.textContent = 'Preparing download...';
        downloadButton.disabled = true;
    }

    try {
        console.log('Fetching presigned URL from Netlify function');

        const response = await fetch('/.netlify/functions/download-album', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('Response status:', response.status);

        if (response.ok) {
            const data = await response.json();
            console.log('Received download data:', data);

            if (!data.downloadUrl) {
                throw new Error('No download URL received from server');
            }

            // Trigger download
            const link = document.createElement('a');
            link.href = data.downloadUrl;
            link.download = data.fileName || 'Spark_Soundtrack.zip';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Show success message
            if (downloadButton) {
                downloadButton.textContent = 'Download started!';
                setTimeout(() => {
                    downloadButton.textContent = originalText;
                    downloadButton.disabled = false;
                }, 3000);
            }
        } else {
            const errorText = await response.text();
            console.error('Download failed with status:', response.status);
            console.error('Error response:', errorText);

            throw new Error(response.status === 404 ? 'File not found on server' : 'Server error');
        }
    } catch (error) {
        console.error('Download error:', error);

        // Show error message
        if (downloadButton) {
            downloadButton.textContent = 'Download failed - try again';
            setTimeout(() => {
                downloadButton.textContent = originalText;
                downloadButton.disabled = false;
            }, 3000);
        }
    }
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

// Function to check cover image loading
function checkCoverImageLoading() {
    console.log('=== Checking cover image loading ===');

    // Now looking for img element instead of div
    const coverImg = document.querySelector('.cover-image');
    if (!coverImg) {
        console.error('Cover image element not found!');
        return;
    }

    console.log('Cover image element found:', coverImg);
    console.log('Current src:', coverImg.src);

    // If image is already loaded
    if (coverImg.complete) {
        if (coverImg.naturalWidth === 0) {
            console.error('❌ Cover image failed to load from:', coverImg.src);
            tryAlternativeImages(coverImg);
        } else {
            console.log('✅ Cover image already loaded successfully!');
            console.log('Image dimensions:', coverImg.naturalWidth + 'x' + coverImg.naturalHeight);
        }
    } else {
        // Add load and error handlers
        coverImg.onload = function() {
            console.log('✅ Cover image loaded successfully!');
            console.log('Image dimensions:', this.naturalWidth + 'x' + this.naturalHeight);
            console.log('Full image URL:', this.src);
        };

        coverImg.onerror = function() {
            console.error('❌ Cover image failed to load!');
            console.error('Failed URL:', this.src);
            tryAlternativeImages(this);
        };
    }

    // Also check the regular album art img tag
    const albumArt = document.getElementById('albumArt');
    if (albumArt) {
        console.log('Album art img element found, src:', albumArt.src);
        if (albumArt.complete && albumArt.naturalWidth === 0) {
            console.error('Album art failed to load:', albumArt.src);
            albumArt.src = 'images/red-spark.png'; // Try relative path
        }
    }
}

function tryAlternativeImages(imgElement) {
    console.log('Trying alternative image paths...');

    const alternativePaths = [
        'images/red-spark.png',
        './images/red-spark.png',
        '/images/red-spark.png',
        'images/blue-spark.png',
        '/images/blue-spark.png',
        // Try with different URL formats
        window.location.origin + '/images/red-spark.png',
        // Base64 fallback - a small red square as last resort
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg=='
    ];

    let pathIndex = 0;

    function tryNextPath() {
        if (pathIndex >= alternativePaths.length) {
            console.error('All alternative paths failed. Using placeholder.');
            imgElement.style.backgroundColor = '#ff0000';
            imgElement.alt = 'SPARK - Image failed to load';
            return;
        }

        const path = alternativePaths[pathIndex];
        console.log(`Trying path ${pathIndex + 1}/${alternativePaths.length}: ${path}`);

        const testImg = new Image();
        testImg.onload = function() {
            console.log('✅ Alternative image found at:', path);
            imgElement.src = path;
        };
        testImg.onerror = function() {
            console.log('❌ Alternative path failed:', path);
            pathIndex++;
            tryNextPath();
        };
        testImg.src = path;
    }

    tryNextPath();
}
