export const customMapStyle = [
  // 1. Ocultar Puntos de Interés para mantener limpio el mapa
  {
    featureType: "poi",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  // 2. Fondo de la tierra (limpio y claro)
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#f4f0f2" }], // Un gris con matiz rosa muy suave
  },
  // 3. Autopistas y avenidas principales (Paseo Tollocan, etc.) con gran contraste
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ color: "#ffffff" }], // Relleno blanco brillante
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#e91e63" }], // Trazo con tu rosa principal para que resalten al instante
  },
  // 4. Carreteras arteriales y principales secundarias
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.stroke",
    stylers: [{ color: "#f0d0d8" }], // Trazo rosa suave pero visible
  },
  // 5. Calles locales (más delgadas y discretas)
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  // 6. Textos y nombres de calles en un tono oscuro para alta legibilidad
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#4a5568" }], // Gris oscuro muy legible
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#ffffff", weight: 2 }], // Borde blanco alrededor del texto para que no se pierda
  },
  // 7. Agua en un tono rosa pastel elegante
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#fce4ec" }],
  },
];
