//initiate Speech Synthesis API
const synth = window.speechSynthesis;

const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
const body = document.querySelector('body');

//Initiating voices Array
let voices = [];


const getVoices = () => {
  voices = synth.getVoices();
  // console.log(voices)
  voices.forEach(voice => {
    const option = document.createElement('option');
    option.textContent = voice.name + '(' + voice.lang + ')';
    option.setAttribute('data-length', voice.lang);
    option.setAttribute('data-name', voice.name);
    voiceSelect.appendChild(option);
  });
};
getVoices();

if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

//Speak

const speak = () => {
  if (synth.speaking) {
    console.log('already speaking ...');
    return;
  }
  if (textInput.value !== '') {
    //adding backgroud animation
    body.style.background = '#141414 url(Img/wave.gif)';
    body.style.backgroundRepeat = 'repeat-x';
    body.style.backgroundSize = '100% 100%';
    const speakText = new SpeechSynthesisUtterance(textInput.value);
    speakText.onend = e => {
      console.log('done speaking');
      body.style.background = '#141414';
    };
    speakText.onerror = e => {
      console.log('something went wrong');
    };
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute(
      'data-name'
    );

    voices.forEach(voice => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });
    speakText.rate = rate.value;
    speakText.pitch = pitch.value;
    synth.speak(speakText);
  }
};
//Event Listeners
textForm.addEventListener('submit', e => {
  e.preventDefault();
  speak();
  textInput.blur();
});

//Rate value Change
rate.addEventListener('change', e => (rateValue.textContent = rate.value));
// Pitch value change
pitch.addEventListener('change', e => (pitchValue.textContent = pitch.value));
//Voice picker Change
voiceSelect.addEventListener('change', e => speak());
