import React from 'react';
import fotoAvatar from '../assets/AvatarRivia.png'; 

const Asistente = () => {
  return (
    <div 
      className="container-fluid vh-100 d-flex flex-column p-0"
      style={{ background: 'linear-gradient(135deg, #eef2f7, #e3e8ee)' }}
    >

      {/* CONTENIDO PRINCIPAL */}
      <div className="d-flex flex-grow-1">

        {/* SIDEBAR */}
        <div 
          className="p-4 border-end d-flex flex-column justify-content-between"
          style={{ width: '280px', background: '#ffffffcc', backdropFilter: 'blur(10px)' }}
        >

          <div>
            <h6 className="fw-bold mb-4">Accesos rápidos</h6>

            <div className="d-flex flex-column gap-3">

              <div className="p-3 rounded-4 shadow-sm border bg-success bg-opacity-10" style={{ cursor: 'pointer' }}>
                <div className="fs-3">📚</div>
                <h6 className="fw-bold mt-2">Cursos Ofertados</h6>
                <small className="text-muted">CTPI Cauca</small>
              </div>

              <div className="p-3 rounded-4 shadow-sm border bg-primary bg-opacity-10">
                <div className="fs-3">📅</div>
                <h6 className="fw-bold mt-2">Calendario</h6>
                <small className="text-muted">Fechas 2026</small>
              </div>

              <div className="p-3 rounded-4 shadow-sm border bg-warning bg-opacity-10">
                <div className="fs-3">📍</div>
                <h6 className="fw-bold mt-2">Nuestra Sede</h6>
                <small className="text-muted">Ubicación</small>
              </div>

            </div>
          </div>

          {/* Banner */}
          <div>
            <div className="alert bg-white border-start border-info border-4 rounded-4 shadow-sm p-3 mb-0">
              <small className="fw-bold d-block">💡 Convocatoria abierta</small>
              <small className="text-muted">Apoyos 2026 disponibles</small>
            </div>
          </div>

        </div>

        {/* MAIN */}
        <div className="flex-grow-1 d-flex flex-column">

          <div className="d-flex flex-grow-1 p-3 gap-2">

            {/* AVATAR + ESTADO */}
            <div 
              className="d-flex flex-column align-items-center text-center"
              style={{ width: '280px' }}
            >

              <img 
                src={fotoAvatar}
                alt="Avatar de Rivia"
                style={{ 
                  maxWidth: '560px',
                  maxHeight: '520px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />

              <div className="d-flex flex-column align-items-center mb-3">
                <small 
                  className="text-success fw-semibold"
                  style={{ marginTop: '-65px' }}
                >
                  ● En línea
                </small>
              </div>
            </div>

            {/* CHAT */}
            <div className="flex-grow-1 bg-white rounded-4 shadow-lg d-flex flex-column">

              {/* MENSAJES */}
              <div className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
                <div className="text-center text-muted mt-5">
                  <p>Hola 👋 Soy Rivia</p>
                  <p>Pregúntame lo que necesites</p>
                </div>
              </div>

              {/* INPUT */}
              <div className="p-3 border-top bg-white">

                <div 
                  className="d-flex align-items-center px-3 py-2 mx-auto"
                  style={{
                    maxWidth: '800px',
                    background: '#8888d8',
                    borderRadius: '30px',
                  }}
                >

                  <input 
                    type="text"
                    className="form-control border-0 bg-transparent"
                    placeholder="Escribe tu mensaje..."
                    style={{ 
                      background: 'transparent',
                      fontSize: '15px'
                    }}
                  />

                  <button 
                    className="btn btn-success rounded-circle ms-1 px-1"
                    style={{
                      width: '40px',
                      height: '40px'
                    }}
                  >
                    ➤
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="bg-success text-white text-center py-3 px-2" style={{ fontSize: '14px' }}>
        <p className="mb-1"><strong>Servicio Nacional de Aprendizaje SENA | CENTRO DE TELEINFORMÁTICA Y PRODUCCIÓN INDUSTRIAL | Regional Cauca</strong></p>
        <p className="mb-1"><strong>Dirección:</strong>  : Carrera 9 # 71 N 60 Barrio el Placer- Alto Cauca, Popayán</p>
        <p className="mb-1">El SENA brinda atención en 33 Regionales y 118 Centros de Formación</p>
        <p className="mb-1"><strong>Horario:</strong> Lunes a viernes 7:00 a.m. a 7:00 p.m. | Sábados 8:00 a.m. a 1:00 p.m.</p>
        <p className="mb-1"><strong>Teléfonos:</strong> Bogotá +(57) 601 736 60 60 | 018000910270</p>
        
      </footer>

    </div>
  );
};

export default Asistente;