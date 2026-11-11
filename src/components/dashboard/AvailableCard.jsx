import { Link } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import { stats } from '../../data/mockData';

export default function AvailableCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <h3 className="text-sm font-semibold text-slate-800 mb-4">Equipos disponibles para reasignación</h3>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
          <MdCheckCircle className="text-green-500 text-3xl" />
        </div>
        <div>
          <p className="text-4xl font-bold text-slate-800">{stats.disponibles}</p>
          <p className="text-sm text-slate-500">equipos listos</p>
        </div>
        <Link
          to="/activos"
          className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Ver inventario →
        </Link>
      </div>
    </div>
  );
}
