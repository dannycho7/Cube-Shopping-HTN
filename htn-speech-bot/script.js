/* Bot Specific */

var textToSay = "";
var textFlag = false;

var timer = setInterval( checkDOM, 1000);
var counter = 0;

/*
* Speech Synthesizer start
*/

var synth = window.speechSynthesis;

//var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.txt');

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function sayText() {
  // set inputTxt.value to the robot's response
    inputTxt = "";
    inputTxt += textToSay;
  //  console.log(textToSay);
    var utterThis = new SpeechSynthesisUtterance(inputTxt);
    utterThis.voice = voices[48];
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
    // set the text flag back to false
    textFlag = false;


  utterThis.onpause = function(event) {
    var char = event.utterance.text.charAt(event.charIndex);
    console.log('Speech paused at character ' + event.charIndex + ' of "' +
    event.utterance.text + '", which is "' + char + '".');
  }

  //inputTxt.blur();
}

/*
* Speech Recognition
*/

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var grammar = '#JSGF V1.0;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');

document.getElementById("chat-button").onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onresult = function(event) {
  var last = event.results.length - 1;
  var speech = event.results[last][0].transcript;

//  diagnostic.textContent = speech;
  var speechToSend = "";
  speechToSend += speech;
  typeSpeech(speechToSend);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}

function typeSpeech(speechToSend) {
  var myForm = document.getElementById("myform");
  myForm.action = postURL;
  myForm.querySelector("input").value = speechToSend;
  myForm.submit();
}
