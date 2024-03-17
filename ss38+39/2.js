function toggleSearch() {
    var input = document.querySelector('.search-input');
    var icon = document.getElementById('searchIcon');

    input.classList.toggle('expand');
    icon.classList.toggle('expand');
    if (input.classList.contains('expand')) {
        input.focus();
        input.placeholder = 'Search...';
    } else {
        input.blur();
        input.placeholder = '';
    }
}
