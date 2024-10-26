$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
    });
});
// loadAudioFile('music/1.mp3');

$(".wishing").click(function (event) {
	event.preventDefault();
    requestFullScreen();
    setTimeout(function () {
      location.href = "BirthdayCake.html";
    }, 0);
  });

  function requestFullScreen(element) {
    var element = document.documentElement;
    var requestMethod =
      element.requestFullScreen || //W3C
      element.webkitRequestFullScreen || //Chrome等
      element.mozRequestFullScreen || //FireFox
      element.msRequestFullScreen; //IE11
    if (requestMethod) {
      requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") {
      //for Internet Explorer
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
  }
