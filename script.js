document.addEventListener('DOMContentLoaded', function() {
    // Select all links with href starting with '#'
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    for (const link of smoothScrollLinks) {
        link.addEventListener('click', function(e) {
            // Check if the link is on the current page (doesn't start with index.html)
            // Or if it specifically targets an ID on the current page
            const targetId = this.getAttribute('href');
            const currentPath = window.location.pathname;
            const isIndexPage = currentPath === '/' || currentPath.endsWith('/index.html');

            // If on the index page and linking to a section ID, prevent default and smooth scroll
            if (isIndexPage && targetId.startsWith('#')) {
                e.preventDefault(); // Prevent default anchor jump

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Use the scrollIntoView method for smooth scrolling
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // If not on the index page, or linking to another page, let the default behavior happen
        });
    }

    // You could add more JavaScript here later, but keep it client-side and framework-free.
});