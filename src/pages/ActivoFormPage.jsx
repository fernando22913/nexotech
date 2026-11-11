import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { activos } from '../data/mockData';

export default function ActivoFormPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    tipo: '',
    marca: '',
    modelo: '',
    serie: '',
    fechaCompra: '',
    ubicacion: '',
    responsable: '',
    estado: '',
    observaciones: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/activos');
  };

  return (
    <div>
      <Link to="/activos" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-4">
        <HiArrowLeft className="w-4 h-4" />
        Volver
      </Link>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-slate-800">Nuevo activo</h1>
          <Link to="/activos" className="text-sm text-slate-500 hover:text-slate-700">
            ← Volver
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-slate-800 mb-4">Datos del activo</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tipo *</label>
                  <select name="tipo" value={form.tipo} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Seleccionar</option>
                    <option value="Notebook">Notebook</option>
                    <option value="Monitor">Monitor</option>
                    <option value="Impresora">Impresora</option>
                    <option value="Teléfono">Teléfono</option>
                    <option value="Equipo de red">Equipo de red</option>
                    <option value="Desktop">Desktop</option>
                    <option value="Tablet">Tablet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Marca *</label>
                  <input type="text" name="marca" value={form.marca} onChange={handleChange} placeholder="Ej: Dell" className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Modelo *</label>
                  <input type="text" name="modelo" value={form.modelo} onChange={handleChange} placeholder="Ej: Latitude 5420" className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Serie</label>
                  <input type="text" name="serie" value={form.serie} onChange={handleChange} placeholder="Ej: 8F3KX201" className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Fecha de compra</label>
                  <input type="date" name="fechaCompra" value={form.fechaCompra} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-800 mb-4">Ubicación y responsable</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Ubicación actual *</label>
                  <select name="ubicacion" value={form.ubicacion} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Seleccionar</option>
                    <option value="Oficina 1">Oficina 1</option>
                    <option value="Oficina 2">Oficina 2</option>
                    <option value="Oficina 3">Oficina 3</option>
                    <option value="Bodega">Bodega</option>
                    <option value="Sala de reuniones">Sala de reuniones</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Responsable *</label>
                  <select name="responsable" value={form.responsable} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Seleccionar</option>
                    <option value="Carlos López">Carlos López</option>
                    <option value="Ana Torres">Ana Torres</option>
                    <option value="Luis Rojas">Luis Rojas</option>
                    <option value="María Pérez">María Pérez</option>
                    <option value="Pedro Díaz">Pedro Díaz</option>
                    <option value="Laura Sánchez">Laura Sánchez</option>
                    <option value="Roberto Vega">Roberto Vega</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Estado *</label>
                  <select name="estado" value={form.estado} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Seleccionar</option>
                    <option value="En uso">En uso</option>
                    <option value="Disponible">Disponible</option>
                    <option value="En reparación">En reparación</option>
                    <option value="Dados de baja">Dados de baja</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Observaciones</label>
                  <textarea name="observaciones" value={form.observaciones} onChange={handleChange} rows={4} placeholder="Ingrese observaciones..." className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-slate-100">
            <Link to="/activos" className="px-6 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              Cancelar
            </Link>
            <button type="submit" className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
