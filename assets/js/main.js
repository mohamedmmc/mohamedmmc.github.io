jQuery(document).ready(function ($) {});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

console.log(
  "%cIf You are Here, you must be a Developer!!",
  "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
);

// Canvas animation variables
const canvasBody = document.getElementById("canvas");
const drawArea = canvasBody ? canvasBody.getContext("2d") : null;
let delay = 200;
let tid;
let w = 0;
let h = 0;
let particles = [];
let rgb = [];

// Respect users who prefer reduced motion (a11y)
const REDUCE_MOTION =
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Single rAF handle so the loop can never stack (which would speed it up),
// plus a timestamp for frame-rate-independent motion (same speed on 60/120Hz).
let rafId = null;
let lastTime = 0;

let resizeReset = function () {
  if (!canvasBody || !drawArea) return;
  const d = document.documentElement;

  // largeur/hauteur maxi entre viewport et page scrollee
  const newW = Math.max(d.scrollWidth, d.clientWidth, window.innerWidth || 0);
  const newH = Math.max(
    d.scrollHeight,
    d.clientHeight,
    window.innerHeight || 0
  );

  // optionnel: netteté HiDPI
  const dpr = window.devicePixelRatio || 1;

  canvasBody.style.width = newW + "px";
  canvasBody.style.height = newH + "px";
  canvasBody.width = Math.floor(newW * dpr);
  canvasBody.height = Math.floor(newH * dpr);

  drawArea.setTransform(dpr, 0, 0, dpr, 0, 0);

  w = newW;
  h = newH;
};

const opts = {
  particleColor: "rgb(200,200,200)",
  lineColor: "rgb(200,200,200)",
  particleAmount: 90,
  defaultSpeed: 1,
  variantSpeed: 1,
  defaultRadius: 2,
  variantRadius: 2,
  linkRadius: 200,
};

window.addEventListener("resize", function () {
  deBouncer();
});

let deBouncer = function () {
  clearTimeout(tid);
  tid = setTimeout(function () {
    resizeReset();
  }, delay);
};

let checkDistance = function (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

let linkPoints = function (point1, hubs) {
  if (!drawArea) return;
  for (let i = 0; i < hubs.length; i++) {
    let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
    let opacity = 1 - distance / opts.linkRadius;
    if (opacity > 0) {
      drawArea.lineWidth = 0.5;
      drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
      drawArea.beginPath();
      drawArea.moveTo(point1.x, point1.y);
      drawArea.lineTo(hubs[i].x, hubs[i].y);
      drawArea.closePath();
      drawArea.stroke();
    }
  }
};

Particle = function (xPos, yPos) {
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
  this.directionAngle = Math.floor(Math.random() * 360);
  this.color = opts.particleColor;
  this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
  this.vector = {
    x: Math.cos(this.directionAngle) * this.speed,
    y: Math.sin(this.directionAngle) * this.speed,
  };
  this.update = function (mult) {
    this.border();
    this.x += this.vector.x * mult;
    this.y += this.vector.y * mult;
  };
  this.border = function () {
    if (this.x >= w || this.x <= 0) {
      this.vector.x *= -1;
    }
    if (this.y >= h || this.y <= 0) {
      this.vector.y *= -1;
    }
    if (this.x > w) this.x = w;
    if (this.y > h) this.y = h;
    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0;
  };
  this.draw = function () {
    if (!drawArea) return;
    drawArea.beginPath();
    drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    drawArea.closePath();
    drawArea.fillStyle = this.color;
    drawArea.fill();
  };
};

function drawFrame() {
  drawArea.clearRect(0, 0, w, h);
  for (let i = 0; i < particles.length; i++) {
    particles[i].draw();
  }
  for (let i = 0; i < particles.length; i++) {
    linkPoints(particles[i], particles);
  }
}

function setup() {
  if (!canvasBody || !drawArea) return;
  particles = [];
  resizeReset();
  for (let i = 0; i < opts.particleAmount; i++) {
    particles.push(new Particle());
  }
  // Reduced motion: render a single static frame instead of animating
  if (REDUCE_MOTION) {
    drawFrame();
    return;
  }
  startLoop();
}

function startLoop() {
  // Guard against stacking multiple rAF chains (the cause of the animation
  // speeding up after tab switches).
  if (rafId !== null || REDUCE_MOTION || !drawArea) return;
  lastTime = 0;
  rafId = window.requestAnimationFrame(loop);
}

function loop(now) {
  rafId = null;
  if (!drawArea) return;
  if (typeof now !== "number") {
    now = (window.performance && performance.now()) || 0;
  }
  // Frame-rate-independent step: 1.0 at 60fps, ~0.5 at 120fps.
  let mult = lastTime ? (now - lastTime) / 16.667 : 1;
  lastTime = now;
  if (!isFinite(mult) || mult <= 0) mult = 1;
  if (mult > 3) mult = 3; // clamp after long pauses so particles don't jump
  drawArea.clearRect(0, 0, w, h);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update(mult);
    particles[i].draw();
  }
  for (let i = 0; i < particles.length; i++) {
    linkPoints(particles[i], particles);
  }
  rafId = window.requestAnimationFrame(loop);
}

// Pause when the tab is hidden (battery/CPU); resume cleanly with one chain.
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  } else {
    startLoop();
  }
});

// Initialize canvas animation
if (canvasBody && drawArea) {
  rgb = opts.lineColor.match(/\d+/g);
  resizeReset();
  setup();
}

//
var _CONTENT = ["Un Geek", "Un Ingénieur FullStack", "Un Artiste", "Un Gamer"];

var _PART = 0;
var _PART_INDEX = 0;
var _ELEMENT = null;
var _CURSOR = null;
var _INTERVAL_VAL;
var _TIMEOUTS = [];

function scheduleTimeout(fn, delay) {
  const id = setTimeout(fn, delay);
  _TIMEOUTS.push(id);
  return id;
}

function clearAllTimeouts() {
  _TIMEOUTS.forEach((id) => clearTimeout(id));
  _TIMEOUTS = [];
}

function stopTyping() {
  clearInterval(_INTERVAL_VAL);
  clearAllTimeouts();
}

function startTyping() {
  stopTyping();
  _INTERVAL_VAL = setInterval(Type, 110);
}

// Fonction dactylographie
function Type() {
  if (!_ELEMENT) return;
  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

  if (text === _CONTENT[_PART]) {
    clearInterval(_INTERVAL_VAL);
    scheduleTimeout(function () {
      _INTERVAL_VAL = setInterval(Delete, 60);
    }, 1500);
  }
}

// Fonction suppression
function Delete() {
  if (!_ELEMENT || !_CURSOR) return;
  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  // le curseur reste toujours visible ici
  _CURSOR.style.display = "inline-block";

  if (text === "") {
    clearInterval(_INTERVAL_VAL);
    _PART = (_PART + 1) % _CONTENT.length;
    _PART_INDEX = 0;

    scheduleTimeout(function () {
      _INTERVAL_VAL = setInterval(Type, 110);
    }, 700);
  }
}

// Lancer au démarrage
document.addEventListener("DOMContentLoaded", function () {
  _ELEMENT = document.querySelector("#text");
  _CURSOR = document.querySelector("#cursor");
  // Seed the typing phrases from the stored language so EN visitors don't
  // see a flash of French before LanguageManager runs.
  try {
    const lang = localStorage.getItem("language") || "fr";
    const t = window.translations && window.translations[lang];
    if (t && Array.isArray(t.hero_typing) && t.hero_typing.length) {
      _CONTENT = t.hero_typing;
    }
  } catch (e) {}
  if (_ELEMENT && _CURSOR) {
    if (REDUCE_MOTION) {
      // Reduced motion: show the first phrase statically, no typing loop
      _ELEMENT.innerHTML = _CONTENT[0];
    } else {
      startTyping();
    }
  }
});

// Permet de mettre à jour le contenu tapé quand la langue change
window.setTypingContent = function (newContent) {
  if (!Array.isArray(newContent) || newContent.length === 0) return;
  if (!_ELEMENT || !_CURSOR) {
    _ELEMENT = document.querySelector("#text");
    _CURSOR = document.querySelector("#cursor");
  }
  if (!_ELEMENT || !_CURSOR) return;
  stopTyping();
  _CONTENT = newContent;
  _PART = 0;
  _PART_INDEX = 0;
  if (REDUCE_MOTION) {
    // Reduced motion: show the first phrase statically, no typing loop
    _ELEMENT.innerHTML = _CONTENT[0];
    _CURSOR.style.display = "inline-block";
    return;
  }
  _ELEMENT.innerHTML = "";
  _CURSOR.style.display = "inline-block";
  startTyping();
};

// Navigation scroll behavior
window.addEventListener("scroll", function () {
  const nav = document.getElementById("mainNav");
  if (nav) {
    if (window.scrollY > 100) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }
});

// Mobile navigation toggle is handled in navbar.js (the navbar is injected
// dynamically, so binding here would run before the elements exist).

// CV modal accessibility (index page only): Escape to close, focus
// management and a focus trap. The modal is opened/closed by toggling the
// "active" class, so a MutationObserver drives the focus handling.
(function () {
  const cvModal = document.getElementById("cv-modal");
  if (!cvModal) return;
  const box = document.getElementById("cv-modal-box");
  const closeBtn = document.getElementById("cv-modal-close");
  let lastFocused = null;

  function focusable() {
    return box ? Array.from(box.querySelectorAll("a[href], button")) : [];
  }

  document.addEventListener("keydown", function (e) {
    if (!cvModal.classList.contains("active")) return;
    if (e.key === "Escape") {
      cvModal.classList.remove("active");
      return;
    }
    if (e.key === "Tab") {
      const f = focusable();
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  new MutationObserver(function () {
    if (cvModal.classList.contains("active")) {
      lastFocused = document.activeElement;
      if (closeBtn) closeBtn.focus();
    } else if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }).observe(cvModal, { attributes: true, attributeFilter: ["class"] });
})();
