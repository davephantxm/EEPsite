function loadFooter(pathToRoot = './') {
    const footer = `
    <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet">
    <footer style="background: rgba(0,100,56,1); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); box-shadow: 0 8px 48px 0 rgba(255,255,255,0.18), 0 4px 32px 0 rgba(0,0,0,0.12);" class="relative overflow-hidden text-white animate-fade-in rounded-t-3xl">
        <style>
            .footer-glow-hover, .footer-link, footer h4, .footer-copyright {
                font-family: 'Fjalla One', Arial, sans-serif !important;
                font-weight: 400;
                letter-spacing: 0.5px;
            }
        </style>
        <div class="absolute inset-0 pointer-events-none" style="background: url('${pathToRoot}assets/noise.png'); opacity: 0.15; mix-blend-mode: overlay; z-index: 1;"></div>
        <div class="absolute inset-0 opacity-10" style="z-index: 2;">
            <img src="${pathToRoot}images/lines.png" alt="" class="w-full h-full object-cover">
        </div>
        <div class="relative container mx-auto px-4 py-16" style="z-index: 3;">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
                <!-- Logo and Brief -->
                <div class="col-span-1">
                    <img src="${pathToRoot}images/EEP_Edited_Logo White.png" alt="EEP Logo" class="h-25 w-auto object-contain mb-8 hover:scale-105 transition-transform duration-300">
                </div>

                <!-- Company Links -->
                <div class="col-span-1">
                    <h4 class="text-lg font-semibold mb-6 footer-glow-hover">Company</h4>
                    <ul class="space-y-4">
                        <li><a href="https://nep.rea.gov.ng/" class="hover:text-gray-200 footer-link inline-block">Visit NEP</a></li>
                        <li><a href="#" class="hover:text-gray-200 footer-link inline-block">Visit REA</a></li>
                        
                    </ul>
                </div>

                <!-- Social Links -->
                <div class="col-span-1">
                    <h4 class="text-lg font-semibold mb-6 footer-glow-hover">Social</h4>
                    <ul class="space-y-4">
                        <li>
                            <a href="https://www.linkedin.com/company/rural-electrification-agency-of-nigeria/" class="flex items-center hover:text-gray-200 footer-link glow-text">
                                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/TheREANigeria" class="flex items-center hover:text-gray-200 footer-link glow-text">
                                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                                Twitter (X)
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/realreanigeria/" class="flex items-center hover:text-gray-200 footer-link glow-text">
                                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/REANigeria" class="flex items-center hover:text-gray-200 footer-link glow-text">
                                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                                </svg>
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="col-span-1">
                    <h4 class="text-lg font-semibold mb-4 footer-glow-hover">Contact Us</h4>
                    <address class="not-italic space-y-4">
                    <p class="footer-link footer-glow-hover">
                        <a class="mb-1">The Centurion Building,</a>
                        <a class="mb-1"> 15th Street, Constitution Ave. CBD.,</a>
                        <a class="mb-1">Opposite Churchgate Building</a>
                        <a class="mb-1">Abuja, Nigeria</a>
                    </p>
                        <p class="mt-8 footer-link footer-glow-hover">
                            <a href="mailto:nep@rea.gov.ng" class="hover:text-gray-200 footer-link footer-glow-hover inline-block">nep@rea.gov.ng</a>
                        </p>
                        <p class="footer-link footer-glow-hover">
                            <a href="tel:+2348112494040" class="hover:text-gray-200 footer-link footer-glow-hover inline-block">(+234) 811 249 4040</a>
                        </p>
                        <p class="footer-link footer-glow-hover">
                            <a href="tel:+2348107829134" class="hover:text-gray-200 footer-link footer-glow-hover inline-block">(+234) 810 782 9134</a>
                        </p>
                        <p class="footer-link footer-glow-hover">
                            <a href="tel:+23480020202020" class="hover:text-gray-200 footer-link footer-glow-hover inline-block">(+234) 800 202 02020</a>
                        </p>
                    </address>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="border-t border-white/20 mt-12 pt-8 text-center text-sm footer-copyright">
                <p>&copy; 2025 Energizing Education Programme. All rights reserved.</p>
            </div>
        </div>
    </footer>
    <style>
        .footer-link:hover,
        .footer-glow-hover:hover,
        .footer-glow-hover:focus {
            text-shadow: 0 0 8px #fff, 0 0 16px #00c86b, 0 0 2px #fff;
        }
    </style>
    `;
    document.getElementById('footer').innerHTML = footer;
} 
