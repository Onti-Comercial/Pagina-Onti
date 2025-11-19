function descargarCatalogo() {
    const link = document.createElement('a');
    link.href = 'catalogo.pdf';
    link.download = 'Catalogo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

function toggleDetalles(elemento) {
  event.stopPropagation();
  const detalles = elemento.querySelector(".detalles");
  const visibles = document.querySelectorAll(".detalles");
  const productos = document.querySelectorAll(".producto");

  const estabaActivo = elemento.classList.contains("activo");

  // 🔹 Cierra todos los demás
  visibles.forEach(d => d.style.display = "none");
  productos.forEach(p => p.classList.remove("activo"));

  // 🔹 Si el clic actual no estaba activo, lo abre y cambia color
  if (!estabaActivo) {
    detalles.style.display = "block";
    elemento.classList.add("activo");
  }
}

// 🔍 Ampliar imagen en visor
function ampliarImagen(event, imagen) {
  event.stopPropagation(); // Evita que se active el toggle del producto
  const visor = document.getElementById("visor");
  const visorImg = document.getElementById("visor-img");

  visorImg.src = imagen.src;
  visor.style.display = "flex";
}

// ❌ Cerrar visor con la X
function cerrarVisor() {
  document.getElementById("visor").style.display = "none";
}

// 🔥 Cerrar visor si se hace clic fuera de la imagen
window.addEventListener("click", function(event) {
  const visor = document.getElementById("visor");
  if (event.target === visor) {
    visor.style.display = "none";
  }
});

// ⬅️➡️ Mover carrusel con botones
function moverCarrusel(btn, direccion) {
  event.stopPropagation(); // Evita abrir/cerrar producto al hacer clic
  const carrusel = btn.parentElement.querySelector('.carrusel-imagenes');
  const scrollAmount = 160; // ancho de imagen + gap
  carrusel.scrollBy({ left: scrollAmount * direccion, behavior: 'smooth' });
}

// 📱 Activar desplazamiento táctil en carrusel
function enableSwipeCarrusel(carrusel) {
  let isDown = false;
  let startX;
  let scrollLeft;

  carrusel.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carrusel.offsetLeft;
    scrollLeft = carrusel.scrollLeft;
  });

  carrusel.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - carrusel.offsetLeft;
    const walk = (startX - x);
    carrusel.scrollLeft = scrollLeft + walk;
  });

  carrusel.addEventListener('touchend', () => { isDown = false; });
  carrusel.addEventListener('touchcancel', () => { isDown = false; });
}

// 🚀 Activar swipe al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const carruseles = document.querySelectorAll('.carrusel-imagenes');
  carruseles.forEach(enableSwipeCarrusel);

  // Evita que los filtros activen el toggle
  document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', e => e.stopPropagation());
  });
});