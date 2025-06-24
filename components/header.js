function loadHeader(pathToRoot = './') {
    const header = `
    <header>
        <nav class="fixed w-full z-50 top-2 flex justify-center pointer-events-none">
            <div class="rounded-full flex items-center px-8 py-2 max-w-5xl mx-auto shadow-2xl pointer-events-auto" style="backdrop-filter: blur(80px); -webkit-backdrop-filter: blur(80px); box-shadow: 0 8px 48px 0 rgba(255,255,255,0.18), 0 4px 32px 0 rgba(0,0,0,0.12); background: rgba(0,100,56,0.2);">
                <div class="flex items-center flex-shrink-0 mr-8">
                    <img src="${pathToRoot}images/EEP_Edited_Logo White.png" alt="EEP Logo" class="h-10 w-auto">
                    </div>
                <div class="flex-1 flex justify-center">
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="${pathToRoot}index.html" style="color: var(--new-white);" class="text-base font-medium transition-colors duration-200">Home</a>
                        <div class="relative group">
                            <button style="color: var(--new-white);" class="text-base font-medium flex items-center focus:outline-none transition-colors duration-200">
                                EEP Projects
                                <svg class="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                            </button>
                            <div class="absolute left-0 mt-2 w-48 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-50" style="background: rgba(0,100,56,0.2); backdrop-filter: blur(80px); -webkit-backdrop-filter: blur(80px);">
                                <a href="${pathToRoot}eep-i.html" style="color: var(--new-white);" class="block px-6 py-3 transition-colors duration-200">EEP Phase I</a>
                                <a href="${pathToRoot}eep-ii.html" style="color: var(--new-white);" class="block px-6 py-3 transition-colors duration-200">EEP Phase II</a>
                                <a href="${pathToRoot}eep-iii.html" style="color: var(--new-white);" class="block px-6 py-3 transition-colors duration-200">EEP Phase III</a>
                            </div>
                        </div>
                        <a href="${pathToRoot}stem.html" style="color: var(--new-white);" class="text-base font-medium transition-colors duration-200">Female STEM Internship</a>
                        <a href="#" style="color: var(--new-white);" class="text-base font-medium transition-colors duration-200">Resources</a>
                        <a href="${pathToRoot}news.html" style="color: var(--new-white);" class="text-base font-medium transition-colors duration-200">News</a>
                        <a href="#" style="color: var(--new-white);" class="text-base font-medium transition-colors duration-200">Media</a>
                    </div>
                </div>
                <button id="mobile-menu-btn" class="md:hidden ml-4" style="color: var(--new-white);" aria-label="Open menu" aria-expanded="false">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
            </div>
        </nav>
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="fixed inset-y-0 right-0 z-50 hidden md:hidden w-3/4 max-w-xs rounded-l-3xl shadow-lg p-8 flex flex-col space-y-6 transform translate-x-full transition-transform duration-300 ease-in-out" style="background: rgba(0,100,56,0.2); backdrop-filter: blur(80px); -webkit-backdrop-filter: blur(80px); box-shadow: 0 8px 48px 0 rgba(255,255,255,0.18), 0 4px 32px 0 rgba(0,0,0,0.12);">
            <button id="close-mobile-menu" class="self-end mb-8" style="color: var(--new-white);" aria-label="Close menu">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            <a href="${pathToRoot}index.html" style="color: var(--new-white);" class="block text-lg font-semibold">Home</a>
            <a href="${pathToRoot}eep-i.html" style="color: var(--new-white);" class="block text-lg font-semibold">EEP Phase I</a>
            <a href="${pathToRoot}eep-ii.html" style="color: var(--new-white);" class="block text-lg font-semibold">EEP Phase II</a>
            <a href="${pathToRoot}eep-iii.html" style="color: var(--new-white);" class="block text-lg font-semibold">EEP Phase III</a>
            <a href="${pathToRoot}stem.html" style="color: var(--new-white);" class="block text-lg font-semibold">Female STEM Internship</a>
            <a href="#" style="color: var(--new-white);" class="block text-lg font-semibold">Resources</a>
            <a href="${pathToRoot}news.html" style="color: var(--new-white);" class="block text-lg font-semibold">News</a>
            <a href="#" style="color: var(--new-white);" class="block text-lg font-semibold">Media</a>
        </div>
    </header>
    `;
    document.getElementById('header').innerHTML = header;

    // Mobile menu toggle logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.remove('hidden', 'translate-x-full');
            mobileMenu.classList.add('translate-x-0');
            menuBtn.setAttribute('aria-expanded', 'true');
        });
    }
    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    }
    // Close menu when clicking outside
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
                menuBtn.setAttribute('aria-expanded', 'false');
        });
        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

function handleScroll() {
    const header = document.querySelector('#header nav');
    const heroSection = document.querySelector('section'); // Assuming the first section is the hero

    if (!header || !heroSection) return;

    const heroHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > heroHeight - header.offsetHeight) { // Adjust threshold based on header height
        header.classList.add('scrolled-header');
    } else {
        header.classList.remove('scrolled-header');
    }
} 
