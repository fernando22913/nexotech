import { MdInventory, MdCheckCircle, MdSwapHoriz, MdBuild } from 'react-icons/md';
import { reportes } from '../data/mockData';
import Button from '../components/common/Button';

const iconMap = {
  inventory: MdInventory,
  available: MdCheckCircle,
  movements: MdSwapHoriz,
  repairs: MdBuild,
};

const colorMap = {
  inventory: 'bg-blue-100 text-blue-600',
  available: 'bg-green-100 text-green-600',
  movements: 'bg-purple-100 text-purple-600',
  repairs: 'bg-amber-100 text-amber-600',
};

export default function ReportesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Reportes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {reportes.map((repo) => {
          const Icon = iconMap[repo.icono];
          return (
            <div key={repo.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorMap[repo.icono]}`}>
                <Icon className="text-2xl" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">{repo.titulo}</h3>
              <p className="text-sm text-slate-500 mb-4">{repo.descripcion}</p>
              <Button variant="secondary" size="sm" className="w-full">
                Generar reporte
              </Button>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Filtros</h2>
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-slate-700 mb-1">Período</label>
            <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Últimos 3 meses</option>
              <option>Último mes</option>
              <option>Último semestre</option>
              <option>Último año</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de equipo</label>
            <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Todos</option>
              <option>Notebook</option>
              <option>Monitor</option>
              <option>Impresora</option>
              <option>Teléfono</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-slate-700 mb-1">Ubicación</label>
            <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Todas</option>
              <option>Oficina 1</option>
              <option>Oficina 2</option>
              <option>Oficina 3</option>
              <option>Bodega</option>
            </select>
          </div>
          <Button>
            Aplicar filtros
          </Button>
        </div>
      </div>
    </div>
  );
}
