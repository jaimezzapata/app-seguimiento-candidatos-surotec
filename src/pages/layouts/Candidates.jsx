import NavBar from '../../components/NavBar'
import '../styles/Candidates.css'

function Candidates() {
    return (
        <div className="candidates-page">
            <NavBar />
            <main className="candidates-container">
                <div className="page-header">
                    <h1>Candidatos</h1>
                    <p>Listado de candidatos registrados en el sistema</p>
                </div>

                <div className="candidates-grid">
                    <div className="candidate-card">
                        <div className="card-header">
                            <span className="card-id">ID: 1001</span>
                        </div>
                        <div className="card-body">
                            <h3 className="candidate-name">Juan Pérez</h3>
                            <div className="card-info">
                                <label>Email:</label>
                                <span>juan.perez@mail.com</span>
                            </div>
                            <div className="skills-section">
                                <label>Habilidades:</label>
                                <div className="skills-list">
                                    <span className="skill-tag">React</span>
                                    <span className="skill-tag">CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="candidate-card">
                        <div className="card-header">
                            <span className="card-id">ID: 1002</span>
                        </div>
                        <div className="card-body">
                            <h3 className="candidate-name">María González</h3>
                            <div className="card-info">
                                <label>Email:</label>
                                <span>maria.gonzalez@mail.com</span>
                            </div>
                            <div className="skills-section">
                                <label>Habilidades:</label>
                                <div className="skills-list">
                                    <span className="skill-tag">JavaScript</span>
                                    <span className="skill-tag">Node.js</span>
                                    <span className="skill-tag">MongoDB</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="candidate-card">
                        <div className="card-header">
                            <span className="card-id">ID: 1003</span>
                        </div>
                        <div className="card-body">
                            <h3 className="candidate-name">Carlos Rodríguez</h3>
                            <div className="card-info">
                                <label>Email:</label>
                                <span>carlos.rodriguez@mail.com</span>
                            </div>
                            <div className="skills-section">
                                <label>Habilidades:</label>
                                <div className="skills-list">
                                    <span className="skill-tag">Python</span>
                                    <span className="skill-tag">Django</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="candidate-card">
                        <div className="card-header">
                            <span className="card-id">ID: 1004</span>
                        </div>
                        <div className="card-body">
                            <h3 className="candidate-name">Ana Martínez</h3>
                            <div className="card-info">
                                <label>Email:</label>
                                <span>ana.martinez@mail.com</span>
                            </div>
                            <div className="skills-section">
                                <label>Habilidades:</label>
                                <div className="skills-list">
                                    <span className="skill-tag">Java</span>
                                    <span className="skill-tag">Spring</span>
                                    <span className="skill-tag">MySQL</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="candidate-card">
                        <div className="card-header">
                            <span className="card-id">ID: 1005</span>
                        </div>
                        <div className="card-body">
                            <h3 className="candidate-name">Luis Fernández</h3>
                            <div className="card-info">
                                <label>Email:</label>
                                <span>luis.fernandez@mail.com</span>
                            </div>
                            <div className="skills-section">
                                <label>Habilidades:</label>
                                <div className="skills-list">
                                    <span className="skill-tag">Vue.js</span>
                                    <span className="skill-tag">TypeScript</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="candidate-card">
                        <div className="card-header">
                            <span className="card-id">ID: 1006</span>
                        </div>
                        <div className="card-body">
                            <h3 className="candidate-name">Laura Sánchez</h3>
                            <div className="card-info">
                                <label>Email:</label>
                                <span>laura.sanchez@mail.com</span>
                            </div>
                            <div className="skills-section">
                                <label>Habilidades:</label>
                                <div className="skills-list">
                                    <span className="skill-tag">HTML</span>
                                    <span className="skill-tag">CSS</span>
                                    <span className="skill-tag">Figma</span>
                                    <span className="skill-tag">UI/UX</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Candidates