import { useState } from 'react';
import { HiPlus, HiPencil, HiTrash, HiSearch } from 'react-icons/hi';
import Button from '../components/common/Button';

const usuarios = [
  { id: 1, nombre: 'María González', email: 'maria.gonzalez@nexotech.com', rol: 'Administrador de TI', departamento: 'Tecnología', estado: 'Activo' },
  { id: 2, nombre: 'Carlos López', email: 'carlos.lopez@nexotech.com', rol: 'Usuario', departamento: 'Administración', estado: 'Activo' },
  { id: 3, nombre: 'Ana Torres', email: 'ana.torres@nexotech.com', rol: 'Usuario', departamento: 'Ventas', estado: 'Activo' },
  { id: 4, nombre: 'Luis Rojas', email: 'luis.rojas@nexotech.com', rol: 'Soporte Técnico', departamento: 'Tecnología', estado: 'Activo' },
  { id: 5, nombre: 'Pedro Díaz', email: 'pedro.diaz@nexotech.com', rol: 'Usuario', departamento: 'Operaciones', estado: 'Inactivo' },
  { id: 6, nombre: 'Laura Sánchez', email: 'laura.sanchez@nexotech.com', rol: 'Jefatura', departamento: 'Recursos Humanos', estado: 'Activo' },
];

const rolColors = {
  'Administrador de TI': 'bg-blue-100 text-blue-700',
  'Soporte Técnico': 'bg-purple-100 text-purple-700',
  'Jefatura': 'bg-amber-100 text-amber-700',
  'Usuario': 'bg-slate-100 text-slate-700',
};

export default function UsuariosPage() {
  const [busqueda, setBusqueda] = useState('');

  const filtered = usuarios.filter(u =>
    `${u.nombre} ${u.email} ${u.rol}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Gestión de usuarios</h1>
        <Button>
          <HiPlus className="w-4 h-4" />
          Nuevo usuario
        </Button>
      </div>

      <div className="relative max-w-sm mb-6">
        <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Buscar por nombre, email o rol..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50">
              <th className="text-left py-3 px-4 font-medium text-slate-600">Nombre</th>
              <th className="text-left py-3 px-4 font-medium text-slate-600">Email</th>
              <th className="text-left py-3 px-4 font-medium text-slate-600">Rol</th>
              <th className="text-left py-3 px-4 font-medium text-slate-600">Departamento</th>
              <th className="text-left py-3 px-4 font-medium text-slate-600">Estado</th>
              <th className="text-left py-3 px-4 font-medium text-slate-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {u.nombre.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-medium text-slate-800">{u.nombre}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-slate-600">{u.email}</td>
                <td className="py-3 px-4">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${rolColors[u.rol] || 'bg-slate-100 text-slate-700'}`}>
                    {u.rol}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600">{u.departamento}</td>
                <td className="py-3 px-4">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${u.estado === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {u.estado}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors">
                      <HiPencil className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-red-600 transition-colors">
                      <HiTrash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
