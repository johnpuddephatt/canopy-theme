/*eslint-disable */


(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.audioplayer = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function getdef(val, def) {
    return val == null ? def : val;
  }

  function len(arr) {
    return arr.length;
  }



  function setup() {

    console.log('happening...');
    var wrapper = document.querySelector('.case-image-inner');
    if(wrapper) {
      var blocks = document.querySelectorAll('.case-image');

      var analyser, interviewPlayer;

      var barStrip = document.createElement('div');
      barStrip.classList.add('bar-list');
      var groups = [];

      for(var i=0;i<8;i++) {
        var bar = document.createElement('div');
        bar.classList.add('bar');
        barStrip.appendChild(bar);
        groups.push(bar);
      }

      wrapper.addEventListener('click', playButtonHandler, false);

      function playButtonHandler(e) {
        if (e.target !== e.currentTarget ) {
          if (interviewPlayer) {
            interviewPlayer.pause();
            interviewPlayer.remove();
          }
          if (e.target.classList.contains('playing')) {
            e.target.classList.remove('playing');
            e.target.removeChild(barStrip);
          }
          else {
            setupWebAudio();
            draw();
            interviewPlayer.currentTime= 0;
            interviewPlayer.src = e.target.dataset.interview;
            interviewPlayer.play();
            for(var i=0;i<blocks.length;i++) {
              blocks[i].classList.remove('playing');
            }
            e.target.classList.add('playing');
            e.target.appendChild(barStrip);

          }

        }
        e.stopPropagation();
      }


      /*
       * Created by Cameron Adams on 18th September 2012
       * More info here: http://themaninblue.com/writing/perspective/2012/09/18/
       *
       */



      // window.addEventListener('load', init, false);

      // function init() {
      //   setupWebAudio();
      //   draw();
      // }

      function setupWebAudio() {
        window.AudioContext = window.AudioContext||window.webkitAudioContext;
        var audioContext = new AudioContext();
        if (source) source.disconnect();
        if (interviewPlayer) interviewPlayer.remove();
        interviewPlayer = new Audio();
        interviewPlayer.crossOrigin = "anonymous";
        analyser = audioContext.createAnalyser();
        var source = audioContext.createMediaElementSource(interviewPlayer);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
      }

      // Draw the audio frequencies to screen
      function draw() {
        // Setup the next frame of the drawing
        requestAnimationFrame(draw);
        // Create a new array that we can copy the frequency data into
        var freqByteData = new Uint8Array(analyser.frequencyBinCount);
        // Copy the frequency data into our new array
        analyser.getByteFrequencyData(freqByteData);
        // For each "bucket" in the frequency data, draw a line corresponding to its magnitude
        for (var i = 0; i < groups.length; i++) {
          groups[i].style.bottom = freqByteData[i]/255 * 60 + 7 + '%';

        }
      }
    }
  }
  exports.setup = setup;
});
/*eslint-enable */
