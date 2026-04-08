import React from 'react';
import fotoAvatar from '../assets/AvatarRivia.png';
import bannerCTPI from '../assets/ctpi-banner.png';

import Calendario from './Calendario';
import CursoOfertados from './CursoOfertados';
import Sede from './Sede';

const Asistente = () => {
  const [seccionActiva, setSeccionActiva] = React.useState('');
  const mostrarInicio = seccionActiva === '';

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh', background: '#eef2f7' }}>

      {/* ================= HERO FULL WIDTH ================= */}
      {mostrarInicio && (
        <div style={{ width: '100%' }}>

          <img
            src={bannerCTPI}
            alt="CTPI banner"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }}
          />

        </div>
      )}

      {/* ================= BODY ================= */}
      <div className="container-fluid flex-grow-1 py-4">

        <div className="row g-3">

          {/* ================= LEFT ================= */}
          {mostrarInicio && (
            <div className="col-12 col-lg-3">

              <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center">

                <img
                  src={fotoAvatar}
                  alt="avatar"
                  style={{
                    width: '170px',
                    borderRadius: '20px'
                  }}
                />

                <div className="text-success fw-semibold mt-3">
                  ● Rivia en línea
                </div>

              </div>
            </div>
          )}

          {/* ================= CENTER ================= */}
          <div className={mostrarInicio ? "col-12 col-lg-6" : "col-12"}>

            {/* PANEL */}
            <div className="bg-white rounded-4 shadow-lg p-4" style={{ minHeight: '450px' }}>

              {!mostrarInicio && (
                <button
                  className="btn btn-light btn-sm rounded-pill mb-3"
                  onClick={() => setSeccionActiva('')}
                >
                  ← Volver
                </button>
              )}

              {mostrarInicio && (
                <div className="text-center text-muted mt-5">
                  <h5>Hola 👋 soy Rivia</h5>
                  <p>Selecciona una opción o escribe tu consulta</p>
                </div>
              )}

              {seccionActiva === 'cursos' && <CursoOfertados />}
              {seccionActiva === 'calendario' && <Calendario />}
              {seccionActiva === 'sede' && <Sede />}

            </div>

            {/* CHAT */}
            {mostrarInicio && (
              <div className="mt-3 bg-white p-2 rounded-pill shadow-sm d-flex align-items-center">

                <input
                  className="form-control border-0"
                  placeholder="Escribe tu mensaje..."
                />

                <button className="btn btn-success rounded-circle ms-2">
                  <i className="bi bi-send-fill"></i>
                </button>

              </div>
            )}

          </div>

          {/* ================= RIGHT ================= */}
          {mostrarInicio && (
            <div className="col-12 col-lg-3">

              <div className="d-flex flex-column gap-3">

                <div
                  className="bg-white rounded-4 shadow-sm p-3 text-center"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSeccionActiva('cursos')}
                >
                  <i className="bi bi-journal-bookmark-fill fs-3 text-success"></i>
                  <div className="fw-bold mt-2">Cursos</div>
                </div>

                <div
                  className="bg-white rounded-4 shadow-sm p-3 text-center"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSeccionActiva('calendario')}
                >
                  <i className="bi bi-calendar-event-fill fs-3 text-primary"></i>
                  <div className="fw-bold mt-2">Calendario</div>
                </div>

                <div
                  className="bg-white rounded-4 shadow-sm p-3 text-center"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSeccionActiva('sede')}
                >
                  <i className="bi bi-geo-alt-fill fs-3 text-warning"></i>
                  <div className="fw-bold mt-2">Sede</div>
                </div>

                <div className="bg-white rounded-4 shadow-sm p-3 text-center">
                  <i className="bi bi-headset fs-3 text-dark"></i>
                  <div className="fw-bold mt-2">Soporte</div>
                </div>

              </div>

            </div>
          )}

        </div>
      </div>

      {/* FOOTER (NO TOCAR) */}
      <footer className="bg-success text-white text-center py-3 px-2" style={{ fontSize: '14px' }}>
        <p className="mb-1"><strong>Servicio Nacional de Aprendizaje SENA | CENTRO DE TELEINFORMÁTICA Y PRODUCCIÓN INDUSTRIAL | Regional Cauca</strong></p>
        <p className="mb-1"><strong>Dirección:</strong> Carrera 9 # 71 N 60 Barrio el Placer- Alto Cauca, Popayán</p>
        <p className="mb-1">El SENA brinda atención en 33 Regionales y 118 Centros de Formación</p>
        <p className="mb-1"><strong>Horario:</strong> Lunes a viernes 7:00 a.m. a 7:00 p.m. | Sábados 8:00 a.m. a 1:00 p.m.</p>
        <p className="mb-1"><strong>Teléfonos:</strong> Bogotá +(57) 601 736 60 60 | 018000910270</p>
      </footer>

    </div>
  );
};

export default Asistente;