window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("top").style.fontSize = "18px";
    document.getElementById("top_pic").style.width= "76%";
  } else {
    document.getElementById("top").style.fontSize = "24px";
    document.getElementById("top_pic").style.width = "82%";
  }

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("bottom").style.background = "white";
    document.getElementById("bottom2").style.background = "white";
    document.getElementById("bottom3").style.background = "white";
  } else {
    document.getElementById("bottom").style.background = "black";
    document.getElementById("bottom2").style.background = "black";
    document.getElementById("bottom3").style.background = "black";
  }
}