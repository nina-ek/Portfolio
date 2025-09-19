// Open sidebar (for all buttons with .openSidebar)
document.querySelectorAll('.openSidebar').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.sidebarOverlay').classList.add('active');
        document.querySelector('.sidebar.offcanvas').classList.add('active');
    });
});

// Close sidebar (for all buttons with .closeSidebar)
document.querySelectorAll('.closeSidebar').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.sidebarOverlay').classList.remove('active');
        document.querySelector('.sidebar.offcanvas').classList.remove('active');
    });
});

// Optional: close sidebar when clicking overlay
document.querySelectorAll('.sidebarOverlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.querySelector('.sidebar.offcanvas').classList.remove('active');
        }
    });
});

// Parallax effect for clouds and stars
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const stars = document.querySelector('.parallax.stars');
    const clouds = document.querySelector('.parallax.clouds');
    if (stars) {
        stars.style.transform = `translateX(-50%) translateY(${scrollY * 0.2}px)`;
    }
    if (clouds) {
        clouds.style.transform = `translateX(-50%) translateY(${scrollY * 0.5}px)`;
    }
});


