// Mapa centrado en Buenos Aires, Argentina.
var map = L.map('main_map').setView([-34.6012424, -58.3861497], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marcadores fijos indicando ubicaciones en la ciudad.
L.marker([-34.6012424, -58.3861497]).addTo(map).bindPopup('Obelisco - Centro de Buenos Aires');
L.marker([-34.596932, -58.3808287]).addTo(map).bindPopup('Plaza San Martin');
L.marker([-34.6007937, -58.3760556]).addTo(map).bindPopup('Puerto Madero');

// Marcadores dinamicos: bicicletas obtenidas desde la API.
fetch('/api/bicicletas')
  .then(function (res) { return res.json(); })
  .then(function (data) {
    data.bicicletas.forEach(function (bici) {
      L.marker(bici.ubicacion, { title: 'Bicicleta ' + bici.id })
        .addTo(map)
        .bindPopup('Bicicleta ' + bici.id + ' - ' + bici.color + ' (' + bici.modelo + ')');
    });
  })
  .catch(function (err) { console.error('Error cargando bicicletas:', err); });
