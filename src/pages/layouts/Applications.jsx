import "../styles/Aapplications.css";
import NavBar from "../../components/NavBar";

function Applications() {
  return (
    <div className="applications-page">
      <NavBar />
      <main className="applications-container">
        <div className="page-header">
          <h1>Aplicaciones</h1>
          <p>Listado de aplicaciones de candidatos a ofertas</p>
        </div>

        <div className="applications-grid">
          <div className="application-card">
            <div className="card-header">
              <span className="card-id">ID: 501</span>
              <span className="status-badge status-pending">PENDIENTE</span>
            </div>
            <div className="card-body">
              <div className="card-info">
                <label>Candidato ID:</label>
                <span>1001</span>
              </div>
              <div className="card-info">
                <label>Oferta ID:</label>
                <span>101</span>
              </div>
              <div className="card-info">
                <label>Fecha:</label>
                <span>2023-10-01</span>
              </div>
            </div>
          </div>

          <div className="application-card">
            <div className="card-header">
              <span className="card-id">ID: 502</span>
              <span className="status-badge status-approved">APROBADO</span>
            </div>
            <div className="card-body">
              <div className="card-info">
                <label>Candidato ID:</label>
                <span>1002</span>
              </div>
              <div className="card-info">
                <label>Oferta ID:</label>
                <span>102</span>
              </div>
              <div className="card-info">
                <label>Fecha:</label>
                <span>2023-10-05</span>
              </div>
            </div>
          </div>

          <div className="application-card">
            <div className="card-header">
              <span className="card-id">ID: 503</span>
              <span className="status-badge status-rejected">RECHAZADO</span>
            </div>
            <div className="card-body">
              <div className="card-info">
                <label>Candidato ID:</label>
                <span>1003</span>
              </div>
              <div className="card-info">
                <label>Oferta ID:</label>
                <span>103</span>
              </div>
              <div className="card-info">
                <label>Fecha:</label>
                <span>2023-10-08</span>
              </div>
            </div>
          </div>

          <div className="application-card">
            <div className="card-header">
              <span className="card-id">ID: 504</span>
              <span className="status-badge status-pending">PENDIENTE</span>
            </div>
            <div className="card-body">
              <div className="card-info">
                <label>Candidato ID:</label>
                <span>1004</span>
              </div>
              <div className="card-info">
                <label>Oferta ID:</label>
                <span>104</span>
              </div>
              <div className="card-info">
                <label>Fecha:</label>
                <span>2023-10-12</span>
              </div>
            </div>
          </div>

          <div className="application-card">
            <div className="card-header">
              <span className="card-id">ID: 505</span>
              <span className="status-badge status-approved">APROBADO</span>
            </div>
            <div className="card-body">
              <div className="card-info">
                <label>Candidato ID:</label>
                <span>1005</span>
              </div>
              <div className="card-info">
                <label>Oferta ID:</label>
                <span>105</span>
              </div>
              <div className="card-info">
                <label>Fecha:</label>
                <span>2023-10-15</span>
              </div>
            </div>
          </div>

          <div className="application-card">
            <div className="card-header">
              <span className="card-id">ID: 506</span>
              <span className="status-badge status-pending">PENDIENTE</span>
            </div>
            <div className="card-body">
              <div className="card-info">
                <label>Candidato ID:</label>
                <span>1006</span>
              </div>
              <div className="card-info">
                <label>Oferta ID:</label>
                <span>106</span>
              </div>
              <div className="card-info">
                <label>Fecha:</label>
                <span>2023-10-18</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Applications;
