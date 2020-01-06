const smoothScroll = require('../vendor/smooth-scroll.min.js');
const fixedsticky = require('../vendor/sticky.js');
require('../vendor/typed.min.js');

window.fixedsticky = fixedsticky;
window.smoothScroll = smoothScroll;

export default {
  init() {
    // JavaScript to be fired on all pages
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
    $(document).ready(() => {
      $('.hamburger').click((e) => {
        $('body').toggleClass('menu-open');
        e.preventDefault();
      });
      smoothScroll.init();
      $('.page-navigation-menu').fixedsticky();
    });
  },
};
