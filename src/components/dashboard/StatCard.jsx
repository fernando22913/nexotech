import { MdComputer, MdCheckCircle, MdBuild, MdDelete } from 'react-icons/md';

const icons = {
  total: MdComputer,
  disponibles: MdCheckCircle,
  enUso: MdComputer,
  enReparacion: MdBuild,
  dadosDeBaja: MdDelete,
};

const colors = {
  total: 'bg-blue-500',
  disponibles: 'bg-green-500',
  enUso: 'bg-blue-600',
  enReparacion: 'bg-amber-500',
  dadosDeBaja: 'bg-red-500',
};

export default function StatCard({ label, value, type }) {
  const Icon = icons[type] || MdComputer;
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors[type]}`}>
          <Icon className="text-white text-xl" />
        </div>
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="text-2xl font-bold text-slate-800">{value}</p>
        </div>
      </div>
    </div>
  );
}
