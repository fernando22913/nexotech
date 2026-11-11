import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import { activos } from '../data/mockData';
import AssetFilters from '../components/activos/AssetFilters';
import AssetTable from '../components/activos/AssetTable';
import Button from '../components/common/Button';

export default function ActivosPage() {
  const [filters, setFilters] = useState({ busqueda: '', tipo: '', ubicacion: '', estado: '' });
  const [pagina, setPagina] = useState(1);

  const filteredActivos = activos.filter((a) => {
    if (filters.busqueda && !`${a.codigo} ${a.marca} ${a.modelo} ${a.serie}`.toLowerCase().includes(filters.busqueda.toLowerCase())) return false;
    if (filters.tipo && a.tipo !== filters.tipo) return false;
    if (filters.ubicacion && a.ubicacion !== filters.ubicacion) return false;
    if (filters.estado && a.estado !== filters.estado) return false;
    return true;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Gestión de activos</h1>
        <Link to="/activos/nuevo">
          <Button>
            <HiPlus className="w-4 h-4" />
            Registrar activo
          </Button>
        </Link>
      </div>

      <AssetFilters filters={filters} setFilters={setFilters} />
      <AssetTable activos={filteredActivos} pagina={pagina} totalPaginas={1} setPagina={setPagina} />
    </div>
  );
}
