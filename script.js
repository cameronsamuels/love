var messages = ["I love you", "I love being your friend", "❤"];
for (i = 0; i < messages.length; i++) {
  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) document.querySelectorAll("a")[i].href = "sms:&body=" + messages[i];
  else if (navigator.userAgent.match(/Android/i)) document.querySelectorAll("a")[i].href = "sms:?body=" + messages[i];
  else document.querySelectorAll("a")[i].href = "mailto:?subject=" + messages[i] + "&body=" + messages[i];
}
