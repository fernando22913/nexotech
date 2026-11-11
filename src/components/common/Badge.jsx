const variants = {
  'En uso': 'bg-green-100 text-green-700',
  'Disponible': 'bg-blue-100 text-blue-700',
  'En reparación': 'bg-amber-100 text-amber-700',
  'Dados de baja': 'bg-red-100 text-red-700',
};

export default function Badge({ estado }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[estado] || 'bg-slate-100 text-slate-700'}`}>
      {estado}
    </span>
  );
}
