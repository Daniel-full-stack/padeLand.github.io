//coppy menu for mobile
function copyMenu(){
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mobile menu

const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addclass = document.querySelector('.site');
if(menuButton) menuButton.addEventListener('click', function(){
    addclass.classList.toggle('showmenu')
})
if(closeButton) closeButton.addEventListener('click', function(){
    addclass.classList.remove('showmenu')
})

//shhow sub menu on mobile


const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item  != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (!this.closest('.has-child').classList.contains('expand')) { this.closest('.has-child').classList.add('expand'); } else { this.closest('.has-child').classList.remove('expand'); }
    this.closest('.has-child').classList.toggle('expand');
}
//slider
const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const searchButton = document.querySelector('.t-search'),
         tClose = document.querySelector('.search-close'),
         showClass = document.querySelector('.site');
if(searchButton) searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch')
})
if(tClose) tClose.addEventListener('click', function(){
    showClass.classList.remove('showsearch')
})