import { ultimosMovimientos } from '../../data/mockData';

export default function RecentMovements() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <h3 className="text-sm font-semibold text-slate-800 mb-4">Últimos movimientos</h3>
      <div className="space-y-4">
        {ultimosMovimientos.map((mov, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div>
              <p className="font-medium text-slate-800">{mov.activo}</p>
              <p className="text-slate-500">{mov.tipo}</p>
            </div>
            <span className="text-slate-400 text-xs">{mov.fecha}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
