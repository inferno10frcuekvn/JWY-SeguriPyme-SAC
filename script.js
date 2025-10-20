// Mostrar mensaje al hacer clic en el botón de auditoría
document.querySelector('.cta').addEventListener('click', () => {
  const mensaje = document.getElementById("MensajeConfirmacion");
  mensaje.style.display = "block";
});

// Activar música al hacer clic en el botón 🎵
document.getElementById("btnPlayMusica").addEventListener("click", () => {
  const audio = document.getElementById("MusicaFondo");
  audio.play();
  audio.volume = 0.3;
});

// Aplastar la mosca para confirmar
function AplastarMosca() {
  const mosca = document.getElementById("the_ant");
  const mensaje = document.getElementById("MensajeConfirmacion");
  const emojis = document.getElementById("EmojisMosca");

  mosca.src = "Imagenes/MoscaChancada.png";
  mosca.style.cursor = "url('Imagenes/MataMoscaSucia.cur'), auto";
  mensaje.style.display = "none";
  emojis.style.display = "block";

  setTimeout(() => {
    emojis.style.display = "none";
    mosca.src = "Imagenes/Mosca.png";
    mosca.style.cursor = "url('Imagenes/MataMosca.cur'), auto";
  }, 3000);
}

// Animación de logo interactivo
let alternado = false;

const logoPrincipal = document.getElementById("logoToggle");
const grupo = document.getElementById("grupoLogo");
const alternativo = document.getElementById("logoAlternativo");
const elementos = grupo.querySelectorAll(".logo-text, #btnPlayMusica");

logoPrincipal.addEventListener("click", () => {
  if (!alternado) {
    logoPrincipal.classList.add("girar");

    elementos.forEach((el) => {
      el.classList.remove("salir");
      el.classList.add("retraer");
    });

    setTimeout(() => {
      grupo.style.display = "none";
      logoPrincipal.classList.add("fade-out");
      logoPrincipal.classList.remove("girar");

      setTimeout(() => {
        logoPrincipal.style.display = "none";
        logoPrincipal.classList.remove("fade-out");
        alternativo.classList.add("fade-in", "mostrar");
      }, 400);
    }, 600);

    alternado = true;
  }
});

alternativo.addEventListener("click", () => {
  if (alternado) {
    alternativo.classList.add("girar");

    setTimeout(() => {
      alternativo.classList.remove("fade-in", "mostrar", "girar");
      grupo.style.display = "flex";
      logoPrincipal.style.display = "inline-block";
      logoPrincipal.classList.add("fade-in");

      elementos.forEach((el) => {
        el.classList.remove("retraer");
        void el.offsetWidth;
        el.classList.add("salir");
      });

      setTimeout(() => {
        logoPrincipal.classList.remove("fade-in");
      }, 400);
    }, 600);

    alternado = false;
  }
});
