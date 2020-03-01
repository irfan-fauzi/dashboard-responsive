//deklarasi variable
const menuIconEl = $('.menu-icon');
const sidenavEl = $('.sidebar');
const sidenavCloseEl = $('.sidenav__close-icon');

// add and remove provided class name
function toggleClassName(el, className) {
    if (el.hasClass(className)) {
        el.removeClass(className);
    } else {
        el.addClass(className);
    }
} 
//jika icon menu di klik maka otomatis akan menambah class baru 'active' pada komponen 'sidenav'
menuIconEl.on('click', function() {
    toggleClassName(sidenavEl, 'active');
});

sidenavCloseEl.on('click', function() {
    toggleClassName(sidenavEl, 'active');
});