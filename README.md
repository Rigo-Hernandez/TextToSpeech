# TextToSpeech
Text to speech and synthesis app using the web speech API



## Usage

```Javascript 
let voices = []

const getVoices = () => {
    voices = synth.getVoices()
    // console.log(voices)
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.textContent = voice.name +'(' + voice.lang + ')';
        option.setAttribute('data-length', voice.lang)
        option.setAttribute('data-name', voice.name)
        voiceSelect.appendChild(option)

    })
};
getVoices();

```
