// Partículas
particlesJS("particles-js", {
  particles: {
    number: { value: 100 },
    color: { value: ["#ff8c00", "#ff4500", "#ffa500"] },
    shape: { type: "circle" },
    opacity: { value: 0.7, random: true },
    size: { value: 4, random: true },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 3,
      direction: "top",
      random: true,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});

// Contagem regressiva
const dataEvento = new Date("2025-07-11T00:00:00").getTime();

const countdown = setInterval(() => {
  const agora = new Date().getTime();
  const distancia = dataEvento - agora;

  const dias = Math.max(0, Math.floor(distancia / (1000 * 60 * 60 * 24)));
  const horas = Math.max(0, Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutos = Math.max(0, Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60)));
  const segundos = Math.max(0, Math.floor((distancia % (1000 * 60)) / 1000));

  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;

  if (distancia < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "O Acampamento Começou! 🔥";
  }
}, 1000);
