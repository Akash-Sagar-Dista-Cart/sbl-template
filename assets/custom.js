$(document).ready(function(){
  $('.videos-main-block').slick({
  infinite: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1, 
  prevArrow: '<button class="video-slider-arrow video-slider-prev"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#53097B" fill-opacity="0"></circle><path d="M13.5 9.5L7 16M7 16L13.5 22.5M7 16H25" stroke="#FFFFFF" stroke-width="2px" stroke-linecap="square" fill="none"></path></svg></button>',
  nextArrow: '<button class="video-slider-arrow video-slider-next"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#53097B" fill-opacity="0"></circle><path d="M18.5 9.5L25 16M25 16L18.5 22.5M25 16H7" stroke="#FFFFFF" stroke-width="2px" stroke-linecap="square" fill="none"></path></svg></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});
});
// tabbed description section
class Tabs {
  constructor(selector) {
      this.selector = selector;
      this.tabs = document.querySelectorAll(`${selector} .tab-item a`);
      this.previouslyActiveTab = null;

      this.init();
  }

  init() {
      this.tabs.forEach(tab => {
          tab.addEventListener('click', this.handleClick.bind(this));
      });
  }

  handleClick(event) {
      event.preventDefault();
      const target = event.currentTarget.getAttribute('href').substring(1);
      const tabPanes = document.querySelectorAll(`${this.selector} .tab-pane`);
      const activeTabs = document.querySelectorAll(`#${target}`);

      if (window.innerWidth <= 480) {
          // Check if the clicked tab is the same as the previously active tab
          if (this.previouslyActiveTab === event.currentTarget) {
              // If so, close the tab
              this.deactivateTab(event.currentTarget);
              this.previouslyActiveTab = null; // Reset previously active tab
              return; // Exit the function early
          }
      }

      // Otherwise, activate the clicked tab
      this.deactivateAllTabs();
      this.activateTab(event.currentTarget, activeTabs);

      // Set the previously active tab to the current tab
      this.previouslyActiveTab = event.currentTarget;
  }

  deactivateAllTabs() {
      document.querySelectorAll(`${this.selector} .tab-item`).forEach(item => {
          item.classList.remove('active');
      });

      this.tabs.forEach(tab => {
          tab.classList.remove('active');
      });

      document.querySelectorAll(`${this.selector} .tab-pane`).forEach(pane => {
          pane.classList.remove('active');
          pane.style.display = 'none';
      });
  }

  deactivateTab(tab) {
      tab.classList.remove('active');
      tab.parentElement.classList.remove('active');
      const target = tab.getAttribute('href').substring(1);
      document.querySelectorAll(`#${target}`).forEach(tab => {
          tab.style.display = 'none';
          tab.classList.remove('active');
      });
  }

  activateTab(tab, activeTabs) {
      tab.classList.add('active');
      tab.parentElement.classList.add('active');

      activeTabs.forEach(tab => {
          tab.style.display = 'block';
          tab.classList.add('active');
      });
  }
}
// test
// mega menu Js

class NavigationMenu {
  constructor(navSelector) {
      this.nav = document.querySelector(navSelector);
      this.navItems = this.nav.querySelectorAll('.child-link');
      this.setupEventListeners();
  }

  setupEventListeners() {
    console.log("this.navItems")
    console.log(this.navItems)
      this.navItems.forEach(item => {
          const label = item.querySelector('.mega-menu__link--level-2');
          label.addEventListener('click', () => this.toggleMenu(item));
      });
  }

  toggleMenu(item) {
      // Close all other submenus
      this.navItems.forEach(otherItem => {
          if (otherItem !== item) {
              otherItem.querySelector('.menu-container-last').style.display = 'none';
          }
      });

      // Toggle the clicked submenu
      const submenu = item.querySelector('.menu-container-last');
      if (submenu.style.display === 'flex') {
          submenu.style.display = 'none';
      } else {
          submenu.style.display = 'flex';
      }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  new NavigationMenu('.mega-menu__list');
});


// mega menu Js