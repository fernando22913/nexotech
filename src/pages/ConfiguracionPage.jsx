import { useState } from 'react';
import { MdBusiness, MdNotifications, MdSecurity, MdPalette } from 'react-icons/md';
import Button from '../components/common/Button';

export default function ConfiguracionPage() {
  const [empresa, setEmpresa] = useState({
    nombre: 'NexoTech S.A.',
    ruc: '20548976321',
    direccion: 'Av. Tecnológica 1234, Lima',
    telefono: '+51 1 555 1234',
    email: 'info@nexotech.com',
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Configuración</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Datos de la empresa */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <MdBusiness className="text-blue-600 text-xl" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-800">Datos de la empresa</h2>
                <p className="text-sm text-slate-500">Información general de la organización</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre de la empresa</label>
                <input
                  type="text"
                  value={empresa.nombre}
                  onChange={(e) => setEmpresa({ ...empresa, nombre: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">RUC</label>
                <input
                  type="text"
                  value={empresa.ruc}
                  onChange={(e) => setEmpresa({ ...empresa, ruc: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Dirección</label>
                <input
                  type="text"
                  value={empresa.direccion}
                  onChange={(e) => setEmpresa({ ...empresa, direccion: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                <input
                  type="text"
                  value={empresa.telefono}
                  onChange={(e) => setEmpresa({ ...empresa, telefono: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  value={empresa.email}
                  onChange={(e) => setEmpresa({ ...empresa, email: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6 pt-4 border-t border-slate-100">
              <Button>Guardar cambios</Button>
            </div>
          </div>

          {/* Notificaciones */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <MdNotifications className="text-amber-600 text-xl" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-800">Notificaciones</h2>
                <p className="text-sm text-slate-500">Configura las alertas del sistema</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Notificaciones por email', desc: 'Recibe alertas importantes por correo electrónico', checked: true },
                { label: 'Alertas de vencimiento', desc: 'Aviso cuando warranties estén por vencer', checked: true },
                { label: 'Reportes automáticos', desc: 'Envío semanal de reportes de inventario', checked: false },
                { label: 'Alertas de movimiento', desc: 'Notificar cuando un activo sea trasladado', checked: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-slate-800">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={item.checked} className="sr-only peer" />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar de configuración */}
        <div className="space-y-6">
          {/* Seguridad */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <MdSecurity className="text-red-600 text-xl" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-800">Seguridad</h2>
                <p className="text-sm text-slate-500">Políticas de acceso</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-600">Sesión máxima</span>
                <span className="font-medium text-slate-800">8 horas</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-600">Contraseña mínima</span>
                <span className="font-medium text-slate-800">8 caracteres</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-600">2FA habilitado</span>
                <span className="font-medium text-green-600">Sí</span>
              </div>
            </div>
          </div>

          {/* Apariencia */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <MdPalette className="text-purple-600 text-xl" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-800">Apariencia</h2>
                <p className="text-sm text-slate-500">Personaliza el aspecto</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-sm font-medium text-slate-700 mb-2">Color principal</p>
                <div className="flex gap-2">
                  {['bg-blue-600', 'bg-emerald-600', 'bg-purple-600', 'bg-amber-600', 'bg-red-600'].map((c) => (
                    <button key={c} className={`w-8 h-8 rounded-full ${c} ring-2 ring-offset-2 ring-transparent hover:ring-slate-400 transition-all`} />
                  ))}
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-sm font-medium text-slate-700 mb-2">Idioma</p>
                <select className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Español</option>
                  <option>Inglés</option>
                  <option>Portugués</option>
                </select>
              </div>
            </div>
          </div>

          {/* Info del sistema */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <h2 className="font-semibold text-slate-800 mb-3">Información del sistema</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Versión</span>
                <span className="font-medium text-slate-800">2.1.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Última actualización</span>
                <span className="font-medium text-slate-800">10/09/2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Licencia</span>
                <span className="font-medium text-slate-800">Enterprise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
