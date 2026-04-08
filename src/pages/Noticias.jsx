function Noticias() {

  const noticias = [
    {
      titulo: "Feria Empresarial 2026",
      descripcion: "El CTPI realizó su Primera Feria Empresarial 2026, donde los aprendices expusieron sus emprendimientos.",
      imagen: "/img/feria.jpg"
    },
    {
      titulo: "Jornada de Plogging",
      descripcion: "Aprendices participaron en una jornada de plogging, combinando actividad física con el cuidado del medio ambiente.",
      imagen: "/img/plogging.jpg"
    },
    {
      titulo: "Designación de Aprendices Monitores",
      descripcion: "Se llevó a cabo la designación de aprendices monitores para la convocatoria I-2026.",
      imagen: "/img/monitores.jpg"
    },
    {
      titulo: "Celebración del Día del Hombre",
      descripcion: "El CTPI celebró el Día del Hombre con actividades recreativas.",
      imagen: "/img/dia-hombre.jpg"
    },
    {
      titulo: "Comité Técnico del CTPI",
      descripcion: "Se evaluaron avances institucionales y nuevas estrategias.",
      imagen: "/img/comite.jpg"
    },
    {
      titulo: "Proyectos de Dibujo y Modelado",
      descripcion: "Aprendices presentaron sus proyectos finales.",
      imagen: "/img/proyectos.jpg"
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Noticias SENA</h2>

      <div className="row">
        {noticias.map((n, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card shadow-sm h-100">
              
              {/* Imagen */}
              <img 
                src={n.imagen} 
                className="card-img-top" 
                alt={n.titulo}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{n.titulo}</h5>
                <p>{n.descripcion}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noticias;