import { NavLink } from 'react-router-dom';
import { MdHome, MdOutlineInventory, MdSwapHoriz, MdBarChart, MdPeople, MdSettings } from 'react-icons/md';
import { BsBoxSeam } from 'react-icons/bs';

const menuItems = [
  { label: 'Inicio', path: '/', icon: MdHome },
  { label: 'Activos', path: '/activos', icon: MdOutlineInventory },
  { label: 'Movimientos', path: '/movimientos', icon: MdSwapHoriz },
  { label: 'Reportes', path: '/reportes', icon: MdBarChart },
  { label: 'Usuarios', path: '/usuarios', icon: MdPeople },
  { label: 'Configuración', path: '/configuracion', icon: MdSettings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 text-white min-h-screen flex flex-col">
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <BsBoxSeam className="text-white text-lg" />
          </div>
          <span className="text-xl font-bold">NexoTech</span>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`
                }
              >
                <item.icon className="text-lg" />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
