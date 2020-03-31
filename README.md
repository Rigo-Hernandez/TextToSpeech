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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


