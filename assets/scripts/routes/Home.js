/* global wp_vars */

const simpleslider = require('simple-slider');

const audioplayer = require('../util/audioPlayer.js');

export default {
  init() {
    // JavaScript to be fired on the home page
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    $(document).ready(() => {
      const $inputrange = $('input[type=range]');
      const $outputvalue = $('output');
      const $submit = $('.donation-submit');
      $('.typeme').typed({
        strings: ['^500creates homes', '^500believes in people', '^500builds community'],
        typeSpeed: 25,
        backSpeed: 20,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
      });
      $('.slide-navigation a').click((e) => {
        const target = e.target.dataset.target;
        $('.slide-navigation a').removeClass('active');
        e.target.classList.add('active');
        $('.case-image-inner').attr('data-position', target);
        e.preventDefault();
        return false;
      });
      $inputrange.on('input', () => {
        $outputvalue.text($inputrange.val());
      });
      $submit.click((e) => {
        const donateTotal = $outputvalue.text();
        let donateHref = `https://localgiving.org/donation/canopyhousing?amount=${donateTotal}`;
        const monthlyCheck = $('.monthly-check').is(':checked');
        e.preventDefault();
        if (monthlyCheck) {
          donateHref = `${donateHref}&monthlyDonation`;
        }
        window.location.href = donateHref;
      });

      simpleslider.getSlider({
        container: document.getElementById('gallery-1'),
        prop: 'opacity',
        unit: '',
        init: 0,
        show: 1,
        end: 0,
        duration: 1,
        delay: 3,
      });

      audioplayer.setup();
    });
  },
};
