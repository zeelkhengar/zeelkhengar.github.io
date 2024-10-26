$("#login-button").click(function (event) {
  event.preventDefault();
  showAlert();
});

$("#closeAlert").click(function (event) {
	event.preventDefault();
	closeAlert();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    requestFullScreen();
    setTimeout(function () {
      location.href = "Memories.html";
    }, 0);
  });

function showAlert() {
	document.getElementById("overlay").style.display = "block";
	document.getElementById("customAlert").style.display = "block";
  }

  // Function to close the custom alert
  function closeAlert() {
	document.getElementById("overlay").style.display = "none";
	document.getElementById("customAlert").style.display = "none";
  }

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
