import React from 'react';
import fotoAvatar from '../assets/AvatarRivia.jpeg'; 

const Asistente = () => {
  
  return (
    <div className="container-fluid py-5" style={{ background: '#F5F7FA' }}>
      
      {/* MENÚ FLOTANTE */}
      <div 
        className="position-fixed bottom-0 end-0 m-4 d-flex flex-column gap-3" 
        style={{ zIndex: 1050 }}
      >
      </div>

      <div className="row">
        <div className="col-12 px-lg-5">

          {/* --- PIEZA 1: CHAT --- */}
          <div 
            className="card shadow-lg  bg-succes border-2 rounded-3 overflow-hidden mb-5 w-100"
            
          >
            
            {/* Header */}
            <div className="card-header bg-white p-3 d-flex align-items-center gap-2">
              <div 
                className="rounded-circle bg-success d-flex align-items-center justify-content-center" 
                style={{ width: '45px', height: '45px' }}
              >
                <span className="text-white fw-bold">AI</span>
              </div>

              <div>
                <h6 className="mb-1 fw-bold">Chat de Soporte</h6>
                <small className="text-success">● En línea</small>
              </div>
            </div>

            {/* Body */}
            <div 
              className="card-body bg-white d-flex  align-items-center justify-content-center" 
              style={{ height: '200px', overflowY: 'auto' }}
            >
              <div className="text-center text-muted px-3">
                <p className="mb-3">
                  ¡Bienvenido! Haz clic en una sugerencia o escribe abajo.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="card-footer p-3 bg-white border-top">
              <div className="d-flex gap-2">
                <input 
                  type="text" 
                  className="form-control rounded-pill border-2" 
                  placeholder="Escribe tu duda aquí..." 
                />

                <button className="btn btn-success rounded-circle shadow-sm px-3 border-0">
                  ➤
                </button>
              </div>
            </div>

          </div>

          {/* --- PIEZA 2: AVATAR --- */}
          <div className="d-flex flex-column flex-md-row align-items-center gap-5 mb-5">

            <img 
              src={fotoAvatar}
              alt="Avatar de Rivia"
              className="rounded-4 shadow"
              style={{ 
                width: '250px',  
                height: '320px',
                objectFit: 'cover'
              }}
            />

            <div className="text-center text-md-start">
              <h5 className="fw-bold text-center text-md-start text-dark mb-2 fs-3">
                Soy Rivia, tu asistente virtual
              </h5>

              <p className="text-muted mb-0 fs-5">
                Puedo ayudarte con información sobre programas,
                inscripciones, eventos y resolver tus dudas en tiempo real.
              </p>
            </div>

          </div>

          {/* --- PIEZA 3: PANEL --- */}
          <div className="mt-5 p-4 bg-white rounded-5 shadow-sm border border-success w-100">

            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold text-dark m-0">
                Accesos Rápidos y Novedades
              </h5>

              <span className="badge bg-white text-success border border-success rounded-pill px-3 py-2">
              </span>
            </div>
            
            <div className="row g-4 text-center">

              {/* Card 1 */}
              <div className="col-md-4">
                <div className="p-4 rounded-4 shadow-sm h-100 border bg-success bg-opacity-10" style={{ cursor: 'pointer' }}>
                  <div className="text-success mb-2 fs-2">📚</div>
                  <h6 className="fw-bold mb-1">Cursos Ofertados CTPI</h6>
                  <small className="text-muted d-block mt-2">
                    Técnicos y Tecnólogos Cauca
                  </small>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4">
                <div className="p-4 rounded-4 shadow-sm h-100 border bg-primary bg-opacity-10" style={{ cursor: 'pointer' }}>
                  <div className="text-primary mb-2 fs-2">📅</div>
                  <h6 className="fw-bold mb-1">Calendario Presencial</h6>
                  <small className="text-muted d-block mt-2">
                    Cronograma Fechas 2026
                  </small>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4">
                <div className="p-4 rounded-4 shadow-sm h-100 border bg-warning bg-opacity-10" style={{ cursor: 'pointer' }}>
                  <div className="text-warning mb-2 fs-2">📍</div>
                  <h6 className="fw-bold mb-1">Conoce Nuestra Sede</h6>
                  <small className="text-muted d-block mt-2">
                    Ubicación y Contacto
                  </small>
                </div>
              </div>

              {/* Banner */}
              <div className="col-12 mt-4">
                <div className="alert bg-white border-start border-info border-4 rounded-4 shadow-sm d-flex align-items-center gap-3 py-3 px-4 mb-0">
                  <span className="fs-4">💡</span>
                  <div className="text-start">
                    <h6 className="fw-bold mb-0 small text-uppercase">
                      Nueva Convocatoria 1-26
                    </h6>
                    <small className="text-muted">
                      Apoyos de Sostenimiento Regular - ¡Postúlate ahora!
                    </small>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Asistente;