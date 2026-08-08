export function startSpeechRecognition(onResult, onEnd) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition is not supported in this browser.");
    return null;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    let transcript = "";

    for (let i = 0; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript + " ";
    }

    onResult(transcript.trim());
  };

  recognition.onerror = (event) => {
    console.error("Speech Recognition Error:", event.error);

    if (event.error === "not-allowed") {
      alert("Please allow microphone access.");
    } else if (event.error === "network") {
      alert("Speech recognition service is unavailable. Check your internet connection or try Google Chrome.");
    }

    if (onEnd) onEnd();
  };

  recognition.onend = () => {
    if (onEnd) onEnd();
  };

  recognition.start();

  return recognition;
}