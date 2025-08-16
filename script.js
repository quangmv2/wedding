// Wedding Invitation JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
        }, 500);
    }, 1000);

    // Initialize all functions
    initCountdown();
    initSmoothScrolling();
    initParallaxEffect();
    initLazyLoading();
    initScrollAnimations();
    initBackgroundMusic();
});

// Countdown Timer
function initCountdown() {
    const weddingDate = new Date('2025-09-25T11:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Smooth Scrolling for Navigation
function initSmoothScrolling() {
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

// Parallax Effect
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxBg = document.querySelector('.parallax-bg');
        if (parallaxBg) {
            parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Lazy Loading for Images
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('.lazy-load');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
        img.classList.add('loaded'); // Immediate load for better UX
    });
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-slide-up, .event-card, .gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}



// Background Music Control
function initBackgroundMusic() {
    const music = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = document.getElementById('musicIcon');
    let isPlaying = false;
    
    // Set volume
    music.volume = 0.3;
    
    // Function to play music
    function playMusic() {
        const playPromise = music.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                isPlaying = true;
                console.log('Music started playing');
                updateMusicIcon();
            }).catch((error) => {
                console.log('Music play failed:', error);
                isPlaying = false;
                updateMusicIcon();
            });
        }
    }
    
    // Function to pause music
    function pauseMusic() {
        music.pause();
        isPlaying = false;
        updateMusicIcon();
    }
    
    // Update icon based on play state
    function updateMusicIcon() {
        if (isPlaying) {
            musicIcon.innerHTML = '🎵';
            musicToggle.classList.add('animate-pulse');
            musicToggle.title = 'Tắt nhạc';
        } else {
            musicIcon.innerHTML = '🔇';
            musicToggle.classList.remove('animate-pulse');
            musicToggle.title = 'Bật nhạc';
        }
    }
    
    // Auto-play when music is loaded and user has interacted
    music.addEventListener('canplaythrough', () => {
        console.log('Music can play through - attempting autoplay');
        // Try to play automatically when loaded
        setTimeout(() => {
            if (!isPlaying) {
                playMusic();
            }
        }, 500);
    });
    
    // Enable music on first user interaction
    function enableMusicOnInteraction() {
        if (!isPlaying) {
            playMusic();
        }
        // Remove event listeners after first interaction
        document.removeEventListener('click', enableMusicOnInteraction);
        document.removeEventListener('keydown', enableMusicOnInteraction);
        document.removeEventListener('touchstart', enableMusicOnInteraction);
    }
    
    // Add event listeners for user interaction
    document.addEventListener('click', enableMusicOnInteraction, { once: true });
    document.addEventListener('keydown', enableMusicOnInteraction, { once: true });
    document.addEventListener('touchstart', enableMusicOnInteraction, { once: true });
    
    // Toggle music on button click
    musicToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
    
    // Handle music end - restart for loop
    music.addEventListener('ended', () => {
        if (isPlaying) {
            music.currentTime = 0;
            playMusic();
        }
    });
    
    // Handle loading events
    music.addEventListener('loadstart', () => {
        console.log('Music loading started');
    });
    
    music.addEventListener('loadeddata', () => {
        console.log('Music data loaded');
    });
    
    music.addEventListener('error', (e) => {
        console.error('Music loading error:', e);
        updateMusicIcon();
    });
    
    // Initial icon update
    updateMusicIcon();
    
    // Try to load and play after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (music.readyState >= 3) { // HAVE_FUTURE_DATA
                if (!isPlaying) {
                    playMusic();
                }
            }
        }, 1000);
    });
}

// Image Modal Functions
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Add fade in animation
    requestAnimationFrame(() => {
        modal.style.opacity = '1';
    });
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 300);
}

// Close modal when clicking outside image
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Floating Hearts Animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = ['💕', '💖', '💗', '💘'][Math.floor(Math.random() * 4)];
    heart.className = 'fixed text-2xl pointer-events-none z-10';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.bottom = '-50px';
    heart.style.animation = 'float-up 3s linear forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Add floating hearts periodically
setInterval(createFloatingHeart, 3000);

// Add CSS for floating hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes float-up {
        from {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce scroll events for better performance
window.addEventListener('scroll', debounce(() => {
    // Scroll-based animations here
}, 10));

// Preload critical images
function preloadImages() {
    const imageUrls = [
        './images/_Z5A3461 (1).jpg',
        './images/_Z5A4138.jpg',
        './images/_Z5A4184 (1).jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Call preload on page load
window.addEventListener('load', preloadImages);

// Add touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        // Add swipe functionality if needed
        console.log(swipeDistance > 0 ? 'Swipe right' : 'Swipe left');
    }
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Service Worker for GitHub Pages
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
