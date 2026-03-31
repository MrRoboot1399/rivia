const Asistente = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">

        <div className="card shadow-lg border-0 rounded-4 overflow-hidden">

          {/* Header */}
          <div className="card-header bg-light p-3 d-flex align-items-center gap-3">
            <div
              className="rounded-circle bg-success d-flex align-items-center justify-content-center"
              style={{ width: '50px', height: '50px' }}
            >
              <span className="text-white fw-bold">AI</span>
            </div>

            <div>
              <h5 className="mb-0 fw-bold">Asistente</h5>
              <small className="text-success">● En línea</small>
            </div>
          </div>

          {/* Área de mensajes */}
          <div
            className="card-body"
            style={{ height: '400px', overflowY: 'auto' }}
          >
            <div className="text-center text-muted mt-5">
              Aquí aparecerán los mensajes...
            </div>
          </div>

          {/* Input */}
          <div className="card-footer p-2 bg-white border-top overflow-hidden">
            <div className="d-flex w-100">

              {/* INPUT ACTIVO */}
              <input
                type="text"
                className="form-control"
                placeholder="Escribe tu duda aquí..."
              />

              {/* Botón sigue desactivado */}
              <button
                className="btn btn-success ms-2"
                disabled
              >
                Enviar
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Asistente;