
  // MAPA LEAFLET
  const map = L.map('map').setView([-10.350, -40.200], 9);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // Quilombos (coordenadas )
  const quilombos = [
    { nome: "TIJUAÇU", coord: [-10.62258810061011, -40.13124074232759] },
    { nome: "JIBOIA", coord: [-10.591588595105287, -40.2505876865086] },
    { nome: "LAGE DOS NEGROS", coord: [-10.182900249150576, -40.96095980128885] }
  ];

  quilombos.forEach(q => {
    L.marker(q.coord).addTo(map).bindPopup(`<b>${q.nome}</b>`);
  });


map.getContainer().addEventListener('wheel', function (e) {
    if (e.altKey) {
        map.scrollWheelZoom.enable();
    } else {
        map.scrollWheelZoom.disable();
    }
});

// Criar mensagem dentro do mapa
const aviso = L.control({ position: 'bottomleft' });

aviso.onAdd = function () {
    const div = L.DomUtil.create('div', 'aviso-ctrl');
    div.innerHTML = "Segure <b>Alt</b> para dar zoom no mapa";
    return div;
};

aviso.addTo(map);

map.getContainer().addEventListener('wheel', function (e) {
    if (e.altKey) {
        map.scrollWheelZoom.enable();

        // remover mensagem após usar CTRL
        const box = document.querySelector('.aviso-ctrl');
        if (box) box.style.display = "none";

    } else {
        map.scrollWheelZoom.disable();
    }
});




