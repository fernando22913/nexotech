export const activos = [
  { id: 1, codigo: 'NT-001', tipo: 'Notebook', marca: 'Dell', modelo: 'Latitude 5420', ubicacion: 'Oficina 1', responsable: 'Carlos López', estado: 'En uso', serie: '8F3KX201', fechaCompra: '15/03/2023', observaciones: 'Equipo en buen estado. Último mantenimiento: 10/08/2025.' },
  { id: 2, codigo: 'NT-002', tipo: 'Monitor', marca: 'Samsung', modelo: 'S24F350', ubicacion: 'Oficina 1', responsable: 'Ana Torres', estado: 'En uso', serie: 'XJ7HN502', fechaCompra: '20/06/2023', observaciones: 'Monitor de 24 pulgadas.' },
  { id: 3, codigo: 'NT-003', tipo: 'Impresora', marca: 'HP', modelo: 'LaserJet Pro', ubicacion: 'Oficina 2', responsable: 'Luis Rojas', estado: 'Disponible', serie: 'KL9MN803', fechaCompra: '10/01/2022', observaciones: 'Impresora láser monocromática.' },
  { id: 4, codigo: 'NT-004', tipo: 'Teléfono', marca: 'Samsung', modelo: 'Galaxy A54', ubicacion: 'Bodega', responsable: 'María Pérez', estado: 'En uso', serie: 'QW3ER404', fechaCompra: '05/09/2024', observaciones: 'Teléfono corporativo.' },
  { id: 5, codigo: 'NT-005', tipo: 'Equipo de red', marca: 'Cisco', modelo: 'Switch', ubicacion: 'Oficina 2', responsable: 'Pedro Díaz', estado: 'En reparación', serie: 'AS5DF505', fechaCompra: '12/04/2021', observaciones: 'Switch de red con falla en puerto 3.' },
  { id: 6, codigo: 'NT-006', tipo: 'Notebook', marca: 'Lenovo', modelo: 'ThinkPad', ubicacion: 'Bodega', responsable: 'Sin asignar', estado: 'Disponible', serie: 'ZX7CV606', fechaCompra: '18/11/2023', observaciones: 'Equipo nuevo sin asignar.' },
  { id: 7, codigo: 'NT-007', tipo: 'Desktop', marca: 'HP', modelo: 'ProDesk 400', ubicacion: 'Oficina 3', responsable: 'Laura Sánchez', estado: 'En uso', serie: 'BN2MK707', fechaCompra: '03/07/2022', observaciones: 'Computador de escritorio.' },
  { id: 8, codigo: 'NT-008', tipo: 'Proyector', marca: 'Epson', modelo: 'EB-X51', ubicacion: 'Sala de reuniones', responsable: 'Roberto Vega', estado: 'Disponible', serie: 'HJ8LP808', fechaCompra: '22/02/2024', observaciones: 'Proyector para salas.' },
  { id: 9, codigo: 'NT-009', tipo: 'Notebook', marca: 'Dell', modelo: 'Inspiron 15', ubicacion: 'Oficina 1', responsable: 'María González', estado: 'En uso', serie: 'TY9UW909', fechaCompra: '14/08/2023', observaciones: 'Laptop para administración.' },
  { id: 10, codigo: 'NT-010', tipo: 'Tablet', marca: 'Apple', modelo: 'iPad Air', ubicacion: 'Bodega', responsable: 'Sin asignar', estado: 'Dados de baja', serie: 'OP1QR010', fechaCompra: '30/01/2021', observaciones: 'Tablet dada de baja por obsolescencia.' },
];

export const movimientos = [
  { id: 1, activoCodigo: 'NT-001', tipo: 'Traslado', descripcion: 'De: Oficina 2 → A: Oficina 1', fecha: '10/09/2025', responsable: 'Administrador de TI' },
  { id: 2, activoCodigo: 'NT-001', tipo: 'Cambio de responsable', descripcion: 'De: Ana Torres → A: Carlos López', fecha: '05/08/2025', responsable: 'Administrador de TI' },
  { id: 3, activoCodigo: 'NT-001', tipo: 'Reparación', descripcion: 'Ingreso a servicio técnico', fecha: '22/08/2025', responsable: 'Soporte Técnico' },
  { id: 4, activoCodigo: 'NT-001', tipo: 'Asignación', descripcion: 'Asignado a Ana Torres', fecha: '15/07/2023', responsable: 'Jefatura' },
  { id: 5, activoCodigo: 'NT-001', tipo: 'Alta', descripcion: 'Registro inicial en el sistema', fecha: '15/03/2023', responsable: 'Administrador de TI' },
  { id: 6, activoCodigo: 'NT-002', tipo: 'Traslado', descripcion: 'De: Bodega → A: Oficina 1', fecha: '01/09/2025', responsable: 'Administrador de TI' },
  { id: 7, activoCodigo: 'NT-003', tipo: 'Asignación', descripcion: 'Asignado a Luis Rojas', fecha: '10/06/2025', responsable: 'Jefatura' },
  { id: 8, activoCodigo: 'NT-005', tipo: 'Reparación', descripcion: 'Ingreso a servicio técnico por falla en puerto', fecha: '05/09/2025', responsable: 'Soporte Técnico' },
];

export const ultimosMovimientos = [
  { activo: 'Notebook Dell', tipo: 'Traslado a Oficina 2', fecha: '10/09/2025' },
  { activo: 'Impresora HP', tipo: 'En reparación', fecha: '09/09/2025' },
  { activo: 'Teléfono Samsung', tipo: 'Asignación a Juan Pérez', fecha: '08/09/2025' },
];

export const stats = {
  total: 450,
  disponibles: 87,
  enUso: 321,
  enReparacion: 28,
  dadosDeBaja: 14,
};

export const reportes = [
  { id: 1, titulo: 'Inventario general', descripcion: 'Resumen de todos los activos tecnológicos.', icono: 'inventory' },
  { id: 2, titulo: 'Equipos disponibles', descripcion: 'Equipos disponibles para reasignación.', icono: 'available' },
  { id: 3, titulo: 'Movimientos', descripcion: 'Historial de movimientos por período.', icono: 'movements' },
  { id: 4, titulo: 'Reparaciones', descripcion: 'Equipos en reparación y su estado.', icono: 'repairs' },
];
