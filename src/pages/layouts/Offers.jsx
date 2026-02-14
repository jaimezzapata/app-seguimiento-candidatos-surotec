import NavBar from '../../components/NavBar'
import '../styles/Offers.css'

function Offers() {
    return (
        <div className="offers-page">
            <NavBar />
            <main className="offers-container">
                <div className="page-header">
                    <h1>Ofertas de Empleo</h1>
                    <p>Listado de ofertas laborales disponibles</p>
                </div>

                <div className="offers-grid">
                    <div className="offer-card">
                        <div className="card-header">
                            <span className="card-id">ID: 101</span>
                            <span className="status-badge status-open">ABIERTA</span>
                        </div>
                        <div className="card-body">
                            <h3 className="offer-title">Senior Frontend Developer</h3>
                            <div className="card-info">
                                <label>Departamento:</label>
                                <span>Engineering</span>
                            </div>
                            <div className="card-info">
                                <label>Rango Salarial:</label>
                                <span className="salary">60k-80k</span>
                            </div>
                            <div className="card-info">
                                <label>Creado por ID:</label>
                                <span>2</span>
                            </div>
                        </div>
                    </div>

                    <div className="offer-card">
                        <div className="card-header">
                            <span className="card-id">ID: 102</span>
                            <span className="status-badge status-open">ABIERTA</span>
                        </div>
                        <div className="card-body">
                            <h3 className="offer-title">Backend Developer</h3>
                            <div className="card-info">
                                <label>Departamento:</label>
                                <span>Engineering</span>
                            </div>
                            <div className="card-info">
                                <label>Rango Salarial:</label>
                                <span className="salary">55k-75k</span>
                            </div>
                            <div className="card-info">
                                <label>Creado por ID:</label>
                                <span>2</span>
                            </div>
                        </div>
                    </div>

                    <div className="offer-card">
                        <div className="card-header">
                            <span className="card-id">ID: 103</span>
                            <span className="status-badge status-closed">CERRADA</span>
                        </div>
                        <div className="card-body">
                            <h3 className="offer-title">UI/UX Designer</h3>
                            <div className="card-info">
                                <label>Departamento:</label>
                                <span>Design</span>
                            </div>
                            <div className="card-info">
                                <label>Rango Salarial:</label>
                                <span className="salary">45k-60k</span>
                            </div>
                            <div className="card-info">
                                <label>Creado por ID:</label>
                                <span>3</span>
                            </div>
                        </div>
                    </div>

                    <div className="offer-card">
                        <div className="card-header">
                            <span className="card-id">ID: 104</span>
                            <span className="status-badge status-open">ABIERTA</span>
                        </div>
                        <div className="card-body">
                            <h3 className="offer-title">DevOps Engineer</h3>
                            <div className="card-info">
                                <label>Departamento:</label>
                                <span>Engineering</span>
                            </div>
                            <div className="card-info">
                                <label>Rango Salarial:</label>
                                <span className="salary">70k-90k</span>
                            </div>
                            <div className="card-info">
                                <label>Creado por ID:</label>
                                <span>2</span>
                            </div>
                        </div>
                    </div>

                    <div className="offer-card">
                        <div className="card-header">
                            <span className="card-id">ID: 105</span>
                            <span className="status-badge status-open">ABIERTA</span>
                        </div>
                        <div className="card-body">
                            <h3 className="offer-title">Product Manager</h3>
                            <div className="card-info">
                                <label>Departamento:</label>
                                <span>Product</span>
                            </div>
                            <div className="card-info">
                                <label>Rango Salarial:</label>
                                <span className="salary">80k-100k</span>
                            </div>
                            <div className="card-info">
                                <label>Creado por ID:</label>
                                <span>1</span>
                            </div>
                        </div>
                    </div>

                    <div className="offer-card">
                        <div className="card-header">
                            <span className="card-id">ID: 106</span>
                            <span className="status-badge status-paused">PAUSADA</span>
                        </div>
                        <div className="card-body">
                            <h3 className="offer-title">Data Scientist</h3>
                            <div className="card-info">
                                <label>Departamento:</label>
                                <span>Data</span>
                            </div>
                            <div className="card-info">
                                <label>Rango Salarial:</label>
                                <span className="salary">75k-95k</span>
                            </div>
                            <div className="card-info">
                                <label>Creado por ID:</label>
                                <span>3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Offers