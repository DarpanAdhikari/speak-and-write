import { speechToText } from 'https://unpkg.com/speech-into-text@latest/index.js';

speechToText('output-field', 'clear', 'start', 'copy', 'langSelect'); 

window.onspeechstart = () =>{
    alert();
}