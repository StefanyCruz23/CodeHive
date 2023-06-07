const Articulos = [
    {
      titulo: "IA y frontend: la combinación perfecta",
      categoria: "AI",
      fecha: "Marzo 2023"
    },
    {
        titulo: "¿Cómo mantenerte actualizado en frontend?",
        categoria: "Frontend",
        mes: "Abril 2023"
    },
    {
        titulo: "Evolución en el diseño web actual",
        categoria: "Tendencias",
        mes: "Mayo 2023"
    },
    {
        titulo: "Actualizaciones en lenguajes de frontend",
        categoria: "Frontend",
        mes: "Junio 2023"
    }
  ];
  
  const jsonArticulos = JSON.parse(JSON.stringify(Articulos));
  console.log(jsonArticulos);