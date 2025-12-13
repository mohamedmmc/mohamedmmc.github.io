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
let resizeReset = function () {
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
  this.update = function () {
    this.border();
    this.x += this.vector.x;
    this.y += this.vector.y;
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
    drawArea.beginPath();
    drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    drawArea.closePath();
    drawArea.fillStyle = this.color;
    drawArea.fill();
  };
};

function setup() {
  particles = [];
  resizeReset();
  for (let i = 0; i < opts.particleAmount; i++) {
    particles.push(new Particle());
  }
  window.requestAnimationFrame(loop);
}

function loop() {
  window.requestAnimationFrame(loop);
  drawArea.clearRect(0, 0, w, h);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  for (let i = 0; i < particles.length; i++) {
    linkPoints(particles[i], particles);
  }
}

const canvasBody = document.getElementById("canvas"),
  drawArea = canvasBody.getContext("2d");
let delay = 200,
  tid,
  rgb = opts.lineColor.match(/\d+/g);
resizeReset();
setup();

//
var _CONTENT = ["Un Geek", "Un Ingénieur FullStack", "Un Artiste", "Un Gamer"];

var _PART = 0;
var _PART_INDEX = 0;
var _ELEMENT = document.querySelector("#text");
var _CURSOR = document.querySelector("#cursor");
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
  startTyping();
});

// Permet de mettre à jour le contenu tapé quand la langue change
window.setTypingContent = function (newContent) {
  if (!Array.isArray(newContent) || newContent.length === 0) return;
  stopTyping();
  _CONTENT = newContent;
  _PART = 0;
  _PART_INDEX = 0;
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

// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });
}

// PS5 Easter Egg Floating Animation
(function () {
  const ps5Element = document.getElementById("ps5-easter-egg");
  if (!ps5Element) return;

  // Initial position and movement
  let ps5 = {
    x: Math.random() * (window.innerWidth - 150),
    y: Math.random() * (window.innerHeight - 150),
    speed: 2,
    directionAngle: Math.floor(Math.random() * 360),
    size: 150,
  };

  // Calculate velocity vector
  ps5.vector = {
    x: Math.cos((ps5.directionAngle * Math.PI) / 180) * ps5.speed,
    y: Math.sin((ps5.directionAngle * Math.PI) / 180) * ps5.speed,
  };

  function updatePS5Position() {
    // Update position
    ps5.x += ps5.vector.x;
    ps5.y += ps5.vector.y;

    // Get viewport dimensions
    const maxX = window.innerWidth - ps5.size;
    const maxY = window.innerHeight - ps5.size;

    // Bounce off edges
    if (ps5.x >= maxX || ps5.x <= 0) {
      ps5.vector.x *= -1;
      ps5.x = Math.max(0, Math.min(ps5.x, maxX));
    }
    if (ps5.y >= maxY || ps5.y <= 0) {
      ps5.vector.y *= -1;
      ps5.y = Math.max(0, Math.min(ps5.y, maxY));
    }

    // Apply position
    ps5Element.style.left = ps5.x + "px";
    ps5Element.style.top = ps5.y + "px";

    requestAnimationFrame(updatePS5Position);
  }

  // Start animation
  updatePS5Position();

  // Handle window resize
  window.addEventListener("resize", function () {
    const maxX = window.innerWidth - ps5.size;
    const maxY = window.innerHeight - ps5.size;
    ps5.x = Math.min(ps5.x, maxX);
    ps5.y = Math.min(ps5.y, maxY);
  });
})();
