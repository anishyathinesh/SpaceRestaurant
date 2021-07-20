var speedButton = $('.speedButton');
speedButton.on("click", toHome);

document.getElementById('bar').addEventListener("click", function(toHome);

function toHome(event) {
  event.preventDefault();
  var name = prompt(document.getElementById("name").value);
  location.assign("welcome.html");
  window.location.href = "welcome.html";
  // var name = $('.inputBox').val();
  console.log(name);
};

var i = 15;
(function timer(){
    if (--i < 0) return;
    setTimeout(function(){
        document.getElementsByTagName('h1')[0].innerHTML = i + ' secs';
        timer();
    }, 1000);
    if (i === 0) {
      window.location.href = "welcome.html";
    }
})();
var item = $('.item');
item.on("hover", mouseOver);
function mouseOver() {
  item.toggleClass('itemDetails');
  item.style.color = "red";
};

// $(
  function(){
var aud = $('audio')[0];
$('.play-pause').on('click', function(){
  if (aud.paused) {
    aud.play();
    $('.play-pause').removeClass('icon-play');
    $('.play-pause').addClass('icon-stop');
  } 
  else {
    aud.pause();
    $('.play-pause').removeClass('icon-stop');
    $('.play-pause').addClass('icon-play');
  }

})
  $('.next').on('click', function(){
    aud.src = 'velvetlight.mp3';
  })
  aud.ontimeupdate = function(){
    $('.progress').css('width', aud.currentTime / aud.duration * 100 + '%')
  }
  // })