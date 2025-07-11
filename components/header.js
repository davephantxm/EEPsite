function loadHeader(pathToRoot = './') {
    const header = `
    <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet">
    <style>
        #dropdown-arrow {
            transition: transform 0.3s ease-in-out;
        }
        nav a, nav button, #mobile-menu a {
            font-family: 'Fjalla One', Arial, sans-serif !important;
            font-weight: 400;
            letter-spacing: 0.5px;
            text-shadow: none;
            transition: text-shadow 0.3s;
        }
        nav a:hover, nav button:hover, #mobile-menu a:hover {
            text-shadow: 0 0 8px #fff, 0 0 16px #00c86b, 0 0 2px #fff;
        }
        @media (max-width: 767px) {
            .header-logo-img {
                height: 2.25rem !important; /* smaller logo on mobile */
                margin-right: 0.5rem !important;
            }
            .header-logo-container {
                margin-right: 0 !important;
            }
            .header-nav-inner {
                padding-left: 0.5rem !important;
                padding-right: 0.5rem !important;
            }
        }
    </style>
    <header>
        <nav class="fixed w-full z-50 top-2 flex justify-center pointer-events-none">
            <div class="rounded-full flex items-center px-8 py-2 max-w-5xl mx-auto shadow-2xl pointer-events-auto header-nav-inner" style="backdrop-filter: blur(80px); -webkit-backdrop-filter: blur(80px); box-shadow: 0 8px 48px 0 rgba(255,255,255,0.18), 0 4px 32px 0 rgba(0,0,0,0.12); background: rgba(0,100,56,1);">
                <div href="${pathToRoot}index.html" class="flex items-center flex-shrink-0 mr-8 header-logo-container">
                    <img src="${pathToRoot}images/EEP_Edited_Logo White.png" alt="EEP Logo" class="h-10 w-auto header-logo-img">
                </div>
                <div class="flex-1 flex justify-center">
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="${pathToRoot}index.html" style="color: var(--new-white);" class="text-base font-medium transition-colors duration-200">Home</a>
                        <div class="relative dropdown-container">
                            <button style="color: var(--new-white);" class="text-base font-medium flex items-center focus:outline-none transition-colors duration-200">
                                EEP Projects
                                <svg class="ml-1 w-4 h-4" style="transition: transform 0.3s ease-in-out;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                            </button>
                            <div class="absolute left-0 mt-2 w-48 rounded-xl shadow-lg opacity-0 pointer-events-none translate-y-2 transition-all duration-300 z-50 dropdown-menu" style="background: rgba(0,100,56,1); backdrop-filter: blur(80px); -webkit-backdrop-filter: blur(80px);">
                                <a href="${pathToRoot}eep-i.html" style="color: var(--new-white);" class="block px-6 py-3 transition-colors duration-200">EEP Phase I</a>
                                <a href="${pathToRoot}eep-ii.html" style="color: var(--new-white);" class="block px-6 py-3 transition-colors duration-200">EEP Phase II</a>
                                <a href="${pathToRoot}eep-iii.html" style="color: var(--new-white);" class="block px-6 py-3 transition-colors duration-200">EEP Phase III</a>
                            </div>
                        </div>
                        <a href="${pathToRoot}stem.html" style="color: var(--new-white);" class="text-base font-medium transition-colors duration-200">Female STEM Internship</a>
                        <a href="#" style="color: var(--new-white);" class="text-base font-medium transition-colors duration-200">Resources</a>
                        <a href="${pathToRoot}news.html" style="color: var(--new-white);" class="text-base font-medium transition-colors duration-200">News</a>
                        <a href="${pathToRoot}media.html" style="color: var(--new-white);" class="text-base font-medium transition-colors duration-200">Media</a>
                    </div>
                </div>
                <button id="mobile-menu-btn" class="md:hidden ml-4" style="color: var(--new-white);" aria-label="Open menu" aria-expanded="false">
                    <img src="${pathToRoot}assets/menuButton.png" alt="Open menu" class="w-8 h-8" style="display: inline;" />
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

    // Dropdown hover logic
    const dropdownContainers = document.querySelectorAll('.dropdown-container');
    dropdownContainers.forEach(container => {
        const button = container.querySelector('button');
        const menu = container.querySelector('.dropdown-menu');
        const svg = container.querySelector('svg');

        let timeout;

        container.addEventListener('mouseenter', () => {
            clearTimeout(timeout);
            menu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
            menu.classList.add('opacity-100', 'translate-y-0');
            svg.style.transform = 'rotate(180deg)';
        });

        container.addEventListener('mouseleave', () => {
            timeout = setTimeout(() => {
                menu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
                menu.classList.remove('opacity-100', 'translate-y-0');
                svg.style.transform = 'rotate(0deg)';
            }, 200);
        });
    });
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
