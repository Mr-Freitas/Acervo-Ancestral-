// CARROSSEL
const track = document.getElementById('track');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

next.addEventListener('click', () => {
  index++;
  applyPosition();
});

prev.addEventListener('click', () => {
  index--;
  applyPosition();
});

function applyPosition() {
  const cardWidth = 270; // largura + margin
  const maxIndex = track.children.length - 1;
  if (index < 0) index = 0;
  if (index > maxIndex) index = maxIndex;
  track.style.transform = `translateX(${-index * cardWidth}px)`;
}

// MAPA LEAFLET
const map = L.map('map').setView([-10.350, -40.200], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Quilombos (exemplo)
const quilombos = [
  { nome: "Quilombo 1", coord: [-10.32, -40.16] },
  { nome: "Quilombo 2", coord: [-10.41, -40.25] },
  { nome: "Quilombo 3", coord: [-10.28, -40.30] }
];

quilombos.forEach(q => {
  L.marker(q.coord).addTo(map).bindPopup(`<b>${q.nome}</b>`);
});
