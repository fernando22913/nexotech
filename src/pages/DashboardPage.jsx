import { stats } from '../data/mockData';
import StatCard from '../components/dashboard/StatCard';
import AssetChart from '../components/dashboard/AssetChart';
import AvailableCard from '../components/dashboard/AvailableCard';
import RecentMovements from '../components/dashboard/RecentMovements';

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Bienvenido, María</h1>
        <p className="text-slate-500">Aquí puedes ver un resumen del estado de tus activos tecnológicos.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total de activos" value={stats.total} type="total" />
        <StatCard label="Disponibles" value={stats.disponibles} type="disponibles" />
        <StatCard label="En uso" value={stats.enUso} type="enUso" />
        <StatCard label="En reparación" value={stats.enReparacion} type="enReparacion" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AssetChart />
        </div>
        <div className="space-y-6">
          <AvailableCard />
          <RecentMovements />
        </div>
      </div>
    </div>
  );
}
