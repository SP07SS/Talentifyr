// Example: Scroll to Top Button
window.onscroll = function() {
    toggleScrollToTopButton();
};

function toggleScrollToTopButton() {
    let button = document.getElementById('scrollToTopButton');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
