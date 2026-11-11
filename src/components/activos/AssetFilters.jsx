import { HiSearch } from 'react-icons/hi';

export default function AssetFilters({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <div className="relative flex-1 min-w-[200px] max-w-sm">
        <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Buscar por código, nombre o serie..."
          value={filters.busqueda}
          onChange={(e) => setFilters({ ...filters, busqueda: e.target.value })}
          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <select
        value={filters.tipo}
        onChange={(e) => setFilters({ ...filters, tipo: e.target.value })}
        className="px-4 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Tipo: Todos</option>
        <option value="Notebook">Notebook</option>
        <option value="Monitor">Monitor</option>
        <option value="Impresora">Impresora</option>
        <option value="Teléfono">Teléfono</option>
        <option value="Equipo de red">Equipo de red</option>
        <option value="Desktop">Desktop</option>
        <option value="Tablet">Tablet</option>
      </select>
      <select
        value={filters.ubicacion}
        onChange={(e) => setFilters({ ...filters, ubicacion: e.target.value })}
        className="px-4 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Ubicación: Todas</option>
        <option value="Oficina 1">Oficina 1</option>
        <option value="Oficina 2">Oficina 2</option>
        <option value="Oficina 3">Oficina 3</option>
        <option value="Bodega">Bodega</option>
        <option value="Sala de reuniones">Sala de reuniones</option>
      </select>
      <select
        value={filters.estado}
        onChange={(e) => setFilters({ ...filters, estado: e.target.value })}
        className="px-4 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Estado: Todos</option>
        <option value="En uso">En uso</option>
        <option value="Disponible">Disponible</option>
        <option value="En reparación">En reparación</option>
        <option value="Dados de baja">Dados de baja</option>
      </select>
    </div>
  );
}
