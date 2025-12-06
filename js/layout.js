class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header class="bg-card-light dark:bg-card-dark shadow-sm">
        <nav class="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center">
          <a class="text-xl font-bold text-primary flex items-center gap-2" href="index.html">
            <span class="material-symbols-outlined">medical_services</span>
            Dr. Puneet Kumar
          </a>
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-6">
            <a class="nav-link transition-colors" href="index.html">Home</a>
            <a class="nav-link transition-colors" href="about.html">About</a>
            <a class="nav-link transition-colors" href="services.html">Services</a>
            <a class="nav-link transition-colors" href="updates.html">Updates</a>
            <a class="nav-link transition-colors" href="contact.html">Contact</a>
          </div>
          <!-- Mobile Menu Button -->
          <button id="menu-btn" class="md:hidden">
            <span class="material-symbols-outlined">menu</span>
          </button>
          
          <!-- Mobile Menu Dropdown -->
          <div id="mobile-menu" class="hidden w-full md:hidden flex-col mt-4 space-y-4 pb-4 border-t border-gray-100 dark:border-gray-800 pt-4">
             <a class="nav-link block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="index.html">Home</a>
             <a class="nav-link block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="about.html">About</a>
             <a class="nav-link block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="services.html">Services</a>
             <a class="nav-link block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="updates.html">Updates</a>
             <a class="nav-link block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="contact.html">Contact</a>
          </div>
        </nav>
      </header>
    `;

        this.highlightActiveLink();
        this.setupMobileMenu();
    }

    highlightActiveLink() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const links = this.querySelectorAll('.nav-link');

        links.forEach(link => {
            const linkPath = link.getAttribute('href');
            // Simple check: matches if the href matches the current filename
            if (currentPath === linkPath) {
                link.classList.add('font-semibold', 'text-primary', 'dark:text-primary');
                link.classList.remove('text-gray-600', 'dark:text-gray-300');
            } else {
                link.classList.add('text-gray-600', 'dark:text-gray-300');
                link.classList.remove('font-semibold', 'text-primary', 'dark:text-primary');
            }
        });
    }

    setupMobileMenu() {
        const btn = this.querySelector('#menu-btn');
        const menu = this.querySelector('#mobile-menu');

        if (btn && menu) {
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
                menu.classList.toggle('flex');
            });
        }
    }
}

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer class="bg-card-dark text-gray-300">
        <div class="container mx-auto px-6 py-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Dr. Puneet Kumar. All Rights Reserved.</p>
            <div class="flex space-x-4 mt-4 md:mt-0">
                <a class="hover:text-white transition-colors" href="#">Privacy Policy</a>
                <a class="hover:text-white transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    `;
    }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
