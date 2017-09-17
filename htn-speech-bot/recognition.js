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
