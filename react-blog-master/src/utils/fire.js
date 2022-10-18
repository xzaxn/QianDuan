import confetti from "canvas-confetti";
const body = document.body;
const documentElement = document.documentElement;

function fireClick(e) {
  const { clientX, clientY } = e;
  confetti({
    ticks: 30,
    particleCount: 15,
    spread: 100,
    startVelocity: 15,
    angle: 90,
    scalar: 0.6,
    origin: {
      x: parseFloat(clientX) / body.clientWidth,
      y: parseFloat(clientY) / body.clientHeight,
    },
  });
}

function fireTouch(e) {
  const { clientX, clientY } = e.touches[0];
  confetti({
    ticks: 30,
    particleCount: 10,
    spread: 100,
    startVelocity: 15,
    angle: 90,
    scalar: 0.6,
    origin: {
      x: parseFloat(clientX) / body.clientWidth,
      y: parseFloat(clientY) / body.clientHeight,
    },
  });
}

function addFireListener() {
  if (window.isMobile()) {
    documentElement.addEventListener("touchstart", fireTouch);
  } else {
    documentElement.addEventListener("click", fireClick);
  }
}

function removeFireListener() {
  if (isMobile()) {
    documentElement.removeEventListener("touchstart", fireTouch);
  } else {
    documentElement.removeEventListener("click", fireClick);
  }
}

export { addFireListener, removeFireListener };
