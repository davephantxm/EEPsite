function loadHeader() {
    const header = `
    <header>
        <!-- Navigation -->
        <nav class="bg-white fixed w-full z-50 shadow-sm animate-slide-down">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center h-20">
                    <div class="flex items-center">
                        <img src="images/EEP_Edited_Logo.png" alt="EEP Logo" class="h-12 hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="index.html" class="text-gray-700 hover:text-primary-green nav-link transition-colors duration-300">Home</a>
                        <div class="relative group">
                            <button class="text-gray-700 hover:text-primary-green nav-link transition-colors duration-300 flex items-center focus:outline-none">
                                EEP Projects
                                <svg class="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                            </button>
                            <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-50">
                                <a href="eep-i.html" class="dropdown-link block px-6 py-3 text-gray-700 hover:text-primary-green rounded-t-xl transition-colors duration-200">EEP Phase I</a>
                                <a href="#eep-phase-2" class="dropdown-link block px-6 py-3 text-gray-700 hover:text-primary-green transition-colors duration-200">EEP Phase II</a>
                                <a href="#eep-phase-3" class="dropdown-link block px-6 py-3 text-gray-700 hover:text-primary-green rounded-b-xl transition-colors duration-200">EEP Phase III</a>
                            </div>
                        </div>
                        <a href="stem.html" class="text-gray-700 hover:text-primary-green nav-link transition-colors duration-300">Female STEM Internship</a>
                        <a href="#" class="text-gray-700 hover:text-primary-green nav-link transition-colors duration-300">Resources</a>
                        <a href="about.html" class="text-gray-700 hover:text-primary-green nav-link transition-colors duration-300">News</a>
                        <a href="#" class="text-gray-700 hover:text-primary-green nav-link transition-colors duration-300">Media</a>
                    </div>
                    <button class="md:hidden">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    </header>
    `;
    document.getElementById('header').innerHTML = header;
} 
