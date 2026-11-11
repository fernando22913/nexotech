import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { MdSwapHoriz, MdPersonAdd, MdBuild, MdAssignment, MdAddCircle } from 'react-icons/md';
import { movimientos } from '../data/mockData';

const tipoConfig = {
  'Traslado': { icon: MdSwapHoriz, color: 'bg-blue-500' },
  'Cambio de responsable': { icon: MdPersonAdd, color: 'bg-purple-500' },
  'Reparación': { icon: MdBuild, color: 'bg-amber-500' },
  'Asignación': { icon: MdAssignment, color: 'bg-green-500' },
  'Alta': { icon: MdAddCircle, color: 'bg-emerald-500' },
};

export default function MovimientosPage() {
  return (
    <div>
      <Link to="/activos/1" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-4">
        <HiArrowLeft className="w-4 h-4" />
        Volver
      </Link>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">Historial de movimientos</h1>
            <p className="text-slate-500">Notebook Dell Latitude 5420 (NT-001)</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-100" />
          <div className="space-y-6">
            {movimientos.filter(m => m.activoCodigo === 'NT-001').map((mov) => {
              const config = tipoConfig[mov.tipo] || tipoConfig['Alta'];
              const Icon = config.icon;
              return (
                <div key={mov.id} className="relative flex items-start gap-4">
                  <div className={`relative z-10 w-12 h-12 rounded-full ${config.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="text-white text-xl" />
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-800">{mov.tipo}</p>
                        <p className="text-sm text-slate-500">{mov.descripcion}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-500">{mov.fecha}</p>
                        <p className="text-xs text-slate-400">{mov.responsable}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
