function loadHeader() {
    const header = `
    <header>
        <nav class="fixed w-full z-50 top-6 flex justify-center pointer-events-none">
            <div class="rounded-full flex items-center px-8 py-2 max-w-5xl mx-auto shadow-lg pointer-events-auto" style="backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); box-shadow: 0 4px 32px 0 rgba(0,0,0,0.12); background: rgba(0,100,56,0.7);">
                <div class="flex items-center flex-shrink-0 mr-8">
                    <img src="images/EEP_Edited_Logo White.png" alt="EEP Logo" class="h-10 w-auto">
                </div>
                <div class="flex-1 flex justify-center">
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="index.html" class="text-gray-200 hover:text-white text-base font-medium transition-colors duration-200">Home</a>
                        <div class="relative group">
                            <button class="text-gray-200 hover:text-white text-base font-medium flex items-center focus:outline-none transition-colors duration-200">
                                EEP Projects
                                <svg class="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                            </button>
                            <div class="absolute left-0 mt-2 w-48 bg-black/80 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-50">
                                <a href="eep-i.html" class="block px-6 py-3 text-gray-200 hover:text-white transition-colors duration-200">EEP Phase I</a>
                                <a href="#eep-phase-2" class="block px-6 py-3 text-gray-200 hover:text-white transition-colors duration-200">EEP Phase II</a>
                                <a href="#eep-phase-3" class="block px-6 py-3 text-gray-200 hover:text-white transition-colors duration-200">EEP Phase III</a>
                            </div>
                        </div>
                        <a href="stem.html" class="text-gray-200 hover:text-white text-base font-medium transition-colors duration-200">Female STEM Internship</a>
                        <a href="#" class="text-gray-200 hover:text-white text-base font-medium transition-colors duration-200">Resources</a>
                        <a href="about.html" class="text-gray-200 hover:text-white text-base font-medium transition-colors duration-200">News</a>
                        <a href="#" class="text-gray-200 hover:text-white text-base font-medium transition-colors duration-200">Media</a>
                    </div>
                </div>
                <button id="mobile-menu-btn" class="md:hidden ml-4 text-white" aria-label="Open menu" aria-expanded="false">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </nav>
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="fixed inset-0 bg-black bg-opacity-60 z-50 hidden md:hidden">
            <div class="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-black/90 rounded-l-3xl shadow-lg p-8 flex flex-col space-y-6 animate-slide-down">
                <button id="close-mobile-menu" class="self-end mb-8 text-white" aria-label="Close menu">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <a href="index.html" class="block text-gray-200 hover:text-white text-lg font-semibold">Home</a>
                <a href="eep-i.html" class="block text-gray-200 hover:text-white text-lg font-semibold">EEP Phase I</a>
                <a href="#eep-phase-2" class="block text-gray-200 hover:text-white text-lg font-semibold">EEP Phase II</a>
                <a href="#eep-phase-3" class="block text-gray-200 hover:text-white text-lg font-semibold">EEP Phase III</a>
                <a href="stem.html" class="block text-gray-200 hover:text-white text-lg font-semibold">Female STEM Internship</a>
                <a href="#" class="block text-gray-200 hover:text-white text-lg font-semibold">Resources</a>
                <a href="about.html" class="block text-gray-200 hover:text-white text-lg font-semibold">News</a>
                <a href="#" class="block text-gray-200 hover:text-white text-lg font-semibold">Media</a>
            </div>
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
            mobileMenu.classList.remove('hidden');
            menuBtn.setAttribute('aria-expanded', 'true');
        });
    }
    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    }
    // Close menu when clicking outside
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }
} 
