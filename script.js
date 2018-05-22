if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) document.querySelector("a").href = "sms:&body=I love you";
else if (navigator.userAgent.match(/Android/i)) document.querySelector("a").href = "sms:?body=I love you";
else document.querySelector("a").href = "mailto:?subject=I love you&body=I love you";
