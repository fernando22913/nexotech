import { Link } from 'react-router-dom';
import { HiEye, HiPencil, HiTrash } from 'react-icons/hi';
import Badge from '../common/Badge';

export default function AssetTable({ activos, pagina, totalPaginas, setPagina }) {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left py-3 px-4 font-medium text-slate-600">
                  <input type="checkbox" className="rounded border-slate-300" />
                </th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Código</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Tipo</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Marca / Modelo</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Ubicación</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Responsable</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Estado</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {activos.map((activo) => (
                <tr key={activo.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4">
                    <input type="checkbox" className="rounded border-slate-300" />
                  </td>
                  <td className="py-3 px-4 font-medium text-slate-800">{activo.codigo}</td>
                  <td className="py-3 px-4 text-slate-600">{activo.tipo}</td>
                  <td className="py-3 px-4 text-slate-600">{activo.marca} {activo.modelo}</td>
                  <td className="py-3 px-4 text-slate-600">{activo.ubicacion}</td>
                  <td className="py-3 px-4 text-slate-600">{activo.responsable}</td>
                  <td className="py-3 px-4">
                    <Badge estado={activo.estado} />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/activos/${activo.id}`}
                        className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"
                      >
                        <HiEye className="w-4 h-4" />
                      </Link>
                      <Link
                        to={`/activos/${activo.id}/editar`}
                        className="p-1.5 text-slate-400 hover:text-amber-600 transition-colors"
                      >
                        <HiPencil className="w-4 h-4" />
                      </Link>
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

      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-slate-500">
          Mostrando {activos.length} de {activos.length} activos
        </p>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPagina(Math.max(1, pagina - 1))}
            disabled={pagina === 1}
            className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          {[...Array(totalPaginas)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPagina(i + 1)}
              className={`w-8 h-8 text-sm rounded-lg ${
                pagina === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPagina(Math.min(totalPaginas, pagina + 1))}
            disabled={pagina === totalPaginas}
            className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
