function audioPlayer() {
  const wrapper = document.querySelector('.case-image-inner');
  const blocks = document.querySelectorAll('.case-image');
  const barStrip = document.createElement('div');
  const barNo = 8;
  const groups = [];
  const interviewPlayer = new Audio();
  const context = new AudioContext();
  const analyser = context.createAnalyser();
  analyser.connect(context.destination);

  const source = [];

  barStrip.classList.add('bar-list');
  for (let i = 0; i < barNo; i += 1) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    barStrip.appendChild(bar);
    groups.push(bar);
  }

  function setupWebAudio() {
    if (source != null) source.disconnect();
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();
    interviewPlayer.remove();
    interviewPlayer.crossOrigin = 'anonymous';
    source = audioContext.createMediaElementSource(interviewPlayer);
    analyser = audioContext.createAnalyser();
    source.connect(analyser);
    analyser.connect(audioContext.destination);
  }
  // Draw the audio frequencies to screen
  function draw() {
    // Create a new array that we can copy the frequency data into
    const freqByteData = new Uint8Array(analyser.frequencyBinCount);
    let i = 0;
    // Setup the next frame of the drawing
    requestAnimationFrame(draw);
    // Copy the frequency data into our new array
    analyser.getByteFrequencyData(freqByteData);
    // For each "bucket" in the frequency data, draw a line corresponding to its magnitude
    for (i; i < groups.length; i += 1) {
      groups[i].style.bottom = `${((freqByteData[i] / 255) * 60) + 7} %`;
    }
  }
  function init() {
    setupWebAudio();
    draw();
  }
  window.addEventListener('load', init, false);
  function playButtonHandler(e) {
    if (e.target !== e.currentTarget) {
      interviewPlayer.pause();
      interviewPlayer.remove();
      if (e.target.classList.contains('playing')) {
        e.target.classList.remove('playing');
        e.target.removeChild(barStrip);
      } else {
        setupWebAudio();
        interviewPlayer.currentTime = 0;
        interviewPlayer.src = e.target.dataset.interview;
        interviewPlayer.play();
        for (let i = 0; i < blocks.length; i += 1) {
          blocks[i].classList.remove('playing');
        }
        e.target.classList.add('playing');
        e.target.appendChild(barStrip);
      }
    }
    e.stopPropagation();
  }
  wrapper.addEventListener('click', playButtonHandler, false);
}
audioPlayer();
