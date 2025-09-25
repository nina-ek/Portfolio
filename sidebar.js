document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.querySelector('.open-sidebar');
    const closeBtn = document.querySelector('.close-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const sidebar = document.querySelector('.sidebar.offcanvas');

    openBtn.addEventListener('click', function() {
        overlay.classList.add('active');
        sidebar.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('active');
        sidebar.classList.remove('active');
    });

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });
});



