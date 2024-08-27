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
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 750,
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

$('#Slider-template--17056210583733__multicolumn2').slick({
  infinite: true,
  dots: true,
  slidesToShow:3,
  slidesToScroll: 1, 
  prevArrow: '<button class="video-slider-arrow video-slider-prev"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#53097B" fill-opacity="0"></circle><path d="M13.5 9.5L7 16M7 16L13.5 22.5M7 16H25" stroke="#FFFFFF" stroke-width="2px" stroke-linecap="square" fill="none"></path></svg></button>',
  nextArrow: '<button class="video-slider-arrow video-slider-next"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#53097B" fill-opacity="0"></circle><path d="M18.5 9.5L25 16M25 16L18.5 22.5M25 16H7" stroke="#FFFFFF" stroke-width="2px" stroke-linecap="square" fill="none"></path></svg></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
});
// tabbed description section
class Tabs {
  constructor(selector) {
      this.selector = selector;
      this.tabs = document.querySelectorAll(`${selector} .tab-item`);
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

      // Identify the closest tab item in case the click was on an image or icon
      const tabItem = event.currentTarget.closest('.tab-item');

      const target = tabItem.querySelector('a').getAttribute('href').substring(1);
      const tabPanes = document.querySelectorAll(`${this.selector} .tab-pane`);
      const activeTabs = document.querySelectorAll(`#${target}`);

      if (window.innerWidth <= 480) {
          if (this.previouslyActiveTab === tabItem) {
              this.deactivateTab(tabItem);
              this.previouslyActiveTab = null;
              return;
          }
      }

      this.deactivateAllTabs();
      this.activateTab(tabItem, activeTabs);

      this.previouslyActiveTab = tabItem;
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

  deactivateTab(tabItem) {
      tabItem.classList.remove('active');
      const target = tabItem.querySelector('a').getAttribute('href').substring(1);
      document.querySelectorAll(`#${target}`).forEach(tab => {
          tab.style.display = 'none';
          tab.classList.remove('active');
      });
  }

  activateTab(tabItem, activeTabs) {
      tabItem.classList.add('active');

      activeTabs.forEach(tab => {
          tab.style.display = 'block';
          tab.classList.add('active');
      });
  }
}

// Initialize the Tabs class


// test
// mega menu Js
class NavigationMenu {
  constructor(navSelector) {
    this.nav = document.querySelector(navSelector);
    this.navItems = this.nav.querySelectorAll('.child-link');
    this.currentOpenItem = null; // Track the currently open item
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.navItems.forEach(item => {
      const label = item.querySelector('.child-link-lable').querySelector('.icon');
      label.addEventListener('click', () => this.toggleMenu(item));
    });
  }

  toggleMenu(item) {
    // If the clicked item is the currently open item, do nothing
    if (this.currentOpenItem === item) {
      return;
    }

    // Close all other submenus
    this.navItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector('.menu-container-last').style.display = 'none';
      }
    });

    // Toggle the clicked submenu
    const submenu = item.querySelector('.menu-container-last');
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';

    // Update the currently open item
    this.currentOpenItem = submenu.style.display === 'flex' ? item : null;
  }
}






document.addEventListener('DOMContentLoaded', function() {
  class ShowMoreContent {
    constructor(buttonId, contentClass,orgContent) {
      this.button = document.getElementById(buttonId);
      this.moreContent = document.querySelector(contentClass);
      this.orgContent = document.querySelector(orgContent)
      this.isContentVisible = false;
  
      this.button.addEventListener('click', this.toggleContent.bind(this));
    }
  
    toggleContent() {
      if (this.isContentVisible) {
        this.orgContent.style.display = 'block';
        this.moreContent.style.display = 'none';
        this.button.textContent = 'Show More';
      } else {
        this.orgContent.style.display = 'none';
        this.moreContent.style.display = 'block';
        this.button.textContent = 'Show Less';
      }
      this.isContentVisible = !this.isContentVisible;
    }
  }
  
  // Initialize the ShowMoreContent class
  new NavigationMenu('.mega-menu__list');
  if(document.getElementById('showMoreBtn') != null ){
    new ShowMoreContent('showMoreBtn', '.more-content','.descrition-first');
  }

  document.querySelectorAll('.header__menu-item').forEach(item => {
    let parent = item.parentElement;
    let megaMenuContent = parent.querySelector('.mega-menu__content');
  
    parent.addEventListener('mouseenter', function() {
      megaMenuContent.style.display = 'block';
    });
  
    parent.addEventListener('mouseleave', function() {
      megaMenuContent.style.display = 'none';
    });
  });
});
///



// mega menu Js