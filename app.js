// Track data for the SPARK soundtrack - Based on actual MP3 files
const tracks = [
    { id: 1, title: "01 Kingdom Opening", duration: "4:15", description: "Welcome to the realm", story: "Just moments ago the 2 sister stars were still visible, but already the sun rises over a mysterious kingdom. The sun people set to work while in the Wildlands the animals awaken, just as in the distant jungle a terrible beast lies in wait for those who are foolish enough to approach it.", lyrics: "" },
    { id: 2, title: "02 Sun Hiccups", duration: "3:42", description: "The great light falters", story: "Something is wrong with the great sun that powers the realm. Its light flickers and dims.", lyrics: `[Verse 1]
Wake up early, climb the tower high
Check the crystals that catch the sky
"Morning, sparkles," that's what I say
"Time to start another day"

Polish the mirrors, oil the gears
Been learning this for three long years
The elders say I've got the touch
For keeping sunshine bright and such

[Pre-Chorus]
But wait... what's that?
The light just... stopped?

[Chorus]
The sun's got hiccups! Hiccup-cup-cups!
Flickering down then lighting up
Never seen our sunshine do this dance
Maybe it just needs a second chance
The sun's got hiccups! Don't give up!
We'll help you shine, light back up!
Everything's gonna be okay
Our sun will shine another day!

[Verse 2]
Wrench in hand, I check each part
Every circuit, I know by heart
"Come on, sunshine, what's the matter?"
Why do your warm beams scatter?

I want to fix what's broken here
I want to make the darkness clear
I want to be the one who knows
How to help our sunshine glow

[Pre-Chorus]
But wait... there's more
It's getting worse!

[Chorus]
The sun's got hiccups! Hiccup-cup-cups!
Flickering down then lighting up
Never seen our sunshine do this dance
This might be more than second chance
The sun's got hiccups! Don't give up!
We'll help you shine, light back up!
Everything's gonna be okay...
...Right?

[Bridge]
I learned to trust what's in my heart
When broken things all fall apart
Maybe what our sun needs most
Isn't tools or fixing posts
Maybe it needs to know we care
That someone's always gonna be there

[Final Chorus]
The sun's got hiccups! But that's okay!
We'll figure this out day by day
I may be young but I'm not scared
Our sunshine knows that I still care
The sun's got hiccups! We won't give up!
Love will help you light back up!
Everything's gonna be okay
Tomorrow brings another way!

[Outro]
"Stay strong, sunshine, I'm still here
But maybe... maybe I need help, I fear"` },
    { id: 3, title: "03 Underground Rider", duration: "4:08", description: "Journey into the depths", story: "Our heroes venture into underground passages, discovering hidden tunnels and ancient secrets.", lyrics: "Coming soon..." },
    { id: 4, title: "04 Sparks", duration: "3:56", description: "When powers create magic", story: "The moment when Finn and Nova's energies first connect, creating the sparks that give our story its name.", lyrics: "Coming soon..." },
    { id: 5, title: "05 Seraphina - The Angel Lady", duration: "4:23", description: "Beautiful deception", story: "Lady Seraphina appears with angelic beauty and grace, but beneath lies a darker purpose.", lyrics: "Coming soon..." },
    { id: 6, title: "06 The Glowing Words", duration: "3:15", description: "Ancient prophecies", story: "Mysterious text begins to glow with inner light, revealing prophecies and truths long hidden.", lyrics: "Coming soon..." },
    { id: 7, title: "07 Order Must Prevail", duration: "4:45", description: "The antagonist's philosophy", story: "Seraphina's true beliefs are revealed - her desire to impose perfect order on a chaotic world.", lyrics: "Coming soon..." },
    { id: 8, title: "08 Into the Wild Lands", duration: "4:33", description: "Beyond civilization", story: "Our heroes leave safety and venture into the untamed Wild Lands where danger awaits.", lyrics: "Coming soon..." },
    { id: 9, title: "09 Welcome to the Wild Lands", duration: "3:28", description: "The untamed frontier", story: "The Wild Lands reveal their nature - a place of freedom, danger, and unexpected allies.", lyrics: "Coming soon..." },
    { id: 10, title: "10 Learning Magic Together", duration: "4:12", description: "Mastering combined powers", story: "Through practice and trust, our heroes learn to combine their abilities, creating magic neither could achieve alone.", lyrics: "Coming soon..." },
    { id: 11, title: "11 Desert Mirage Madness", duration: "3:47", description: "Illusions and reality blur", story: "The desert plays tricks on mind and eye, challenging our heroes with mirages that may be more real than they appear.", lyrics: "Coming soon..." },
    { id: 12, title: "12 Through the desert", duration: "5:12", description: "The long journey", story: "An epic trek across vast desert expanses tests our heroes' endurance and resolve.", lyrics: "" },
    { id: 13, title: "13 Seven Sister Stars", duration: "4:18", description: "Celestial guidance", story: "The seven stars that have watched over the realm since ancient times provide guidance and hope.", lyrics: "" },
    { id: 14, title: "14 More Than Sparks", duration: "4:52", description: "Love grows stronger", story: "Finn and Nova realize their connection transcends their magical abilities - they've found something deeper.", lyrics: "Coming soon..." },
    { id: 15, title: "15 Museum of Wonders", duration: "4:45", description: "Ancient artifacts revealed", story: "In a hidden museum, artifacts from the realm's past reveal the true history and origins of the current crisis.", lyrics: "Coming soon..." },
    { id: 16, title: "16 Chrono Rex of Planet X", duration: "3:56", description: "Unexpected ally", story: "A mysterious figure from another planet arrives with knowledge that could change everything.", lyrics: "Coming soon..." },
    { id: 17, title: "17 Magic Train", duration: "4:33", description: "Journey on rails of energy", story: "An ethereal locomotive carries our heroes on rails of light toward their final destination.", lyrics: "Coming soon..." },
    { id: 18, title: "18 You cannot sneak upon", duration: "3:24", description: "Stealth fails", story: "Our heroes discover that some enemies cannot be surprised - ancient powers sense approaching danger.", lyrics: "Coming soon..." },
    { id: 19, title: "19 The Golden Angel's Secret", duration: "4:38", description: "Seraphina's true nature", story: "The final truth about Lady Seraphina emerges, revealing why she appears beautiful yet acts with cruelty.", lyrics: "Coming soon..." },
    { id: 20, title: "20 When Hope Feels Far", duration: "4:15", description: "The darkest hour", story: "At their lowest point, when defeat seems certain, our heroes must find strength to continue.", lyrics: "Coming soon..." },
    { id: 21, title: "21 Seraphina - All Together Now 1", duration: "5:18", description: "The final battle begins", story: "All forces converge as the ultimate confrontation between order and freedom finally begins.", lyrics: "Coming soon..." },
    { id: 22, title: "22 Sheriff - All Together Now 2", duration: "4:42", description: "Law and justice join", story: "Even the forces of law and order must choose sides in this battle that will determine the fate of all realms.", lyrics: "Coming soon..." },
    { id: 23, title: "23 I am what remains when duty outlives its makers", duration: "6:05", description: "The cost of purpose", story: "A haunting revelation about what happens when duty continues long after those who created it are gone.", lyrics: "Coming soon..." },
    { id: 24, title: "24 All toghether now 3", duration: "5:33", description: "Unity in the final hour", story: "All our heroes, allies, and even former enemies must unite for one last desperate attempt to save their world.", lyrics: "Coming soon..." },
    { id: 25, title: "25 Home in the Stars", duration: "5:26", description: "Victory brings transformation", story: "With the battle won, our heroes find that home might be something different than they originally imagined.", lyrics: "Coming soon..." },
    { id: 26, title: "26 Credits", duration: "3:48", description: "The story's end", story: "As our tale concludes, we reflect on the journey taken and the lessons learned about friendship and hope.", lyrics: "Coming soon..." },
    { id: 27, title: "27 Post Credit Scene", duration: "2:32", description: "Adventures yet to come", story: "Just when you think it's over, strange new lights appear, suggesting this ending might be another beginning.", lyrics: "Coming soon..." },
    { id: 28, title: "28 Bonus Level - Chrono Rex vs Seraphina", duration: "4:17", description: "Epic cosmic clash", story: "An epic bonus battle between the time-traveling Chrono Rex and the golden angel Seraphina.", lyrics: "Coming soon..." }
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