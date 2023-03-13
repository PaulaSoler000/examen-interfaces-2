//mapa
var map = L.map('map').setView([36.720876, -4.416964], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

fetch('https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/rutas_arqueologicas.json?classId=a44f2eea-e51b-4a7a-a11a-eefc73428d1a&assignmentId=b6d46e1e-b651-43e1-b861-1d6ba465dd82&submissionId=ce763aec-44ed-e99d-ad52-bc71f8355b4c')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const latLng = [item.properties.x, item.properties.y];
      const name = item.properties.nombre;
      const address = item.properties.direccion;

      L.marker(latLng)
        .addTo(map)
        .bindPopup(`<b>${name}</b><br>${address}`);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });


  //lista
var plantilla = document.querySelector("template")

document.addEventListener("DOMContentLoaded", cargarDatos);

function cargarDatos(){
    const url ="https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/rutas_arqueologicas.json?classId=a44f2eea-e51b-4a7a-a11a-eefc73428d1a&assignmentId=b6d46e1e-b651-43e1-b861-1d6ba465dd82&submissionId=ce763aec-44ed-e99d-ad52-bc71f8355b4c"
  fetch(url)
  .then(response => response.json())
  .then(data =>{ 

    const lista = document.querySelector('ul');

    data.forEach(item =>{

        let nuevaFila = plantilla.content.cloneNode(true)
        nuevaFila.querySelector(".nombre").textContent = item.properties.nombre
        nuevaFila.querySelector(".horario").textContent = item.properties.horario
        nuevaFila.querySelector(".direccion").textContent = item.properties.direccion
        nuevaFila.querySelector(".telefono").textContent = item.properties.telefono

        lista.appendChild(nuevaFila)
    })

  });
  }

