"use strict";
window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab__nav-link'),
    tabContent = document.querySelectorAll('.tab__content'),
    headerParents = document.querySelector('.tab__nav');

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
})
