var c = document.getElementById("c");
var ctx = c.getContext("2d");
var cw = c.width = 600,
  cx = 2 * cw / 3.2;
var ch = c.height = 600,
  cy = ch / 2;
var maxWH = Math.max(cw, ch);
var rad = Math.PI / 180;

var R = 200,
  r, rx, ry;
var initA = 0;
var stopped = true;

function Draw() {
  initA += .1
  ctx.clearRect(0, 0, cw, ch);

  for (var a = initA; a < initA + 180; a += 5) {
    r = R * Math.abs(Math.sin(a * rad));
    ry = (R / 2) * (Math.sin(a * rad * 2));
    rx = (R / 2) * (Math.cos(a * rad * 2));

    particles(cx + rx, cy + ry, r);

  }
  requestId = window.requestAnimationFrame(Draw);
}

function particles(cx, cy, r) {
  for (var a = 0; a < 360; a += 10) {
    var x = cx + r * Math.cos(a * rad);
    var y = cy + r * Math.sin(a * rad);
    ctx.beginPath();
    ctx.arc(x, y, r / 70, 0, 2 * Math.PI);
    ctx.fillStyle = "hsla(" + a + ",99%,65%,.95)";
    ctx.fill();

  }
}

function start() {
  requestId = window.requestAnimationFrame(Draw);
  stopped = false;
}

function stopAnim() {
  if (requestId) {
    window.cancelAnimationFrame(requestId);
  }
  stopped = true;
}

window.addEventListener("load", start(), false);

c.addEventListener("click", function() {
  (stopped == true) ? start(): stopAnim();
}, false)