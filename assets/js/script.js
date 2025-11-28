  

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




// Conteúdo dos flashcards
const informacoes = [
    { titulo: "Zumbi dos Palmares", texto: "Importância: É um dos maiores símbolos da resistência contra a escravidão no Brasil. Foi o último líder do Quilombo dos Palmares, o mais famoso e duradouro quilombo do período colonial, que representava um modelo de organização social e liberdade para os africanos escravizados.\nLegado: Sua morte em 20 de novembro é celebrada como o Dia Nacional da Consciência Negra, reforçando a luta por igualdade e o reconhecimento da herança africana." },
    { titulo: "Flashcard 2", texto: "Informações completas do flashcard 2." },
    { titulo: "Flashcard 3", texto: "Informações completas do flashcard 3." },
    { titulo: "Flashcard 4", texto: "Informações completas do flashcard 4." },
    { titulo: "Flashcard 5", texto: "Informações completas do flashcard 5." },
];

const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const textoModal = document.getElementById("textoModal");
const fechar = document.querySelector(".fechar");

// Seleciona TODOS os flashcards (nos dois grupos)
const cards = document.querySelectorAll(".flashCard");

