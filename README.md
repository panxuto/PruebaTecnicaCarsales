# PruebaTecnicaCarsales

Este proyecto fue desarrollado en Angular como parte de una prueba técnica. La aplicación consume datos de la API pública de Rick and Morty para mostrar una lista de episodios, permite filtrar episodios por nombre, y muestra detalles de un episodio seleccionado. Además, implementa una arquitectura Backend for Frontend (BFF) para el consumo de servicios.

## Funcionalidades principales

Lista de episodios: Muestra todos los episodios de la API de Rick and Morty.

Filtro: Permite filtrar episodios por nombre.

Detalles del episodio: Al hacer clic en un episodio, se muestra información detallada, como la fecha de emisión, el código del episodio y los personajes asociados.

Arquitectura BFF: Un servidor en Node.js actúa como intermediario entre la aplicación Angular y la API de Rick and Morty.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

Node.js (versión 18 o superior)

Angular CLI (versión 15 o superior)

Para instalar Angular CLI globalmente, ejecuta:
```bash
npm install -g @angular/cli
```


# Cómo ejecutar el proyecto

### 1. Clonar el repositorio

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/panxuto/PruebaTecnicaCarsales.git
cd PruebaTecnicaCarsales
```

### 2. Instalar dependencias del frontend

Instala las dependencias necesarias para el proyecto Angular:
```bash
npm install
```

### 3. Configurar y ejecutar el BFF

Ve a la carpeta bff:
```bash
cd bff
```

Instala las dependencias del backend:
```bash
npm install
```
Inicia el servidor BFF:
```bash
node index.js
```
Esto levantará el servidor en http://localhost:3000.

### 4. Ejecutar el servidor de desarrollo Angular

Regresa a la carpeta raíz del proyecto:
```bash
cd ..
```
Inicia el servidor de desarrollo Angular:
```bash
ng serve
```
Abre tu navegador en http://localhost:4200.

#Cómo probar las funcionalidades

Lista de episodios: La lista aparece automáticamente al abrir la aplicación.

Filtro: Escribe un texto en el campo "Filtrar Episodios por Nombre" para filtrar los episodios.

Detalles del episodio: Haz clic en un episodio para ver su detalle en la parte derecha de la pantalla

# Información adicional
API utilizada: Rick and Morty API
Arquitectura: El proyecto implementa una arquitectura Backend for Frontend (BFF) para mejorar la seguridad y el control de las solicitudes hacia la API externa.


