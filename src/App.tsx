import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormChamado from './components/FormChamado';
import Admin from './pages/Admin';
import './styles/main.scss';
import { useEffect } from 'react';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <h1>EletroSolar & Climatização</h1>
          <ul>
            <li><Link to="/">Abrir Chamado</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<FormChamado />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} EletroSolar & Climatização. Todos os direitos reservados.</p>
          <p>Andorinha – Bahia</p>
          <button id="themeToggleRodape">Alternar Tema</button>
        </footer>

      </main>
    </Router>
  );
  useEffect(() => {
    const btnRodape = document.getElementById('themeToggleRodape');
    if (btnRodape) {
      btnRodape.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
      });
    }
  
    return () => {
      // cleanup ao desmontar
      if (btnRodape) {
        btnRodape.removeEventListener('click', () => {
          document.body.classList.toggle('dark-theme');
        });
      }
    };
  }, []);
}

export default App;
