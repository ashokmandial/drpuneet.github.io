class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header class="bg-card-light dark:bg-card-dark shadow-sm">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
          <a class="text-xl font-bold text-primary flex items-center gap-2" href="index.html">
            <span class="material-symbols-outlined">medical_services</span>
            Dr. Puneet Kumar
          </a>
          <div class="hidden md:flex items-center space-x-6">
            <a class="nav-link transition-colors" href="index.html">Home</a>
            <a class="nav-link transition-colors" href="about.html">About</a>
            <a class="nav-link transition-colors" href="services.html">Services</a>
            <a class="nav-link transition-colors" href="updates.html">Updates</a>
            <a class="nav-link transition-colors" href="contact.html">Contact</a>
          </div>
          <button class="md:hidden">
            <span class="material-symbols-outlined">menu</span>
          </button>
        </nav>
      </header>
    `;

        this.highlightActiveLink();
    }

    highlightActiveLink() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const links = this.querySelectorAll('.nav-link');

        links.forEach(link => {
            const linkPath = link.getAttribute('href');
            // Simple check: matches if the href matches the current filename
            // e.g. "about.html" matches "about.html"
            if (currentPath === linkPath) {
                link.className = "nav-link font-semibold text-primary dark:text-primary";
            } else {
                link.className = "nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary";
            }
        });
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
