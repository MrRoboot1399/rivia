import Asistente from "./Asistente";
import Noticias from "./Noticias";
import Login from "./Login";

function Dashboard({ vista }) {
  return (
    <div className="container-fluid">
      {vista === 'asistente' && <Asistente />}
      {vista === 'noticias' && <Noticias />}
      {vista === 'login' && <Login />}
    </div>
  );
}

export default Dashboard;