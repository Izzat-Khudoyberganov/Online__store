"use strict";
window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab__nav-link'),
    tabContent = document.querySelectorAll('.tab__content'),
    headerParents = document.querySelector('.tab__nav'),
    burgerMenu = document.querySelector('.burger__menu'),
    headerTopNav = document.querySelector('.header__top-nav'),
    closeBtn = document.querySelector('.close__btn'),
    smBurgerMenu = document.querySelector('.sm__burger-menu'),
    headerTop = document.querySelector('header__top');

  function hideTabContent() {
    tabContent.forEach(item => {
      item.style.display = 'none';
    });
    tabs.forEach(item => {
      item.classList.remove('active')
    })
  };

  function showTabContent(i = 1) {
    tabContent[i].style.display = 'grid';
    tabs[i].classList.add('active')
  }
  hideTabContent()
  showTabContent()
  headerParents.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('tab__nav-link')) {
      tabs.forEach((item, i) => {
        if (event.target == item) {
          hideTabContent()
          showTabContent(i)
        }
      })
    }
  })

  smBurgerMenu.addEventListener('click', ()=>{
    headerTopNav.classList.add('active')
    headerTop.style.display = 'flex'
  })

  burgerMenu.addEventListener('click', () => {
    headerTopNav.classList.add('active')
  })
  closeBtn.addEventListener('click', () => {
    headerTopNav.classList.remove('active')
  })
})
