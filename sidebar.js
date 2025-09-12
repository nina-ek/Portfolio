document.getElementById('openSidebar').onclick = function() {
    document.getElementById('sidebarOverlay').classList.add('active');
    document.querySelector('.sidebar.offcanvas').classList.add('active');
};

document.getElementById('closeSidebar').onclick = function() {
    document.getElementById('sidebarOverlay').classList.remove('active');
    document.querySelector('.sidebar.offcanvas').classList.remove('active');
};

// Optional: close sidebar when clicking outside
document.getElementById('sidebarOverlay').onclick = function(e) {
    if (e.target === this) {
        this.classList.remove('active');
        document.querySelector('.sidebar.offcanvas').classList.remove('active');
    }
};