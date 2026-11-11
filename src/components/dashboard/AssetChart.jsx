import { stats } from '../../data/mockData';

export default function AssetChart() {
  const { enUso, disponibles, enReparacion, dadosDeBaja } = stats;
  const total = enUso + disponibles + enReparacion + dadosDeBaja;

  const porEnUso = (enUso / total) * 100;
  const porDisponibles = (disponibles / total) * 100;
  const porReparacion = (enReparacion / total) * 100;
  const porBaja = (dadosDeBaja / total) * 100;

  const gradient = `conic-gradient(
    #2563EB 0% ${porEnUso}%,
    #16A34A ${porEnUso}% ${porEnUso + porDisponibles}%,
    #F59E0B ${porEnUso + porDisponibles}% ${porEnUso + porDisponibles + porReparacion}%,
    #DC2626 ${porEnUso + porDisponibles + porReparacion}% 100%
  )`;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <h3 className="text-sm font-semibold text-slate-800 mb-4">Estado general de activos</h3>
      <div className="flex items-center gap-6">
        <div className="relative">
          <div
            className="w-40 h-40 rounded-full"
            style={{ background: gradient }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-slate-800">{total}</span>
            </div>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-600" />
            <span className="text-slate-600">En uso</span>
            <span className="font-medium text-slate-800 ml-auto">{porEnUso.toFixed(0)}% ({enUso})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-slate-600">Disponibles</span>
            <span className="font-medium text-slate-800 ml-auto">{porDisponibles.toFixed(0)}% ({disponibles})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-slate-600">En reparación</span>
            <span className="font-medium text-slate-800 ml-auto">{porReparacion.toFixed(0)}% ({enReparacion})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-600" />
            <span className="text-slate-600">Dados de baja</span>
            <span className="font-medium text-slate-800 ml-auto">{porBaja.toFixed(0)}% ({dadosDeBaja})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
