// Fix for GitHub Pages routing
(function() {
  // Check if we're on GitHub Pages
  if (window.location.hostname === 'jhonatan19991.github.io') {
    // If we're on the root path without hash, redirect to hash
    if (window.location.pathname === '/career-showcase-pro/' && !window.location.hash) {
      window.location.hash = '#/';
    }
    
    // Handle direct navigation to routes
    if (window.location.pathname.includes('/career-showcase-pro/project/')) {
      const projectId = window.location.pathname.split('/project/')[1];
      window.location.replace('/career-showcase-pro/#/project/' + projectId);
    }
  }
})(); 