// You can add your JavaScript code here
console.log('Hello, world!');

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu fixed top-20 left-0 w-full bg-white shadow-lg md:hidden';
    
    // Create mobile menu content
    mobileMenu.innerHTML = `
        <div class="py-4 px-6 space-y-4">
            <a href="#" class="block text-gray-700 hover:text-primary-green">Home</a>
            <a href="stem.html" class="block text-gray-700 hover:text-primary-green">STEM Programme</a>
            <a href="#" class="block text-gray-700 hover:text-primary-green">News</a>
            <a href="#" class="block text-gray-700 hover:text-primary-green">Downloads</a>
            <a href="#" class="block text-gray-700 hover:text-primary-green">About</a>
            <a href="#" class="block text-gray-700 hover:text-primary-green">Media</a>
            <a href="#" class="block bg-primary-green text-white px-6 py-2 rounded-full text-center hover:opacity-90">Contact Us</a>
        </div>
    `;
    
    document.body.appendChild(mobileMenu);
    
    let isMenuOpen = false;
    
    mobileMenuButton.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (isMenuOpen && !mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            isMenuOpen = false;
            mobileMenu.classList.remove('active');
        }
    });

    // News Slider functionality
    const newsSlider = {
        currentSlide: 0,
        slides: document.querySelectorAll('.news-card'),
        dots: document.querySelectorAll('.slider-dot'),
        prevButton: document.querySelector('.slider-prev'),
        nextButton: document.querySelector('.slider-next'),
        slideCount: document.querySelectorAll('.news-card').length,

        init() {
            if (!this.slides.length) return;

            // Initialize first slide
            this.showSlide(0);

            // Add event listeners
            this.prevButton?.addEventListener('click', () => this.prevSlide());
            this.nextButton?.addEventListener('click', () => this.nextSlide());
            
            // Add dot click listeners
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => this.showSlide(index));
            });

            // Optional: Auto slide every 5 seconds
            setInterval(() => this.nextSlide(), 5000);
        },

        showSlide(index) {
            // Handle index bounds
            if (index >= this.slideCount) index = 0;
            if (index < 0) index = this.slideCount - 1;

            // Update current slide index
            this.currentSlide = index;

            // Update slides visibility
            this.slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.remove('hidden');
                    slide.classList.add('block');
                    // Add fade in animation
                    slide.classList.add('fade-in-up');
                } else {
                    slide.classList.add('hidden');
                    slide.classList.remove('block');
                    slide.classList.remove('fade-in-up');
                }
            });

            // Update dots
            this.dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.remove('opacity-50');
                    dot.classList.add('opacity-100');
                } else {
                    dot.classList.add('opacity-50');
                    dot.classList.remove('opacity-100');
                }
            });

            // Update slide position for mobile swipe
            const container = document.querySelector('.news-cards-container');
            if (container) {
                container.style.transform = `translateX(-${index * 100}%)`;
            }
        },

        nextSlide() {
            this.showSlide(this.currentSlide + 1);
        },

        prevSlide() {
            this.showSlide(this.currentSlide - 1);
        }
    };

    // Initialize slider
    newsSlider.init();

    // Add touch swipe functionality for mobile
    const sliderContainer = document.querySelector('.news-cards-container');
    if (sliderContainer) {
        let touchStartX = 0;
        let touchEndX = 0;

        sliderContainer.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        sliderContainer.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    newsSlider.nextSlide();
                } else {
                    newsSlider.prevSlide();
                }
            }
        }
    }

    animateOdometerAll();
    animateHeroText();
    setTimeout(animateHeroText, 100); // Ensure animation runs after initial overlay update
});

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Odometer-style count-up animation for Projected Impact section
function animateOdometerAll() {
    const counters = document.querySelectorAll('.countup');
    counters.forEach(counter => {
        const target = counter.getAttribute('data-target');
        if (!target) return;
        animateOdometer(counter, target);
    });
}

function animateOdometer(element, number, digitDelay = 500, rollSpeed = 40) {
    const digits = String(number).split('');
    element.innerHTML = '';
    // Create spans for each digit
    const digitSpans = digits.map(() => {
        const span = document.createElement('span');
        span.textContent = '0';
        span.style.display = 'inline-block';
        span.style.transition = 'transform 0.2s cubic-bezier(0.4,0,0.2,1)';
        element.appendChild(span);
        return span;
    });
    let currentDigit = 0;
    let intervals = [];
    // Start rolling all digits
    digitSpans.forEach((span, idx) => {
        intervals[idx] = setInterval(() => {
            let val = parseInt(span.textContent, 10);
            val = (val + 1) % 10;
            span.textContent = val;
        }, rollSpeed);
    });
    function stopNextDigit() {
        if (currentDigit < digits.length) {
            clearInterval(intervals[currentDigit]);
            digitSpans[currentDigit].textContent = digits[currentDigit];
            currentDigit++;
            setTimeout(stopNextDigit, digitDelay);
        }
    }
    setTimeout(stopNextDigit, digitDelay);
}

// GSAP animation for hero section text
function animateHeroText() {
    // Helper to split text into spans per word
    function splitTextToSpans(element) {
        if (!element) return;
        const words = element.textContent.split(' ');
        element.innerHTML = words.map(word => `<span class="gsap-word" style="display:inline-block; opacity:0;">${word}</span>`).join(' ');
    }

    const titleEl = document.getElementById('carousel-title');
    const descEl = document.getElementById('carousel-desc');
    splitTextToSpans(titleEl);
    splitTextToSpans(descEl);

    // Animate each word with stagger
    if (typeof gsap !== 'undefined') {
        gsap.to('#carousel-title .gsap-word', {
            y: [40, 0],
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.08
        });
        gsap.to('#carousel-desc .gsap-word', {
            y: [40, 0],
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            delay: 0.2,
            stagger: 0.06
        });
    }
}

// --- Ensure dynamic GSAP animation runs on every carousel text change and on click ---
(function() {
    // Patch updateOverlay to always call animateHeroText after text update
    if (typeof window.updateOverlay === 'function') {
        const originalUpdateOverlay = window.updateOverlay;
        window.updateOverlay = function(idx) {
            originalUpdateOverlay(idx);
            animateHeroText();
        };
    }
    // Add click listeners to re-animate on click
    document.addEventListener('DOMContentLoaded', function() {
        const titleEl = document.getElementById('carousel-title');
        const descEl = document.getElementById('carousel-desc');
        if (titleEl) titleEl.addEventListener('click', animateHeroText);
        if (descEl) descEl.addEventListener('click', animateHeroText);
    });
})(); 