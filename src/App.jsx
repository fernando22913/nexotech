import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import ActivosPage from './pages/ActivosPage';
import ActivoDetailPage from './pages/ActivoDetailPage';
import ActivoFormPage from './pages/ActivoFormPage';
import MovimientosPage from './pages/MovimientosPage';
import ReportesPage from './pages/ReportesPage';
import UsuariosPage from './pages/UsuariosPage';
import ConfiguracionPage from './pages/ConfiguracionPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/activos" element={<ActivosPage />} />
          <Route path="/activos/nuevo" element={<ActivoFormPage />} />
          <Route path="/activos/:id" element={<ActivoDetailPage />} />
          <Route path="/activos/:id/editar" element={<ActivoFormPage />} />
          <Route path="/movimientos" element={<MovimientosPage />} />
          <Route path="/reportes" element={<ReportesPage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
          <Route path="/configuracion" element={<ConfiguracionPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
