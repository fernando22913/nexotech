import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiPencil } from 'react-icons/hi';
import { activos, movimientos } from '../data/mockData';
import Badge from '../components/common/Badge';

const tabs = ['Información general', 'Movimientos', 'Reparaciones', 'Historial'];

export default function ActivoDetailPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activo = activos[0];
  const activoMovimientos = movimientos.filter(m => m.activoCodigo === activo.codigo);

  return (
    <div>
      <Link to="/activos" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-4">
        <HiArrowLeft className="w-4 h-4" />
        Volver al listado
      </Link>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">{activo.marca} {activo.modelo} ({activo.codigo})</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-slate-500">{activo.tipo}</span>
                <span className="text-slate-300">·</span>
                <span className="text-sm text-slate-500">{activo.marca}</span>
                <span className="text-slate-300">·</span>
                <span className="text-sm text-slate-500">{activo.modelo}</span>
                <Badge estado={activo.estado} />
              </div>
            </div>
          </div>
          <Link
            to={`/activos/${activo.id}/editar`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <HiPencil className="w-4 h-4" />
            Editar
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="border-b border-slate-100">
          <nav className="flex">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === i
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-800 mb-4">Datos del activo</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-sm text-slate-500">Código:</dt>
                    <dd className="text-sm font-medium text-slate-800">{activo.codigo}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-slate-500">Tipo:</dt>
                    <dd className="text-sm font-medium text-slate-800">{activo.tipo}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-slate-500">Marca / Modelo:</dt>
                    <dd className="text-sm font-medium text-slate-800">{activo.marca} {activo.modelo}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-slate-500">Serie:</dt>
                    <dd className="text-sm font-medium text-slate-800">{activo.serie}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-slate-500">Fecha de compra:</dt>
                    <dd className="text-sm font-medium text-slate-800">{activo.fechaCompra}</dd>
                  </div>
                  <div className="flex justify-between items-center">
                    <dt className="text-sm text-slate-500">Estado:</dt>
                    <dd><Badge estado={activo.estado} /></dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-800 mb-4">Ubicación y responsable</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-sm text-slate-500">Ubicación actual:</dt>
                    <dd className="text-sm font-medium text-slate-800">{activo.ubicacion}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-slate-500">Responsable:</dt>
                    <dd className="text-sm font-medium text-slate-800">{activo.responsable}</dd>
                  </div>
                </dl>
                <h3 className="text-sm font-semibold text-slate-800 mt-6 mb-2">Observaciones</h3>
                <p className="text-sm text-slate-600">{activo.observaciones}</p>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="space-y-4">
              {activoMovimientos.filter(m => m.tipo !== 'Alta').map((mov) => (
                <div key={mov.id} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-800">{mov.tipo}</p>
                    <p className="text-sm text-slate-500">{mov.descripcion}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">{mov.fecha}</p>
                    <p className="text-xs text-slate-400">{mov.responsable}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div className="text-center py-8 text-slate-400">
              <p>No hay registros de reparaciones para este activo.</p>
            </div>
          )}

          {activeTab === 3 && (
            <div className="space-y-4">
              {activoMovimientos.map((mov) => (
                <div key={mov.id} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full ${
                    mov.tipo === 'Alta' ? 'bg-green-500' :
                    mov.tipo === 'Traslado' ? 'bg-blue-500' :
                    mov.tipo === 'Reparación' ? 'bg-amber-500' :
                    'bg-slate-400'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-800">{mov.tipo}</p>
                    <p className="text-sm text-slate-500">{mov.descripcion}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">{mov.fecha}</p>
                    <p className="text-xs text-slate-400">{mov.responsable}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
