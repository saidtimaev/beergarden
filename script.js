document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('toggle');
    var mainNav = document.getElementById('mainNav');
    
    toggle.addEventListener('change', function() {
        if (this.checked) {
            mainNav.classList.add('expanded');
        } else {
            mainNav.classList.remove('expanded');
        }
    });
});