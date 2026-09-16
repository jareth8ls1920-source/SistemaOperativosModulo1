RED BICICLETAS - PROYECTO MODULO 1
==================================

Aplicacion web construida con Node.js y Express que muestra un mapa de la
ciudad (Buenos Aires) con marcadores de ubicacion y administra una coleccion
de bicicletas en memoria, exponiendo tambien una API REST.

REQUISITOS
----------
- Node.js 18 o superior
- npm

INSTALACION
-----------
1. Clonar el repositorio:
   git clone <url-del-repositorio-bitbucket>
2. Entrar a la carpeta del proyecto e instalar dependencias:
   npm install

EJECUCION
---------
- Modo normal:
   npm start
- Modo desarrollo (reinicia solo al guardar cambios, usa nodemon):
   npm run devstart

La aplicacion queda disponible en http://localhost:3000

ESTRUCTURA DEL PROYECTO
-----------------------
app.js                                      Configuracion principal de Express
bin/www                                     Arranque del servidor HTTP
models/bicicleta.js                         Modelo Bicicleta y coleccion en memoria
controllers/bicicleta.js                    Controlador de las vistas web
controllers/api/bicicletaControllerAPI.js   Controlador de la API REST
routes/index.js                             Ruta de bienvenida (/)
routes/bicicletas.js                        Rutas web de bicicletas
routes/api/bicicletas.js                    Rutas de la API
views/                                      Vistas Pug (layout, inicio, bicicletas)
public/javascripts/map.js                   Mapa Leaflet centrado en la ciudad
public/stylesheets/style.css                Estilos

RUTAS WEB
---------
GET  /                        Mensaje de bienvenida y mapa con marcadores
GET  /bicicletas              Listado de bicicletas
GET  /bicicletas/create       Formulario de alta
POST /bicicletas/create       Crear bicicleta
GET  /bicicletas/:id/update   Formulario de edicion
POST /bicicletas/:id/update   Actualizar bicicleta
POST /bicicletas/:id/delete   Eliminar bicicleta

API REST (probar con Postman)
-----------------------------
GET    /api/bicicletas          Lista todas las bicicletas
POST   /api/bicicletas/create   Crea una bicicleta
POST   /api/bicicletas/update   Actualiza una bicicleta existente (por id)
DELETE /api/bicicletas/delete   Elimina una bicicleta (por id)

Ejemplo de cuerpo JSON (raw / JSON) para create y update:
{
  "id": 3,
  "color": "verde",
  "modelo": "montania",
  "lat": -34.6037,
  "lng": -58.3816
}

Ejemplo de cuerpo JSON para delete:
{
  "id": 3
}

DATOS INICIALES
---------------
El modelo carga en memoria dos bicicletas de ejemplo con ubicaciones cercanas
al centro del mapa (Obelisco y Plaza San Martin). Al reiniciar el servidor la
coleccion vuelve a su estado inicial.
