'use strict';

/* ============================================================
   Control Gasolina · app móvil
   Datos guardados en el propio dispositivo (localStorage).
   ============================================================ */

const CLAVE = 'controlGasolinaApp.v1';
const DATOS_INICIALES = {"ajustes": {"tarifa": 12.0, "umbral": 15.0, "desde": "2026-09-28"}, "trabajadores": [{"id": "francisco-jose-ruiz", "nombre": "FRANCISCO JOSE RUIZ", "distancia": null, "casa": "", "obs": "", "cobraManual": null}, {"id": "pepe", "nombre": "PEPE", "distancia": null, "casa": "", "obs": "", "cobraManual": null}, {"id": "joel", "nombre": "JOEL", "distancia": 30.06, "casa": "C/MURILLO, 37_CEUTI   CP 30562", "obs": "CASA A CALLE CARTAGENA, 59", "cobraManual": null}, {"id": "jose-antonio", "nombre": "JOSE ANTONIO", "distancia": null, "casa": "", "obs": "", "cobraManual": null}, {"id": "oscar", "nombre": "OSCAR", "distancia": 92.48, "casa": "AVD. DE LA MEDIA LEGUA, 36_TORRES DE COTILLAS", "obs": "CASA A EL CASTILLO DE ELDA", "cobraManual": null}, {"id": "jose-ignoto", "nombre": "JOSE IGNOTO", "distancia": 70.26, "casa": "AVD. DE LA MEDIA LEGUA, 36_TORRES DE COTILLAS", "obs": "CASA  A  ASPE", "cobraManual": null}, {"id": "alejandro", "nombre": "ALEJANDRO", "distancia": 57.0, "casa": "ELCHE", "obs": "CASA A CALLE CARTAGENA, 59", "cobraManual": null}, {"id": "juan-jose", "nombre": "JUAN JOSE", "distancia": null, "casa": "", "obs": "", "cobraManual": null}, {"id": "juanki", "nombre": "JUANKI", "distancia": null, "casa": "", "obs": "", "cobraManual": null}, {"id": "roberto", "nombre": "ROBERTO", "distancia": 24.5, "casa": "PARTIDA DE SOLANA ALTA, LA ROMANA", "obs": "CASA A ELDA", "cobraManual": null}], "desplazamientos": [{"id": "v5", "fecha": "2026-09-28", "trabajadorId": "oscar", "obra": "CASTILLO", "kmIda": 92.48, "kmVuelta": 92.48, "ajusteKm": 185.6, "obs": "109,73 PUESTO EL LUNES"}, {"id": "v6", "fecha": "2026-09-28", "trabajadorId": "alejandro", "obra": "C/CARTAGENA", "kmIda": 57.0, "kmVuelta": 57.0, "ajusteKm": null, "obs": ""}, {"id": "v7", "fecha": "2026-09-28", "trabajadorId": "joel", "obra": "C/CARTAGENA", "kmIda": 30.06, "kmVuelta": 30.06, "ajusteKm": null, "obs": ""}, {"id": "v8", "fecha": "2026-09-29", "trabajadorId": "oscar", "obra": "CASTILLO", "kmIda": 92.48, "kmVuelta": 92.48, "ajusteKm": null, "obs": ""}, {"id": "v9", "fecha": "2026-09-29", "trabajadorId": "alejandro", "obra": "C/CARTAGENA", "kmIda": 57.0, "kmVuelta": 57.0, "ajusteKm": null, "obs": "60,00 PUESTO EL MARTES"}, {"id": "v10", "fecha": "2026-09-29", "trabajadorId": "joel", "obra": "C/CARTAGENA", "kmIda": 30.06, "kmVuelta": 30.06, "ajusteKm": null, "obs": ""}, {"id": "v11", "fecha": "2026-09-30", "trabajadorId": "jose-ignoto", "obra": "ASPE", "kmIda": 70.26, "kmVuelta": 70.26, "ajusteKm": null, "obs": "30,00 PUESTO EL MIERCOLES"}, {"id": "v12", "fecha": "2026-09-30", "trabajadorId": "alejandro", "obra": "C/CARTAGENA", "kmIda": 57.0, "kmVuelta": 57.0, "ajusteKm": null, "obs": ""}, {"id": "v13", "fecha": "2026-09-30", "trabajadorId": "joel", "obra": "C/CARTAGENA", "kmIda": 30.06, "kmVuelta": 30.06, "ajusteKm": null, "obs": ""}, {"id": "v14", "fecha": "2026-10-01", "trabajadorId": "jose-ignoto", "obra": "ASPE", "kmIda": 70.26, "kmVuelta": 70.26, "ajusteKm": null, "obs": ""}, {"id": "v15", "fecha": "2026-10-01", "trabajadorId": "alejandro", "obra": "C/CARTAGENA", "kmIda": 57.0, "kmVuelta": 57.0, "ajusteKm": null, "obs": ""}, {"id": "v16", "fecha": "2026-10-01", "trabajadorId": "joel", "obra": "C/CARTAGENA", "kmIda": 30.06, "kmVuelta": 30.06, "ajusteKm": null, "obs": "76,22 PUESTO EL JUEVES"}, {"id": "v17", "fecha": "2026-10-02", "trabajadorId": "oscar", "obra": "ASPE", "kmIda": 70.26, "kmVuelta": 70.26, "ajusteKm": null, "obs": ""}, {"id": "v18", "fecha": "2026-10-02", "trabajadorId": "alejandro", "obra": "C/CARTAGENA", "kmIda": 57.0, "kmVuelta": 57.0, "ajusteKm": null, "obs": ""}, {"id": "v19", "fecha": "2026-10-02", "trabajadorId": "joel", "obra": "C/CARTAGENA", "kmIda": 30.06, "kmVuelta": 30.06, "ajusteKm": null, "obs": ""}, {"id": "v20", "fecha": "2026-10-05", "trabajadorId": "oscar", "obra": "ASPE", "kmIda": 70.26, "kmVuelta": 70.26, "ajusteKm": null, "obs": ""}, {"id": "v21", "fecha": "2026-10-05", "trabajadorId": "alejandro", "obra": "C/CARTAGENA", "kmIda": 57.0, "kmVuelta": 57.0, "ajusteKm": null, "obs": ""}, {"id": "v22", "fecha": "2026-10-05", "trabajadorId": "joel", "obra": "C/CARTAGENA", "kmIda": 30.06, "kmVuelta": 30.06, "ajusteKm": null, "obs": ""}, {"id": "v23", "fecha": "2026-10-06", "trabajadorId": "alejandro", "obra": "C/CARTAGENA", "kmIda": 57.0, "kmVuelta": 57.0, "ajusteKm": null, "obs": ""}, {"id": "v24", "fecha": "2026-10-06", "trabajadorId": "joel", "obra": "C/CARTAGENA", "kmIda": 30.06, "kmVuelta": 30.06, "ajusteKm": null, "obs": ""}, {"id": "v25", "fecha": "2026-10-06", "trabajadorId": "oscar", "obra": "ASPE", "kmIda": 70.26, "kmVuelta": 70.26, "ajusteKm": null, "obs": "60,00 PUESTO EL MARTES"}, {"id": "v26", "fecha": "2026-10-07", "trabajadorId": "alejandro", "obra": "C/CARTAGENA", "kmIda": 57.0, "kmVuelta": 57.0, "ajusteKm": null, "obs": "60,00 PUESTO EL MIERCOLES"}, {"id": "v27", "fecha": "2026-10-07", "trabajadorId": "joel", "obra": "C/CARTAGENA", "kmIda": 30.06, "kmVuelta": 30.06, "ajusteKm": null, "obs": ""}, {"id": "v28", "fecha": "2026-10-07", "trabajadorId": "oscar", "obra": "ASPE", "kmIda": 70.26, "kmVuelta": 70.26, "ajusteKm": null, "obs": ""}, {"id": "v29", "fecha": "2026-10-08", "trabajadorId": "alejandro", "obra": "C/CARTAGENA", "kmIda": 57.0, "kmVuelta": 57.0, "ajusteKm": null, "obs": ""}, {"id": "v30", "fecha": "2026-10-08", "trabajadorId": "joel", "obra": "C/CARTAGENA", "kmIda": 30.06, "kmVuelta": 30.06, "ajusteKm": null, "obs": ""}, {"id": "v31", "fecha": "2026-10-08", "trabajadorId": "oscar", "obra": "ASPE", "kmIda": 70.26, "kmVuelta": 70.26, "ajusteKm": null, "obs": ""}, {"id": "v32", "fecha": "2026-10-13", "trabajadorId": "alejandro", "obra": "C/CARTAGENA", "kmIda": 57.0, "kmVuelta": 57.0, "ajusteKm": null, "obs": ""}, {"id": "v33", "fecha": "2026-10-13", "trabajadorId": "joel", "obra": "C/CARTAGENA", "kmIda": 30.06, "kmVuelta": 30.06, "ajusteKm": null, "obs": ""}, {"id": "v34", "fecha": "2026-10-13", "trabajadorId": "oscar", "obra": "CASTILLO", "kmIda": 92.48, "kmVuelta": 92.48, "ajusteKm": null, "obs": "50,00 PUESTO EL MARTES"}, {"id": "v35", "fecha": "2026-10-13", "trabajadorId": "roberto", "obra": "CASTILLO", "kmIda": 24.5, "kmVuelta": 24.5, "ajusteKm": null, "obs": "50,00 PUESTO EL MARTES"}, {"id": "v36", "fecha": "2026-10-14", "trabajadorId": "alejandro", "obra": "C/CARTAGENA", "kmIda": 57.0, "kmVuelta": 57.0, "ajusteKm": null, "obs": ""}, {"id": "v37", "fecha": "2026-10-14", "trabajadorId": "joel", "obra": "C/CARTAGENA", "kmIda": 30.06, "kmVuelta": 30.06, "ajusteKm": null, "obs": ""}, {"id": "v38", "fecha": "2026-10-14", "trabajadorId": "oscar", "obra": "ASPE", "kmIda": 70.26, "kmVuelta": 70.26, "ajusteKm": null, "obs": ""}, {"id": "v39", "fecha": "2026-10-15", "trabajadorId": "alejandro", "obra": "C/CARTAGENA", "kmIda": 57.0, "kmVuelta": 57.0, "ajusteKm": null, "obs": ""}, {"id": "v40", "fecha": "2026-10-15", "trabajadorId": "joel", "obra": "C/CARTAGENA", "kmIda": 30.06, "kmVuelta": 30.06, "ajusteKm": null, "obs": ""}, {"id": "v41", "fecha": "2026-10-15", "trabajadorId": "jose-ignoto", "obra": "ASPE", "kmIda": 70.26, "kmVuelta": 70.26, "ajusteKm": null, "obs": ""}, {"id": "v42", "fecha": "2026-10-16", "trabajadorId": "alejandro", "obra": "C/CARTAGENA", "kmIda": 57.0, "kmVuelta": 57.0, "ajusteKm": null, "obs": ""}, {"id": "v43", "fecha": "2026-10-16", "trabajadorId": "joel", "obra": "C/CARTAGENA", "kmIda": 30.06, "kmVuelta": 30.06, "ajusteKm": null, "obs": ""}, {"id": "v44", "fecha": "2026-10-16", "trabajadorId": "jose-ignoto", "obra": "ASPE", "kmIda": 70.26, "kmVuelta": 70.26, "ajusteKm": null, "obs": ""}, {"id": "v45", "fecha": "2026-10-19", "trabajadorId": "alejandro", "obra": "C/CARTAGENA", "kmIda": 57.0, "kmVuelta": 57.0, "ajusteKm": null, "obs": ""}, {"id": "v46", "fecha": "2026-10-19", "trabajadorId": "joel", "obra": "C/CARTAGENA", "kmIda": 30.06, "kmVuelta": 30.06, "ajusteKm": null, "obs": ""}, {"id": "v47", "fecha": "2026-10-19", "trabajadorId": "jose-ignoto", "obra": "ASPE", "kmIda": 70.26, "kmVuelta": 70.26, "ajusteKm": null, "obs": ""}], "gastos": [{"id": "g5", "fecha": "2026-09-28", "trabajadorId": "francisco-jose-ruiz", "vehiculo": "CITROËN C4", "proveedor": "REPSOL", "litros": 56.47, "importe": 113.79, "ticket": "11718", "obs": ""}, {"id": "g6", "fecha": "2026-09-28", "trabajadorId": "oscar", "vehiculo": "OSCAR", "proveedor": "PLENERGY", "litros": 62.17, "importe": 109.73, "ticket": "R2112600012255", "obs": ""}, {"id": "g7", "fecha": "2026-09-29", "trabajadorId": "francisco-jose-ruiz", "vehiculo": "OPEL MOVANO", "proveedor": "", "litros": 25.59, "importe": 25.56, "ticket": "", "obs": ""}, {"id": "g8", "fecha": "2026-09-29", "trabajadorId": "francisco-jose-ruiz", "vehiculo": "OPEL MOVANO", "proveedor": "PLENERGY", "litros": 58.36, "importe": 103.01, "ticket": "R2112600012292", "obs": ""}, {"id": "g9", "fecha": "2026-09-29", "trabajadorId": "alejandro", "vehiculo": "ALEJANDRO", "proveedor": "PLENERGY", "litros": 32.28, "importe": 60.0, "ticket": "R1392600029141", "obs": ""}, {"id": "g10", "fecha": "2026-09-30", "trabajadorId": "jose-ignoto", "vehiculo": "JOSE IGNOTO", "proveedor": "PLENERGY", "litros": 16.14, "importe": 30.0, "ticket": "R0152600012048", "obs": ""}, {"id": "g11", "fecha": "2026-10-01", "trabajadorId": "joel", "vehiculo": "JOEL", "proveedor": "PLENERGY", "litros": 41.9, "importe": 76.22, "ticket": "R1712600037099", "obs": ""}, {"id": "g12", "fecha": "2026-10-03", "trabajadorId": "francisco-jose-ruiz", "vehiculo": "OPEL MOVANO", "proveedor": "PLENERGY", "litros": 73.81, "importe": 130.27, "ticket": "R2112600012579", "obs": ""}, {"id": "g13", "fecha": "2026-10-06", "trabajadorId": "oscar", "vehiculo": "OSCAR", "proveedor": "PLENERGY", "litros": 34.7, "importe": 60.0, "ticket": "R0152600012305", "obs": ""}, {"id": "g14", "fecha": "2026-10-07", "trabajadorId": "alejandro", "vehiculo": "ALEJANDRO", "proveedor": "PLENERGY", "litros": 33.17, "importe": 60.0, "ticket": "R1712600037881", "obs": ""}, {"id": "g15", "fecha": "2026-10-08", "trabajadorId": "juan-jose", "vehiculo": "JUAN JOSE", "proveedor": "PLENERGY", "litros": 49.0, "importe": 50.0, "ticket": "", "obs": ""}, {"id": "g16", "fecha": "2026-10-13", "trabajadorId": "francisco-jose-ruiz", "vehiculo": "SCENIC", "proveedor": "REPSOL", "litros": 53.44, "importe": 105.76, "ticket": "17705", "obs": ""}, {"id": "g17", "fecha": "2026-10-13", "trabajadorId": "francisco-jose-ruiz", "vehiculo": "OPEL MOVANO", "proveedor": "PLENERGY", "litros": 49.88, "importe": 88.04, "ticket": "R2112600013023", "obs": ""}, {"id": "g18", "fecha": "2026-10-13", "trabajadorId": "oscar", "vehiculo": "OSCAR", "proveedor": "PLENERGY", "litros": 30.88, "importe": 50.0, "ticket": "R2112600013064", "obs": ""}, {"id": "g19", "fecha": "2026-10-13", "trabajadorId": "roberto", "vehiculo": "ROBERTO", "proveedor": "REPSOL", "litros": 26.95, "importe": 50.0, "ticket": "13480", "obs": ""}, {"id": "g20", "fecha": "2026-10-15", "trabajadorId": "alejandro", "vehiculo": "ALEJANDRO", "proveedor": "PLENERGY", "litros": 33.54, "importe": 60.0, "ticket": "R0472600046427", "obs": ""}, {"id": "g21", "fecha": "2026-10-16", "trabajadorId": "francisco-jose-ruiz", "vehiculo": "OPEL MOVANO", "proveedor": "PLENERGY", "litros": 68.81, "importe": 121.45, "ticket": "R2192600045936", "obs": ""}, {"id": "g22", "fecha": "2026-10-16", "trabajadorId": "jose-ignoto", "vehiculo": "JOSE IGNOTO", "proveedor": "PLENERGY", "litros": 33.15, "importe": 55.99, "ticket": "R0152600012716", "obs": ""}, {"id": "g23", "fecha": "2026-10-16", "trabajadorId": "", "vehiculo": "BERLINGO", "proveedor": "PLENERGY", "litros": 32.14, "importe": 57.82, "ticket": "R0152600012717", "obs": ""}, {"id": "g24", "fecha": "2026-10-19", "trabajadorId": "francisco-jose-ruiz", "vehiculo": "SCENIC", "proveedor": "REPSOL", "litros": 50.24, "importe": 95.91, "ticket": "005710/A/26/001037", "obs": ""}, {"id": "g25", "fecha": "2026-10-19", "trabajadorId": "joel", "vehiculo": "JOEL", "proveedor": "PLENERGY", "litros": 43.84, "importe": 78.43, "ticket": "R3912600014414", "obs": ""}]};

/* Datos frescos del Excel. Los genera «Actualizar app movil.bat» en datos.js. */
let EXCEL = (typeof window !== 'undefined' && window.DATOS_EXCEL && window.DATOS_EXCEL.datos) ? window.DATOS_EXCEL : null;
let SEMILLA = EXCEL ? EXCEL.datos : DATOS_INICIALES;
const CLAVE_EXCEL = 'controlGasolinaApp.excel';

/* La web publicada (GitHub Pages) es de solo consulta: los datos se cambian en
   el Excel del PC y se publican con «Publicar app en internet.bat». En local
   (file:// o localhost) se puede seguir editando como siempre. */
const MODO_CONSULTA = typeof location !== 'undefined' &&
  /^https?:$/.test(location.protocol) &&
  !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);

function soloConsulta() {
  toast('Solo consulta: los cambios se hacen en el Excel y se publican desde el PC');
}

/* En la web, volver a leer la copia publicada del Excel sin recargar la página. */
function recargarDatosPublicados() {
  if (!MODO_CONSULTA) return abrirRestaurar();
  toast('Buscando datos nuevos...');
  return refrescarDatosDelExcel().then(function (ok) {
    estado = normalizar(copia(SEMILLA));
    render();
    toast(ok ? 'Datos del Excel: ' + ((EXCEL && EXCEL.generadoTexto) || '') : 'No se han podido leer los datos');
  });
}

const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const MESES_CORTOS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

const fmtEur = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
const fmtNum = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 2 });

/* ---------------- estado ---------------- */

let estado;
let almacenOK = true;
let ui = { vista: 'resumen', periodo: 'todo', kmModo: 'lista', kmMedida: 'km' };

function copia(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function hoyISO() {
  const d = new Date();
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function nuevoId(prefijo) {
  return prefijo + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function aNumero(v) {
  if (v === null || v === undefined || v === '') return null;
  if (typeof v === 'number') return isFinite(v) ? v : null;
  const n = Number(String(v).trim().replace(',', '.'));
  return isFinite(n) ? n : null;
}

function r2(n) {
  return Math.round((Number(n) || 0) * 100) / 100;
}

function esc(v) {
  return String(v === null || v === undefined ? '' : v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function eur(n) {
  return fmtEur.format(Number(n) || 0).replace('-', '−');
}

function km(n) {
  return fmtNum.format(Number(n) || 0) + ' km';
}

function num(n) {
  return fmtNum.format(Number(n) || 0);
}

function fechaCorta(iso) {
  const p = String(iso || '').split('-');
  if (p.length !== 3) return iso || '';
  return p[2] + '/' + p[1] + '/' + p[0];
}

function mesClave(iso) {
  return String(iso || '').slice(0, 7);
}

function mesLargo(clave) {
  const [a, m] = clave.split('-').map(Number);
  if (!a || !m) return clave;
  return MESES[m - 1] + ' ' + a;
}

function normalizar(d) {
  if (!d || typeof d !== 'object') throw new Error('El archivo no tiene el formato esperado.');

  const brutoTrabajadores = Array.isArray(d.trabajadores) ? d.trabajadores : [];
  const brutoViajes = Array.isArray(d.desplazamientos) ? d.desplazamientos : [];
  const brutoGastos = Array.isArray(d.gastos) ? d.gastos : [];

  const trabajadores = brutoTrabajadores
    .filter(function (t) { return t && t.nombre; })
    .map(function (t, i) {
      const distancia = aNumero(t.distancia);
      return {
        id: t.id || nuevoId('t'),
        nombre: String(t.nombre).trim(),
        distancia: distancia === null ? null : distancia,
        casa: t.casa ? String(t.casa) : '',
        obs: t.obs ? String(t.obs) : '',
        cobraManual: t.cobraManual === true ? true : (t.cobraManual === false ? false : null)
      };
    });

  const desplazamientos = brutoViajes
    .filter(function (x) { return x && x.fecha; })
    .map(function (x) {
      return {
        id: x.id || nuevoId('v'),
        fecha: String(x.fecha).slice(0, 10),
        trabajadorId: x.trabajadorId ? String(x.trabajadorId) : '',
        obra: x.obra ? String(x.obra) : '',
        kmIda: aNumero(x.kmIda) || 0,
        kmVuelta: aNumero(x.kmVuelta) || 0,
        ajusteKm: aNumero(x.ajusteKm),
        obs: x.obs ? String(x.obs) : ''
      };
    });

  const gastos = brutoGastos
    .filter(function (g) { return g && g.fecha; })
    .map(function (g) {
      return {
        id: g.id || nuevoId('g'),
        fecha: String(g.fecha).slice(0, 10),
        trabajadorId: g.trabajadorId ? String(g.trabajadorId) : '',
        vehiculo: g.vehiculo ? String(g.vehiculo) : '',
        proveedor: g.proveedor ? String(g.proveedor) : '',
        litros: aNumero(g.litros),
        importe: aNumero(g.importe) || 0,
        ticket: g.ticket ? String(g.ticket) : '',
        obs: g.obs ? String(g.obs) : ''
      };
    });

  const ajustes = Object.assign(
    { tarifa: 12, umbral: 15, desde: hoyISO() },
    d.ajustes && typeof d.ajustes === 'object' ? d.ajustes : {}
  );
  ajustes.tarifa = aNumero(ajustes.tarifa);
  ajustes.umbral = aNumero(ajustes.umbral);
  if (ajustes.tarifa === null) ajustes.tarifa = 12;
  if (ajustes.umbral === null) ajustes.umbral = 15;
  if (!ajustes.desde) ajustes.desde = hoyISO();
  ajustes.desde = String(ajustes.desde).slice(0, 10);

  return {
    version: 1,
    ajustes: ajustes,
    trabajadores: trabajadores,
    desplazamientos: desplazamientos,
    gastos: gastos,
    actualizado: d.actualizado || new Date().toISOString()
  };
}

function cargarEstado() {
  if (MODO_CONSULTA) return normalizar(copia(SEMILLA));
  try {
    const bruto = localStorage.getItem(CLAVE);
    if (!bruto) {
      marcarExcelCargado();
      return normalizar(copia(SEMILLA));
    }
    return normalizar(JSON.parse(bruto));
  } catch (e) {
    almacenOK = false;
    try {
      return normalizar(copia(SEMILLA));
    } catch (e2) {
      return { version: 1, ajustes: { tarifa: 12, umbral: 15, desde: hoyISO() }, trabajadores: [], desplazamientos: [], gastos: [], actualizado: new Date().toISOString() };
    }
  }
}

function guardarEstado() {
  if (MODO_CONSULTA) return;
  estado.actualizado = new Date().toISOString();
  try {
    localStorage.setItem(CLAVE, JSON.stringify(estado));
    almacenOK = true;
  } catch (e) {
    almacenOK = false;
  }
  actualizarAviso();
}

function actualizarAviso() {
  const el = document.getElementById('aviso-guardado');
  if (!el) return;
  el.hidden = almacenOK;
  if (!almacenOK) {
    el.textContent = 'Este navegador no está guardando los datos. Exporta una copia en Ajustes antes de cerrar.';
  }
}

/* ---------------- datos frescos del Excel ---------------- */

/* Abierta desde internet (GitHub Pages), se vuelve a pedir datos.js sin caché.
   Así, al publicar un cambio, se ve al recargar y no 10 minutos después. */
function refrescarDatosDelExcel() {
  if (typeof location === 'undefined' || !/^https?:$/.test(location.protocol) || typeof fetch !== 'function') {
    return Promise.resolve(false);
  }
  return fetch('datos.js?t=' + Date.now(), { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.text() : ''; })
    .then(function (texto) {
      const m = /window\.DATOS_EXCEL\s*=\s*(\{[\s\S]*\})\s*;?\s*$/.exec(texto);
      if (!m) return false;
      const nuevo = JSON.parse(m[1]);
      if (!nuevo || !nuevo.datos) return false;
      window.DATOS_EXCEL = nuevo;
      EXCEL = nuevo;
      SEMILLA = nuevo.datos;
      return true;
    })
    .catch(function () { return false; });
}

function excelPendiente() {
  if (!EXCEL || !EXCEL.generado) return false;
  try {
    return localStorage.getItem(CLAVE_EXCEL) !== EXCEL.generado;
  } catch (e) {
    return true;
  }
}

function marcarExcelCargado() {
  if (!EXCEL || !EXCEL.generado) return;
  try { localStorage.setItem(CLAVE_EXCEL, EXCEL.generado); } catch (e) {}
}

function pintarAvisoExcel() {
  const el = document.getElementById('aviso-excel');
  if (!el) return;
  if (MODO_CONSULTA) {
    el.hidden = true;
    el.innerHTML = '';
    return;
  }
  if (!EXCEL || !excelPendiente()) {
    el.hidden = true;
    el.innerHTML = '';
    return;
  }
  const r = EXCEL.resumen || {};
  const detalle = [];
  if (r.desplazamientos !== undefined) detalle.push(r.desplazamientos + ' desplaz.');
  if (r.pagos !== undefined) detalle.push(r.pagos + ' pagos');
  el.hidden = false;
  el.innerHTML = '<div class="aviso-excel-texto">' +
      '<strong>Hay datos nuevos del Excel</strong>' +
      '<span>' + esc(EXCEL.generadoTexto || '') + (detalle.length ? ' · ' + esc(detalle.join(' · ')) : '') + '</span>' +
    '</div>' +
    '<div class="aviso-excel-botones">' +
      '<button type="button" class="btn btn-principal btn-pequeno" data-accion="reset">Cargar</button>' +
      '<button type="button" class="btn btn-suave btn-pequeno" data-accion="descartar-excel">Ahora no</button>' +
    '</div>';
}

/* ---------------- cálculos (equivalentes al Excel) ---------------- */

function trabajadorPorId(id) {
  return estado.trabajadores.find(function (t) { return t.id === id; }) || null;
}

function nombreTrabajador(id) {
  const t = trabajadorPorId(id);
  return t ? t.nombre : 'Sin trabajador';
}

function cobra(t) {
  if (!t) return 'NO';
  if (t.cobraManual === true) return 'SI';
  if (t.cobraManual === false) return 'NO';
  if (t.distancia === null || t.distancia === undefined) return 'SD';
  return t.distancia > estado.ajustes.umbral ? 'SI' : 'NO';
}

function kmBase(d) {
  return (Number(d.kmIda) || 0) + (Number(d.kmVuelta) || 0);
}

function kmAPagar(d, t) {
  if (cobra(t) !== 'SI') return 0;
  if (d.ajusteKm !== null && d.ajusteKm !== undefined && isFinite(d.ajusteKm)) return Number(d.ajusteKm);
  return kmBase(d);
}

function importeViaje(d, t) {
  return r2(kmAPagar(d, t) * estado.ajustes.tarifa / 100);
}

function enPeriodo(fecha, periodo) {
  return periodo === 'todo' || mesClave(fecha) === periodo;
}

function estadoDiferencia(dif) {
  if (dif > 0.009) return { clave: 'debes', texto: 'LE DEBES' };
  if (dif < -0.009) return { clave: 'tedebe', texto: 'TE DEBE' };
  return { clave: 'nada', texto: 'NADA' };
}

function resumenTrabajador(t, periodo) {
  const viajes = estado.desplazamientos.filter(function (d) {
    return d.trabajadorId === t.id && enPeriodo(d.fecha, periodo);
  });
  const pagos = estado.gastos.filter(function (g) {
    return g.trabajadorId === t.id && g.fecha >= estado.ajustes.desde && enPeriodo(g.fecha, periodo);
  });

  const kmTotales = viajes.reduce(function (s, d) { return s + kmBase(d); }, 0);
  const aPagar = viajes.reduce(function (s, d) { return s + importeViaje(d, t); }, 0);
  const yaDado = pagos.reduce(function (s, g) { return s + (Number(g.importe) || 0); }, 0);
  const diferencia = r2(aPagar - yaDado);

  return {
    trabajador: t,
    viajes: viajes,
    pagos: pagos,
    km: r2(kmTotales),
    aPagar: r2(aPagar),
    yaDado: r2(yaDado),
    diferencia: diferencia,
    estado: estadoDiferencia(diferencia),
    cobra: cobra(t)
  };
}

function resumenPeriodo(periodo) {
  const filas = estado.trabajadores.map(function (t) { return resumenTrabajador(t, periodo); });
  const totales = filas.reduce(function (acc, f) {
    acc.km += f.km;
    acc.aPagar += f.aPagar;
    acc.yaDado += f.yaDado;
    acc.diferencia += f.diferencia;
    acc.viajes += f.viajes.length;
    return acc;
  }, { km: 0, aPagar: 0, yaDado: 0, diferencia: 0, viajes: 0 });

  totales.km = r2(totales.km);
  totales.aPagar = r2(totales.aPagar);
  totales.yaDado = r2(totales.yaDado);
  totales.diferencia = r2(totales.diferencia);
  totales.estado = estadoDiferencia(totales.diferencia);
  return { filas: filas, totales: totales };
}

function mesesDisponibles() {
  const set = new Set();
  estado.desplazamientos.forEach(function (d) { if (d.fecha) set.add(mesClave(d.fecha)); });
  estado.gastos.forEach(function (g) { if (g.fecha) set.add(mesClave(g.fecha)); });
  return Array.from(set).sort().reverse();
}

function desplazamientosOrdenados() {
  return estado.desplazamientos.slice().sort(function (a, b) {
    if (a.fecha === b.fecha) return String(b.id).localeCompare(String(a.id));
    return a.fecha < b.fecha ? 1 : -1;
  });
}

function gastosOrdenados() {
  return estado.gastos.slice().sort(function (a, b) {
    if (a.fecha === b.fecha) return String(b.id).localeCompare(String(a.id));
    return a.fecha < b.fecha ? 1 : -1;
  });
}

/* ---------------- utilidades de interfaz ---------------- */

const $ = function (sel) { return document.querySelector(sel); };

let toastTimer = null;
function toast(texto) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = texto;
  el.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { el.classList.remove('visible'); }, 2600);
}

function abrirHoja(html) {
  if (MODO_CONSULTA) return soloConsulta();
  const dlg = document.getElementById('hoja');
  dlg.innerHTML = '<div class="hoja-cuerpo">' + html + '</div>';
  if (!dlg.open) {
    if (typeof dlg.showModal === 'function') dlg.showModal();
    else dlg.setAttribute('open', '');
  }
  const primero = dlg.querySelector('input, select, textarea');
  if (primero && window.innerWidth > 720) primero.focus();
}

function cerrarHoja() {
  const dlg = document.getElementById('hoja');
  if (typeof dlg.close === 'function' && dlg.open) dlg.close();
  else dlg.removeAttribute('open');
  dlg.innerHTML = '';
}

function cabeceraHoja(titulo, subtitulo) {
  return '' +
    '<div class="hoja-cab">' +
      '<div>' +
        '<h2>' + esc(titulo) + '</h2>' +
        (subtitulo ? '<p>' + esc(subtitulo) + '</p>' : '') +
      '</div>' +
      '<button type="button" class="hoja-cerrar" data-accion="cerrar-hoja" aria-label="Cerrar">✕</button>' +
    '</div>';
}

function opcionesTrabajadores(seleccionado, conVacio) {
  let html = '';
  if (conVacio) html += '<option value="">— Sin asignar —</option>';
  estado.trabajadores.forEach(function (t) {
    html += '<option value="' + esc(t.id) + '"' + (t.id === seleccionado ? ' selected' : '') + '>' + esc(t.nombre) + '</option>';
  });
  return html;
}

function descargar(nombre, contenido, tipo) {
  const blob = new Blob([contenido], { type: tipo || 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nombre;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    URL.revokeObjectURL(url);
    a.remove();
  }, 1200);
}

/* ---------------- vistas ---------------- */

function vistaResumen() {
  const datos = resumenPeriodo(ui.periodo);
  const t = datos.totales;
  const claseDif = t.diferencia > 0.009 ? ' valor-positivo' : (t.diferencia < -0.009 ? ' valor-negativo' : '');
  const meses = mesesDisponibles();

  let html = '' +
    '<section class="periodo">' +
      '<label for="sel-periodo">Periodo</label>' +
      '<select id="sel-periodo" class="select-mini" data-cambio="periodo">' +
        '<option value="todo"' + (ui.periodo === 'todo' ? ' selected' : '') + '>Todo (acumulado)</option>' +
        meses.map(function (m) {
          return '<option value="' + m + '"' + (ui.periodo === m ? ' selected' : '') + '>' + esc(mesLargo(m)) + '</option>';
        }).join('') +
      '</select>' +
    '</section>' +
    '<div class="totales">' +
      '<div class="total">' +
        '<span class="total-etiqueta">A pagar</span>' +
        '<span class="total-valor">' + eur(t.aPagar) + '</span>' +
      '</div>' +
      '<div class="total">' +
        '<span class="total-etiqueta">Ya dado</span>' +
        '<span class="total-valor">' + eur(t.yaDado) + '</span>' +
      '</div>' +
      '<div class="total' + claseDif + '">' +
        '<span class="total-etiqueta">Diferencia</span>' +
        '<span class="total-valor">' + eur(t.diferencia) + '</span>' +
      '</div>' +
    '</div>' +
    '<p class="bloque-nota">' + km(t.km) + ' · ' + t.viajes + ' desplazamiento' + (t.viajes === 1 ? '' : 's') +
      ' · Cobran los que viven a más de ' + num(estado.ajustes.umbral) + ' km' +
      ' · Pagos contados desde el ' + fechaCorta(estado.ajustes.desde) + '.</p>';

  html += '<section class="bloque">' +
    '<div class="bloque-cab">' +
      '<h2 class="bloque-titulo">Por trabajador</h2>' +
      '<span class="bloque-nota" style="margin:0">' + estado.trabajadores.length + ' trabajadores</span>' +
    '</div>';

  if (!datos.filas.length) {
    html += '<div class="vacio"><strong>Sin trabajadores</strong><p>Añade el primero en Ajustes.</p></div>';
  } else {
    html += '<div class="lista-trabajadores">';
    datos.filas.forEach(function (f) {
      const wrk = f.trabajador;
      const claseDifCifra = f.diferencia > 0.009 ? 'pos' : (f.diferencia < -0.009 ? 'neg' : 'cero');
      const meta = f.cobra === 'SD'
        ? 'Sin distancia configurada'
        : num(wrk.distancia) + ' km de ida · ' + (f.cobra === 'SI' ? 'cobra' : 'no cobra');
      html += '' +
        '<button type="button" class="trabajador" data-accion="editar-trabajador" data-id="' + esc(wrk.id) + '">' +
          '<div class="trabajador-cab">' +
            '<div style="min-width:0">' +
              '<div class="trabajador-nombre">' + esc(wrk.nombre) + '</div>' +
              '<div class="trabajador-meta">' + esc(meta) + '</div>' +
            '</div>' +
            '<span class="insignia ' + f.estado.clave + '">' + f.estado.texto + '</span>' +
          '</div>' +
          '<div class="trabajador-cifras">' +
            '<div class="cifra"><span>Km</span><strong>' + num(f.km) + '</strong></div>' +
            '<div class="cifra"><span>A pagar</span><strong>' + eur(f.aPagar) + '</strong></div>' +
            '<div class="cifra"><span>Ya dado</span><strong>' + eur(f.yaDado) + '</strong></div>' +
            '<div class="cifra final"><span>Diferencia</span><strong class="' + claseDifCifra + '">' + eur(f.diferencia) + '</strong></div>' +
          '</div>' +
          '<div class="trabajador-pie">' +
            '<span>' + f.viajes.length + ' desplazamiento' + (f.viajes.length === 1 ? '' : 's') + '</span>' +
            (f.cobra === 'SD'
              ? '<span class="aviso-datos">Falta la distancia</span>'
              : '<span class="estado-cobra">Cobra: ' + (f.cobra === 'SI' ? 'SÍ' : 'NO') + '</span>') +
          '</div>' +
        '</button>';
    });
    html += '</div>';
  }
  html += '</section>';

  html += '<p class="bloque-nota">Toca un trabajador para cambiar su distancia, su nombre o si cobra.</p>';
  return html;
}

function vistaKm() {
  let html = '' +
    '<div class="segmentado" role="group" aria-label="Vista de kilómetros">' +
      '<button type="button" data-accion="km-modo" data-valor="lista" aria-pressed="' + (ui.kmModo === 'lista') + '">Lista</button>' +
      '<button type="button" data-accion="km-modo" data-valor="mes" aria-pressed="' + (ui.kmModo === 'mes') + '">Por mes</button>' +
    '</div>';

  if (ui.kmModo === 'mes') return html + vistaKmMatriz();

  const viajes = desplazamientosOrdenados();
  if (!viajes.length) {
    return html + '<div class="vacio"><strong>Todavía no hay desplazamientos</strong><p>' +
      (MODO_CONSULTA ? 'Aparecerán al publicar los datos del Excel.' : 'Pulsa el botón + para apuntar el primero.') + '</p></div>';
  }

  const grupos = new Map();
  viajes.forEach(function (d) {
    const k = mesClave(d.fecha);
    if (!grupos.has(k)) grupos.set(k, []);
    grupos.get(k).push(d);
  });

  grupos.forEach(function (lista, clave) {
    const kmMes = lista.reduce(function (s, d) { return s + kmBase(d); }, 0);
    const importeMes = lista.reduce(function (s, d) { return s + importeViaje(d, trabajadorPorId(d.trabajadorId)); }, 0);
    html += '<section class="grupo-mes">' +
      '<div class="grupo-cab">' +
        '<span class="grupo-titulo">' + esc(mesLargo(clave)) + '</span>' +
        '<span class="grupo-resumen">' + num(kmMes) + ' km · ' + eur(importeMes) + '</span>' +
      '</div>' +
      '<div class="lista-filas">';

    lista.forEach(function (d) {
      const t = trabajadorPorId(d.trabajadorId);
      const partes = String(d.fecha).split('-');
      const ajuste = (d.ajusteKm !== null && d.ajusteKm !== undefined && Math.abs(d.ajusteKm - kmBase(d)) > 0.001)
        ? '<span class="marca-ajuste">ajuste</span>' : '';
      const abreFila = MODO_CONSULTA ? '<div class="fila">'
        : '<button type="button" class="fila" data-accion="editar-viaje" data-id="' + esc(d.id) + '">';
      const cierraFila = MODO_CONSULTA ? '</div>' : '</button>';
      html += '' +
        abreFila +
          '<div class="fila-fecha"><strong>' + esc(partes[2] || '') + '</strong><span>' + esc(MESES_CORTOS[(Number(partes[1]) || 1) - 1]) + '</span></div>' +
          '<div class="fila-cuerpo">' +
            '<div class="fila-titulo">' + esc(nombreTrabajador(d.trabajadorId)) + ajuste + '</div>' +
            '<div class="fila-sub">' + esc(d.obra || 'Sin destino') + '</div>' +
          '</div>' +
          '<div class="fila-derecha">' +
            '<div class="fila-importe">' + num(kmBase(d)) + ' km</div>' +
            '<div class="fila-km">' + (importeViaje(d, t) > 0 ? eur(importeViaje(d, t)) : 'no cobra') + '</div>' +
          '</div>' +
        cierraFila;
    });

    html += '</div></section>';
  });

  return html;
}

function nombreCorto(nombre) {
  const partes = String(nombre || '').trim().split(/\s+/);
  if (partes.length === 1) return partes[0];
  return partes[0] + ' ' + partes[1].charAt(0) + '.';
}

function vistaKmMatriz() {
  const viajes = estado.desplazamientos;
  if (!viajes.length) {
    return '<div class="vacio"><strong>Sin kilómetros todavía</strong><p>Cuando apuntes desplazamientos verás aquí el resumen por meses.</p></div>';
  }

  const medida = ui.kmMedida;
  const meses = Array.from(new Set(viajes.map(function (d) { return mesClave(d.fecha); }))).sort();
  const idsConViajes = new Set(viajes.map(function (d) { return d.trabajadorId; }));
  const trabajadores = estado.trabajadores.filter(function (t) { return idsConViajes.has(t.id); });

  const valor = function (d, t) {
    return medida === 'km' ? kmBase(d) : importeViaje(d, t);
  };
  const celda = function (n) {
    return n ? '<td>' + (medida === 'km' ? num(n) : eur(n)) + '</td>' : '<td class="cero">—</td>';
  };
  const etiquetaMes = function (m) {
    const p = m.split('-');
    return MESES_CORTOS[(Number(p[1]) || 1) - 1] + ' ' + String(p[0]).slice(2);
  };

  let html = '' +
    '<div class="segmentado" role="group" aria-label="Medida">' +
      '<button type="button" data-accion="km-medida" data-valor="km" aria-pressed="' + (medida === 'km') + '">Kilómetros</button>' +
      '<button type="button" data-accion="km-medida" data-valor="eur" aria-pressed="' + (medida === 'eur') + '">Euros</button>' +
    '</div>' +
    '<div class="tabla-envoltura"><table class="matriz"><thead><tr><th>Trabajador</th>';

  meses.forEach(function (m) { html += '<th>' + esc(etiquetaMes(m)) + '</th>'; });
  html += '<th>Total</th></tr></thead><tbody>';

  const totalesMes = {};
  meses.forEach(function (m) { totalesMes[m] = 0; });
  let granTotal = 0;

  trabajadores.forEach(function (t) {
    let totalTrabajador = 0;
    html += '<tr><td title="' + esc(t.nombre) + '">' + esc(nombreCorto(t.nombre)) + '</td>';
    meses.forEach(function (m) {
      const suma = viajes
        .filter(function (d) { return mesClave(d.fecha) === m && d.trabajadorId === t.id; })
        .reduce(function (s, d) { return s + valor(d, t); }, 0);
      totalesMes[m] += suma;
      totalTrabajador += suma;
      html += celda(suma);
    });
    granTotal += totalTrabajador;
    html += '<td class="total-col">' + (medida === 'km' ? num(totalTrabajador) : eur(totalTrabajador)) + '</td></tr>';
  });

  html += '</tbody><tfoot><tr><td>Total</td>';
  meses.forEach(function (m) {
    html += '<td>' + (medida === 'km' ? num(totalesMes[m]) : eur(totalesMes[m])) + '</td>';
  });
  html += '<td>' + (medida === 'km' ? num(granTotal) : eur(granTotal)) + '</td></tr></tfoot></table></div>';

  html += '<p class="bloque-nota">' + (medida === 'km'
    ? 'Kilómetros totales (ida + vuelta) por trabajador y mes. Desliza la tabla si hay muchos meses.'
    : 'Importe a pagar por trabajador y mes, con la tarifa actual. Desliza la tabla si hay muchos meses.') + '</p>';

  return html;
}

function vistaPagos() {
  const gastos = gastosOrdenados();
  const total = gastos.reduce(function (s, g) { return s + (Number(g.importe) || 0); }, 0);
  const litros = gastos.reduce(function (s, g) { return s + (Number(g.litros) || 0); }, 0);

  let html = '' +
    '<div class="totales" style="grid-template-columns:1fr 1fr">' +
      '<div class="total"><span class="total-etiqueta">Repostajes</span><span class="total-valor">' + eur(total) + '</span></div>' +
      '<div class="total"><span class="total-etiqueta">Litros</span><span class="total-valor">' + num(litros) + ' L</span></div>' +
    '</div>' +
    '<p class="bloque-nota">El total es todo el gasto en gasolina. Para «ya le he dado» solo cuentan los repostajes asignados a un trabajador y posteriores al ' + fechaCorta(estado.ajustes.desde) + '.</p>';

  if (!gastos.length) {
    return html + '<div class="vacio"><strong>Sin pagos apuntados</strong><p>' +
      (MODO_CONSULTA ? 'Aparecerán al publicar los datos del Excel.' : 'Pulsa el botón + para añadir un repostaje o un pago.') + '</p></div>';
  }

  const grupos = new Map();
  gastos.forEach(function (g) {
    const k = mesClave(g.fecha);
    if (!grupos.has(k)) grupos.set(k, []);
    grupos.get(k).push(g);
  });

  grupos.forEach(function (lista, clave) {
    const totalMes = lista.reduce(function (s, g) { return s + (Number(g.importe) || 0); }, 0);
    html += '<section class="grupo-mes">' +
      '<div class="grupo-cab">' +
        '<span class="grupo-titulo">' + esc(mesLargo(clave)) + '</span>' +
        '<span class="grupo-resumen">' + eur(totalMes) + '</span>' +
      '</div>' +
      '<div class="lista-filas">';

    lista.forEach(function (g) {
      const partes = String(g.fecha).split('-');
      const detalle = [];
      if (g.proveedor) detalle.push(g.proveedor);
      if (g.litros) detalle.push(num(g.litros) + ' L');
      if (g.ticket) detalle.push('#' + g.ticket);
      const abreFila = MODO_CONSULTA ? '<div class="fila">'
        : '<button type="button" class="fila" data-accion="editar-pago" data-id="' + esc(g.id) + '">';
      const cierraFila = MODO_CONSULTA ? '</div>' : '</button>';
      html += '' +
        abreFila +
          '<div class="fila-fecha"><strong>' + esc(partes[2] || '') + '</strong><span>' + esc(MESES_CORTOS[(Number(partes[1]) || 1) - 1]) + '</span></div>' +
          '<div class="fila-cuerpo">' +
            '<div class="fila-titulo">' + esc(nombreTrabajador(g.trabajadorId)) + '</div>' +
            '<div class="fila-sub">' + esc(detalle.join(' · ') || 'Sin detalle') + '</div>' +
          '</div>' +
          '<div class="fila-derecha">' +
            '<div class="fila-importe">' + eur(g.importe) + '</div>' +
            '<div class="fila-km">' + esc(g.vehiculo || '') + '</div>' +
          '</div>' +
        cierraFila;
    });

    html += '</div></section>';
  });

  return html;
}

/* Ajustes en la web publicada: todo de consulta, sin formularios ni botones de cambio. */
function vistaAjustesConsulta() {
  const datos = resumenPeriodo('todo');
  const inf = (EXCEL && EXCEL.resumen) || {};

  let html = '' +
    '<section class="tarjeta">' +
      '<h2>Solo consulta</h2>' +
      '<p>Esta web muestra la copia publicada del Excel. Aquí no se puede cambiar nada: los datos se apuntan en el libro del PC y se suben con <strong>Publicar app en internet.bat</strong>.</p>' +
      (EXCEL ? '<p class="bloque-nota" style="margin:10px 0 0">Libro del ' + esc(EXCEL.generadoTexto || '—') +
        (inf.desplazamientos !== undefined ? ' · ' + inf.desplazamientos + ' desplaz. · ' + inf.pagos + ' pagos' : '') + '</p>' : '') +
      '<button type="button" class="btn btn-suave btn-bloque" style="margin-top:12px" data-accion="recargar-excel">Recargar los datos del Excel</button>' +
      '<p class="bloque-nota">Vuelve a leer la copia publicada. Si acabas de publicar, ya está aquí; si no, sigue igual.</p>' +
    '</section>';

  html += '<section class="tarjeta">' +
    '<h2>Cálculo</h2>' +
    '<div class="estadisticas">' +
      '<div class="estadistica"><strong>' + esc(num(estado.ajustes.tarifa)) + ' €</strong><span>por 100 km</span></div>' +
      '<div class="estadistica"><strong>' + esc(num(estado.ajustes.umbral)) + ' km</strong><span>umbral</span></div>' +
      '<div class="estadistica"><strong>' + esc(fechaCorta(estado.ajustes.desde)) + '</strong><span>pagos desde</span></div>' +
    '</div>' +
    '<p class="bloque-nota">Cobran los que viven a más de ' + esc(num(estado.ajustes.umbral)) + ' km.</p>' +
    '</section>';

  html += '<section class="tarjeta">' +
    '<h2>Trabajadores</h2>' +
    '<div id="lista-trabajadores-ajustes">';

  if (!estado.trabajadores.length) {
    html += '<p class="bloque-nota" style="margin:0 0 10px">Todavía no hay trabajadores.</p>';
  } else {
    estado.trabajadores.forEach(function (t) {
      const c = cobra(t);
      const chip = c === 'SI' ? '<span class="chip si">Cobra</span>'
        : (c === 'NO' ? '<span class="chip no">No cobra</span>' : '<span class="chip sd">Sin datos</span>');
      const nViajes = estado.desplazamientos.filter(function (d) { return d.trabajadorId === t.id; }).length;
      html += '' +
        '<div class="mini-fila">' +
          '<div class="mini-fila-cuerpo">' +
            '<div class="mini-fila-titulo">' + esc(t.nombre) + '</div>' +
            '<div class="mini-fila-sub">' + (t.distancia === null ? 'Sin distancia' : num(t.distancia) + ' km de ida') + ' · ' + nViajes + ' desplaz.</div>' +
          '</div>' +
          chip +
        '</div>';
    });
  }

  html += '</div></section>';

  html += '<section class="tarjeta">' +
    '<h2>Datos</h2>' +
    '<p>Puedes descargar una copia o el CSV para revisarlo en el ordenador. Para cambiar algo, en el Excel.</p>' +
    '<div class="estadisticas">' +
      '<div class="estadistica"><strong>' + estado.desplazamientos.length + '</strong><span>Desplaz.</span></div>' +
      '<div class="estadistica"><strong>' + estado.gastos.length + '</strong><span>Pagos</span></div>' +
      '<div class="estadistica"><strong>' + estado.trabajadores.length + '</strong><span>Trabaj.</span></div>' +
    '</div>' +
    '<div class="lista-botones">' +
      '<button type="button" class="btn btn-suave btn-pequeno" data-accion="exportar-json">Exportar copia</button>' +
      '<button type="button" class="btn btn-suave btn-pequeno" data-accion="exportar-csv">Exportar CSV</button>' +
      '<button type="button" class="btn btn-suave btn-pequeno" data-accion="compartir">Compartir resumen</button>' +
    '</div>' +
    '<p class="bloque-nota">Total actual: ' + eur(datos.totales.aPagar) + ' a pagar · ' + eur(datos.totales.yaDado) + ' ya dados · ' + eur(datos.totales.diferencia) + ' de diferencia.</p>' +
    '</section>';

  html += '<p class="pie-app">Control Gasolina · solo consulta<br>Mismos cálculos que el Excel: km ida + vuelta, tarifa por 100 km y umbral de distancia.</p>';

  return html;
}

function vistaAjustes() {
  if (MODO_CONSULTA) return vistaAjustesConsulta();
  const datos = resumenPeriodo('todo');
  let html = '' +
    '<section class="tarjeta">' +
      '<h2>Cálculo</h2>' +
      '<p>La tarifa y el umbral se aplican a todos los desplazamientos al instante.</p>' +
      '<form id="form-ajustes" class="campos" novalidate>' +
        '<div class="campos dos">' +
          '<div class="campo">' +
            '<label for="aj-tarifa">Tarifa (€ / 100 km)</label>' +
            '<input id="aj-tarifa" name="tarifa" type="text" inputmode="decimal" value="' + esc(num(estado.ajustes.tarifa)) + '" required>' +
          '</div>' +
          '<div class="campo">' +
            '<label for="aj-umbral">Umbral (km)</label>' +
            '<input id="aj-umbral" name="umbral" type="text" inputmode="decimal" value="' + esc(num(estado.ajustes.umbral)) + '" required>' +
          '</div>' +
        '</div>' +
        '<div class="campo">' +
          '<label for="aj-desde">Pagos contados desde</label>' +
          '<input id="aj-desde" name="desde" type="date" value="' + esc(estado.ajustes.desde) + '" required>' +
          '<span class="pista">Los repostajes anteriores a esta fecha no restan en «ya le he dado».</span>' +
        '</div>' +
        '<p class="error" id="error-ajustes" hidden></p>' +
        '<button type="submit" class="btn btn-principal btn-bloque">Guardar ajustes</button>' +
      '</form>' +
    '</section>';

  html += '<section class="tarjeta">' +
    '<h2>Trabajadores</h2>' +
    '<p>Toca uno para editar su distancia, su nombre o si cobra.</p>' +
    '<div id="lista-trabajadores-ajustes">';

  if (!estado.trabajadores.length) {
    html += '<p class="bloque-nota" style="margin:0 0 10px">Todavía no hay trabajadores.</p>';
  } else {
    estado.trabajadores.forEach(function (t) {
      const c = cobra(t);
      const chip = c === 'SI' ? '<span class="chip si">Cobra</span>'
        : (c === 'NO' ? '<span class="chip no">No cobra</span>' : '<span class="chip sd">Sin datos</span>');
      const nViajes = estado.desplazamientos.filter(function (d) { return d.trabajadorId === t.id; }).length;
      html += '' +
        '<button type="button" class="mini-fila" data-accion="editar-trabajador" data-id="' + esc(t.id) + '">' +
          '<div class="mini-fila-cuerpo">' +
            '<div class="mini-fila-titulo">' + esc(t.nombre) + '</div>' +
            '<div class="mini-fila-sub">' + (t.distancia === null ? 'Sin distancia' : num(t.distancia) + ' km de ida') + ' · ' + nViajes + ' desplaz.</div>' +
          '</div>' +
          chip +
        '</button>';
    });
  }

  html += '</div>' +
    '<button type="button" class="btn btn-suave btn-bloque" style="margin-top:12px" data-accion="nuevo-trabajador">+ Añadir trabajador</button>' +
    '</section>';

  if (EXCEL) {
    const inf = EXCEL.resumen || {};
    const pendiente = excelPendiente();
    html += '<section class="tarjeta">' +
      '<h2>Datos del Excel</h2>' +
      '<p>Última copia del libro: <strong>' + esc(EXCEL.generadoTexto || '—') + '</strong>' +
        (inf.desplazamientos !== undefined ? ' · ' + inf.desplazamientos + ' desplaz. · ' + inf.pagos + ' pagos' : '') + '.</p>' +
      (pendiente ? '<p class="bloque-nota" style="color:var(--ambar);font-weight:600;margin-bottom:10px">La app todavía no tiene estos datos.</p>' : '') +
      '<button type="button" class="btn btn-principal btn-bloque" data-accion="reset">' + (pendiente ? 'Cargar los datos nuevos' : 'Recargar los datos del Excel') + '</button>' +
      '<p class="bloque-nota">Al cargarlos se sustituyen los de la app. Exporta una copia antes si has apuntado cosas aquí.</p>' +
      '</section>';
  }

  html += '<section class="tarjeta">' +
    '<h2>Datos</h2>' +
    '<p>La app guarda todo en este dispositivo. Para pasarlo a otro móvil o al PC, exporta una copia y luego impórtala.</p>' +
    '<div class="estadisticas">' +
      '<div class="estadistica"><strong>' + estado.desplazamientos.length + '</strong><span>Desplaz.</span></div>' +
      '<div class="estadistica"><strong>' + estado.gastos.length + '</strong><span>Pagos</span></div>' +
      '<div class="estadistica"><strong>' + estado.trabajadores.length + '</strong><span>Trabaj.</span></div>' +
    '</div>' +
    '<div class="lista-botones">' +
      '<button type="button" class="btn btn-suave btn-pequeno" data-accion="exportar-json">Exportar copia</button>' +
      '<button type="button" class="btn btn-suave btn-pequeno" data-accion="importar-json">Importar copia</button>' +
      '<button type="button" class="btn btn-suave btn-pequeno" data-accion="exportar-csv">Exportar CSV</button>' +
      '<button type="button" class="btn btn-suave btn-pequeno" data-accion="compartir">Compartir resumen</button>' +
    '</div>' +
    '<input type="file" id="archivo-importar" accept=".json,application/json" hidden>' +
    '<p class="bloque-nota">Total actual: ' + eur(datos.totales.aPagar) + ' a pagar · ' + eur(datos.totales.yaDado) + ' ya dados · ' + eur(datos.totales.diferencia) + ' de diferencia.</p>' +
    '</section>';

  html += '<section class="tarjeta">' +
    '<h2>Esta app</h2>' +
    '<p>No usa servidores ni cuentas: los datos y los cálculos se quedan en este dispositivo.</p>' +
    '<p class="bloque-nota" style="margin:0">Última modificación: ' + esc(new Date(estado.actualizado).toLocaleString('es-ES')) + '</p>' +
    '</section>';

  html += '<p class="pie-app">Control Gasolina · app móvil<br>Mismos cálculos que el Excel: km ida + vuelta, tarifa por 100 km y umbral de distancia.</p>';

  return html;
}

/* ---------------- render ---------------- */

const TITULOS = { resumen: 'Resumen', km: 'Desplazamientos', pagos: 'Pagos', ajustes: 'Ajustes' };

function render() {
  pintarAvisoExcel();

  const titulo = document.getElementById('titulo-vista');
  if (titulo) titulo.textContent = TITULOS[ui.vista] || 'Resumen';

  const compartir = document.getElementById('btn-compartir');
  if (compartir) compartir.hidden = ui.vista !== 'resumen';

  const fab = document.getElementById('fab');
  if (fab) {
    fab.hidden = MODO_CONSULTA || !(ui.vista === 'km' || ui.vista === 'pagos');
    fab.setAttribute('aria-label', ui.vista === 'km' ? 'Añadir desplazamiento' : 'Añadir pago');
  }

  document.querySelectorAll('.nav-boton').forEach(function (b) {
    if (b.dataset.vista === ui.vista) b.setAttribute('aria-current', 'page');
    else b.removeAttribute('aria-current');
  });

  const contenido = document.getElementById('contenido');
  if (!contenido) return;

  if (ui.vista === 'resumen') contenido.innerHTML = vistaResumen();
  else if (ui.vista === 'km') contenido.innerHTML = vistaKm();
  else if (ui.vista === 'pagos') contenido.innerHTML = vistaPagos();
  else contenido.innerHTML = vistaAjustes();

  actualizarAviso();
}

/* ---------------- formulario de desplazamiento ---------------- */

function abrirFormViaje(id) {
  if (MODO_CONSULTA) return soloConsulta();
  const editando = id ? estado.desplazamientos.find(function (d) { return d.id === id; }) : null;
  if (id && !editando) return;

  if (!estado.trabajadores.length) {
    toast('Añade primero un trabajador en Ajustes');
    ui.vista = 'ajustes';
    render();
    return;
  }

  const d = editando || {
    fecha: hoyISO(),
    trabajadorId: estado.trabajadores[0].id,
    obra: '',
    kmIda: null,
    kmVuelta: null,
    ajusteKm: null,
    obs: ''
  };

  const html = cabeceraHoja(editando ? 'Editar desplazamiento' : 'Nuevo desplazamiento', 'Solo hace falta la fecha, el trabajador y los km.')
    + '<form id="form-viaje" class="hoja-form" novalidate>'
    + '<div class="campos">'
    + '<div class="campo"><label for="v-fecha">Fecha</label><input id="v-fecha" name="fecha" type="date" value="' + esc(d.fecha) + '" required></div>'
    + '<div class="campo"><label for="v-trabajador">Trabajador</label><select id="v-trabajador" name="trabajadorId" required>' + opcionesTrabajadores(d.trabajadorId) + '</select></div>'
    + '<div class="campo"><label for="v-obra">Obra / destino</label><input id="v-obra" name="obra" type="text" value="' + esc(d.obra) + '" placeholder="Ej. CASTILLO, ASPE, C/CARTAGENA…" autocomplete="off"></div>'
    + '<div class="campos dos">'
    + '<div class="campo"><label for="v-ida">Km ida</label><input id="v-ida" name="kmIda" type="text" inputmode="decimal" value="' + (d.kmIda === null ? '' : esc(num(d.kmIda))) + '" placeholder="0" required></div>'
    + '<div class="campo"><label for="v-vuelta">Km vuelta</label><input id="v-vuelta" name="kmVuelta" type="text" inputmode="decimal" value="' + (d.kmVuelta === null ? '' : esc(num(d.kmVuelta))) + '" placeholder="0"></div>'
    + '</div>'
    + '<div class="campo"><label for="v-obs">Observaciones</label><input id="v-obs" name="obs" type="text" value="' + esc(d.obs) + '" placeholder="Opcional" autocomplete="off"></div>'
    + '</div>'
    + '<div class="calculado" id="v-previa"></div>'
    + '<details class="opciones"' + (d.ajusteKm !== null && d.ajusteKm !== undefined ? ' open' : '') + '>'
      + '<summary>Opciones avanzadas</summary>'
      + '<div class="campo"><label for="v-ajuste">Km a pagar (solo si quieres ajustarlo)</label>'
        + '<input id="v-ajuste" name="ajusteKm" type="text" inputmode="decimal" value="' + (d.ajusteKm === null || d.ajusteKm === undefined ? '' : esc(num(d.ajusteKm))) + '" placeholder="Se usa el total de ida + vuelta">'
        + '<span class="pista">Si lo dejas vacío se paga la suma de ida y vuelta. Si el trabajador no cobra, no se paga nada.</span>'
      + '</div>'
    + '</details>'
    + '<p class="error" id="error-form" hidden></p>'
    + '<div class="acciones">'
      + '<button type="button" class="btn btn-suave" data-accion="cerrar-hoja">Cancelar</button>'
      + '<button type="submit" class="btn btn-principal">Guardar</button>'
    + '</div>'
    + (editando
      ? '<div class="acciones-secundarias"><button type="button" class="btn btn-pequeno btn-peligro" data-accion="borrar-viaje" data-id="' + esc(editando.id) + '">Borrar desplazamiento</button></div>'
      : '')
    + '</form>';

  abrirHoja(html);
  conectarFormViaje(editando, d);
}

function conectarFormViaje(editando, datosIniciales) {
  const form = document.getElementById('form-viaje');
  if (!form) return;

  const ida = document.getElementById('v-ida');
  const vuelta = document.getElementById('v-vuelta');
  const ajuste = document.getElementById('v-ajuste');
  const trabajador = document.getElementById('v-trabajador');
  const previa = document.getElementById('v-previa');

  const actualizarPrevia = function () {
    const t = trabajadorPorId(trabajador.value);
    const idaN = aNumero(ida.value) || 0;
    const vueltaN = aNumero(vuelta.value) || 0;
    const total = r2(idaN + vueltaN);
    const ajusteN = aNumero(ajuste.value);
    const base = ajusteN === null ? total : ajusteN;
    const cobraT = cobra(t) === 'SI';
    const importe = r2(cobraT ? base * estado.ajustes.tarifa / 100 : 0);
    previa.innerHTML = '<div><div class="calculado-etiqueta">Km totales</div><div class="calculado-detalle">' + num(total) + ' km · ' + (ajusteN !== null ? 'a pagar ' + num(base) + ' km' : 'sin ajuste') + '</div></div>'
      + '<div style="text-align:right"><div class="calculado-etiqueta">Importe</div><strong>' + eur(importe) + '</strong></div>';
  };

  [ida, vuelta, ajuste].forEach(function (el) { el.addEventListener('input', actualizarPrevia); });
  trabajador.addEventListener('change', actualizarPrevia);
  actualizarPrevia();

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const error = document.getElementById('error-form');
    error.hidden = true;

    const fecha = document.getElementById('v-fecha').value;
    const trabajadorId = trabajador.value;
    const obra = document.getElementById('v-obra').value.trim();
    const obs = document.getElementById('v-obs').value.trim();
    const idaN = aNumero(ida.value);
    const vueltaN = aNumero(vuelta.value);
    const ajusteN = aNumero(ajuste.value);

    const fallo = function (msg) {
      error.textContent = msg;
      error.hidden = false;
      error.scrollIntoView({ block: 'center', behavior: 'smooth' });
    };

    if (!fecha) return fallo('Indica la fecha.');
    if (!trabajadorId) return fallo('Elige un trabajador.');
    if (idaN === null && vueltaN === null) return fallo('Escribe los kilómetros de ida o de vuelta.');
    if ((idaN !== null && idaN < 0) || (vueltaN !== null && vueltaN < 0)) return fallo('Los kilómetros no pueden ser negativos.');
    if ((idaN || 0) + (vueltaN || 0) <= 0) return fallo('El total de kilómetros debe ser mayor que cero.');
    if (ajusteN !== null && ajusteN < 0) return fallo('Los km a pagar no pueden ser negativos.');

    const registro = {
      id: editando ? editando.id : nuevoId('v'),
      fecha: fecha,
      trabajadorId: trabajadorId,
      obra: obra,
      kmIda: idaN === null ? 0 : r2(idaN),
      kmVuelta: vueltaN === null ? 0 : r2(vueltaN),
      ajusteKm: ajusteN === null ? null : r2(ajusteN),
      obs: obs
    };

    if (editando) {
      const i = estado.desplazamientos.findIndex(function (x) { return x.id === editando.id; });
      estado.desplazamientos[i] = registro;
    } else {
      estado.desplazamientos.push(registro);
    }

    guardarEstado();
    cerrarHoja();
    render();
    toast(editando ? 'Desplazamiento actualizado' : 'Desplazamiento añadido');
  });
}

/* ---------------- formulario de pago ---------------- */

function abrirFormPago(id) {
  if (MODO_CONSULTA) return soloConsulta();
  const editando = id ? estado.gastos.find(function (g) { return g.id === id; }) : null;
  if (id && !editando) return;

  if (!estado.trabajadores.length) {
    toast('Añade primero un trabajador en Ajustes');
    ui.vista = 'ajustes';
    render();
    return;
  }

  const g = editando || {
    fecha: hoyISO(),
    trabajadorId: estado.trabajadores[0].id,
    vehiculo: '',
    proveedor: '',
    litros: null,
    importe: null,
    ticket: '',
    obs: ''
  };

  const html = cabeceraHoja(editando ? 'Editar pago' : 'Nuevo pago', 'Repostaje o entrega de dinero al trabajador.')
    + '<form id="form-pago" class="hoja-form" novalidate>'
    + '<div class="campos">'
    + '<div class="campo"><label for="p-fecha">Fecha</label><input id="p-fecha" name="fecha" type="date" value="' + esc(g.fecha) + '" required></div>'
    + '<div class="campo"><label for="p-trabajador">Trabajador</label><select id="p-trabajador" name="trabajadorId">' + opcionesTrabajadores(g.trabajadorId, true) + '</select></div>'
    + '<div class="campos dos">'
    + '<div class="campo"><label for="p-importe">Importe (€)</label><input id="p-importe" name="importe" type="text" inputmode="decimal" value="' + (g.importe === null ? '' : esc(num(g.importe))) + '" placeholder="0,00" required></div>'
    + '<div class="campo"><label for="p-litros">Litros</label><input id="p-litros" name="litros" type="text" inputmode="decimal" value="' + (g.litros === null || g.litros === undefined ? '' : esc(num(g.litros))) + '" placeholder="Opcional"></div>'
    + '</div>'
    + '<div class="campos dos">'
    + '<div class="campo"><label for="p-vehiculo">Vehículo</label><input id="p-vehiculo" name="vehiculo" type="text" value="' + esc(g.vehiculo) + '" placeholder="Matrícula o modelo" autocomplete="off"></div>'
    + '<div class="campo"><label for="p-proveedor">Gasolinera</label><input id="p-proveedor" name="proveedor" type="text" value="' + esc(g.proveedor) + '" placeholder="Opcional" autocomplete="off"></div>'
    + '</div>'
    + '<div class="campo"><label for="p-ticket">Nº ticket / factura</label><input id="p-ticket" name="ticket" type="text" value="' + esc(g.ticket) + '" placeholder="Opcional" autocomplete="off"></div>'
    + '<div class="campo"><label for="p-obs">Observaciones</label><input id="p-obs" name="obs" type="text" value="' + esc(g.obs) + '" placeholder="Opcional" autocomplete="off"></div>'
    + '</div>'
    + '<p class="error" id="error-form" hidden></p>'
    + '<div class="acciones">'
      + '<button type="button" class="btn btn-suave" data-accion="cerrar-hoja">Cancelar</button>'
      + '<button type="submit" class="btn btn-principal">Guardar</button>'
    + '</div>'
    + (editando
      ? '<div class="acciones-secundarias"><button type="button" class="btn btn-pequeno btn-peligro" data-accion="borrar-pago" data-id="' + esc(editando.id) + '">Borrar pago</button></div>'
      : '')
    + '</form>';

  abrirHoja(html);

  const form = document.getElementById('form-pago');
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const error = document.getElementById('error-form');
    error.hidden = true;

    const fecha = document.getElementById('p-fecha').value;
    const trabajadorId = document.getElementById('p-trabajador').value;
    const importe = aNumero(document.getElementById('p-importe').value);
    const litros = aNumero(document.getElementById('p-litros').value);

    const fallo = function (msg) {
      error.textContent = msg;
      error.hidden = false;
      error.scrollIntoView({ block: 'center', behavior: 'smooth' });
    };

    if (!fecha) return fallo('Indica la fecha.');
    if (importe === null || importe <= 0) return fallo('Escribe un importe mayor que cero.');
    if (litros !== null && litros < 0) return fallo('Los litros no pueden ser negativos.');

    const registro = {
      id: editando ? editando.id : nuevoId('g'),
      fecha: fecha,
      trabajadorId: trabajadorId,
      vehiculo: document.getElementById('p-vehiculo').value.trim(),
      proveedor: document.getElementById('p-proveedor').value.trim(),
      litros: litros === null ? null : r2(litros),
      importe: r2(importe),
      ticket: document.getElementById('p-ticket').value.trim(),
      obs: document.getElementById('p-obs').value.trim()
    };

    if (editando) {
      const i = estado.gastos.findIndex(function (x) { return x.id === editando.id; });
      estado.gastos[i] = registro;
    } else {
      estado.gastos.push(registro);
    }

    guardarEstado();
    cerrarHoja();
    render();
    toast(editando ? 'Pago actualizado' : 'Pago añadido');
  });
}

/* ---------------- formulario de trabajador ---------------- */

function abrirFormTrabajador(id) {
  if (MODO_CONSULTA) return soloConsulta();
  const editando = id ? estado.trabajadores.find(function (t) { return t.id === id; }) : null;
  if (id && !editando) return;

  const t = editando || { nombre: '', distancia: null, casa: '', obs: '', cobraManual: null };
  const modoCobra = t.cobraManual === true ? 'si' : (t.cobraManual === false ? 'no' : 'auto');

  const html = cabeceraHoja(editando ? 'Editar trabajador' : 'Nuevo trabajador', 'La distancia es solo de ida (casa → trabajo).')
    + '<form id="form-trabajador" class="hoja-form" novalidate>'
    + '<div class="campos">'
    + '<div class="campo"><label for="t-nombre">Nombre</label><input id="t-nombre" name="nombre" type="text" value="' + esc(t.nombre) + '" placeholder="Nombre del trabajador" required autocomplete="off"></div>'
    + '<div class="campo"><label for="t-distancia">Distancia casa → trabajo (km, solo ida)</label><input id="t-distancia" name="distancia" type="text" inputmode="decimal" value="' + (t.distancia === null ? '' : esc(num(t.distancia))) + '" placeholder="Ej. 57"><span class="pista">Con más de ' + num(estado.ajustes.umbral) + ' km cobra desplazamiento.</span></div>'
    + '<div class="campo"><label for="t-cobra">¿Cobra desplazamiento?</label><select id="t-cobra" name="cobraManual">'
      + '<option value="auto"' + (modoCobra === 'auto' ? ' selected' : '') + '>Automático (según la distancia)</option>'
      + '<option value="si"' + (modoCobra === 'si' ? ' selected' : '') + '>Sí, siempre</option>'
      + '<option value="no"' + (modoCobra === 'no' ? ' selected' : '') + '>No</option>'
    + '</select></div>'
    + '<div class="campo"><label for="t-obs">Observaciones</label><input id="t-obs" name="obs" type="text" value="' + esc(t.obs) + '" placeholder="Opcional" autocomplete="off"></div>'
    + '<div class="campo"><label for="t-casa">Dirección</label><input id="t-casa" name="casa" type="text" value="' + esc(t.casa) + '" placeholder="Opcional" autocomplete="off"></div>'
    + '</div>'
    + '<p class="error" id="error-form" hidden></p>'
    + '<div class="acciones">'
      + '<button type="button" class="btn btn-suave" data-accion="cerrar-hoja">Cancelar</button>'
      + '<button type="submit" class="btn btn-principal">Guardar</button>'
    + '</div>'
    + (editando
      ? '<div class="acciones-secundarias"><button type="button" class="btn btn-pequeno btn-peligro" data-accion="borrar-trabajador" data-id="' + esc(editando.id) + '">Borrar trabajador</button></div>'
      : '')
    + '</form>';

  abrirHoja(html);

  const form = document.getElementById('form-trabajador');
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const error = document.getElementById('error-form');
    error.hidden = true;

    const nombre = document.getElementById('t-nombre').value.trim();
    const distancia = aNumero(document.getElementById('t-distancia').value);
    const cobraManual = document.getElementById('t-cobra').value;

    const fallo = function (msg) {
      error.textContent = msg;
      error.hidden = false;
      error.scrollIntoView({ block: 'center', behavior: 'smooth' });
    };

    if (!nombre) return fallo('Escribe el nombre.');
    if (distancia !== null && distancia < 0) return fallo('La distancia no puede ser negativa.');

    const repetido = estado.trabajadores.some(function (x) {
      return x.nombre.toLowerCase() === nombre.toLowerCase() && (!editando || x.id !== editando.id);
    });
    if (repetido) return fallo('Ya hay un trabajador con ese nombre.');

    const registro = {
      id: editando ? editando.id : nuevoId('t'),
      nombre: nombre,
      distancia: distancia === null ? null : r2(distancia),
      casa: document.getElementById('t-casa').value.trim(),
      obs: document.getElementById('t-obs').value.trim(),
      cobraManual: cobraManual === 'si' ? true : (cobraManual === 'no' ? false : null)
    };

    if (editando) {
      const i = estado.trabajadores.findIndex(function (x) { return x.id === editando.id; });
      estado.trabajadores[i] = registro;
    } else {
      estado.trabajadores.push(registro);
    }

    guardarEstado();
    cerrarHoja();
    render();
    toast(editando ? 'Trabajador actualizado' : 'Trabajador añadido');
  });
}

/* ---------------- borrados ---------------- */

function borrarViaje(id) {
  if (MODO_CONSULTA) return soloConsulta();
  const d = estado.desplazamientos.find(function (x) { return x.id === id; });
  if (!d) return;
  if (!confirm('¿Borrar este desplazamiento del ' + fechaCorta(d.fecha) + '?')) return;
  estado.desplazamientos = estado.desplazamientos.filter(function (x) { return x.id !== id; });
  guardarEstado();
  cerrarHoja();
  render();
  toast('Desplazamiento borrado');
}

function borrarPago(id) {
  if (MODO_CONSULTA) return soloConsulta();
  const g = estado.gastos.find(function (x) { return x.id === id; });
  if (!g) return;
  if (!confirm('¿Borrar este pago de ' + eur(g.importe) + ' del ' + fechaCorta(g.fecha) + '?')) return;
  estado.gastos = estado.gastos.filter(function (x) { return x.id !== id; });
  guardarEstado();
  cerrarHoja();
  render();
  toast('Pago borrado');
}

function borrarTrabajador(id) {
  if (MODO_CONSULTA) return soloConsulta();
  const t = trabajadorPorId(id);
  if (!t) return;
  const nViajes = estado.desplazamientos.filter(function (d) { return d.trabajadorId === id; }).length;
  const nPagos = estado.gastos.filter(function (g) { return g.trabajadorId === id; }).length;
  const aviso = '¿Borrar a ' + t.nombre + '?' +
    (nViajes || nPagos ? '\n\nTambién se borrarán ' + nViajes + ' desplazamiento(s) y ' + nPagos + ' pago(s) suyos.' : '');
  if (!confirm(aviso)) return;
  estado.trabajadores = estado.trabajadores.filter(function (x) { return x.id !== id; });
  estado.desplazamientos = estado.desplazamientos.filter(function (d) { return d.trabajadorId !== id; });
  estado.gastos = estado.gastos.filter(function (g) { return g.trabajadorId !== id; });
  guardarEstado();
  cerrarHoja();
  render();
  toast('Trabajador borrado');
}

/* ---------------- ajustes ---------------- */

function guardarAjustesDesdeForm(ev) {
  ev.preventDefault();
  if (MODO_CONSULTA) return soloConsulta();
  const error = document.getElementById('error-ajustes');
  error.hidden = true;

  const tarifa = aNumero(document.getElementById('aj-tarifa').value);
  const umbral = aNumero(document.getElementById('aj-umbral').value);
  const desde = document.getElementById('aj-desde').value;

  const fallo = function (msg) {
    error.textContent = msg;
    error.hidden = false;
  };

  if (tarifa === null || tarifa < 0) return fallo('La tarifa debe ser un número mayor o igual que cero.');
  if (umbral === null || umbral < 0) return fallo('El umbral debe ser un número mayor o igual que cero.');
  if (!desde) return fallo('Indica desde qué fecha se cuentan los pagos.');

  estado.ajustes.tarifa = tarifa;
  estado.ajustes.umbral = umbral;
  estado.ajustes.desde = desde;
  guardarEstado();
  render();
  toast('Ajustes guardados');
}

/* ---------------- exportar / importar ---------------- */

function exportarJSON() {
  const contenido = JSON.stringify({
    app: 'control-gasolina',
    version: 1,
    exportado: new Date().toISOString(),
    estado: estado
  }, null, 2);
  descargar('control_gasolina_copia_' + hoyISO() + '.json', contenido, 'application/json');
  toast('Copia exportada');
}

function importarJSON(archivo) {
  if (MODO_CONSULTA) return soloConsulta();
  const lector = new FileReader();
  lector.onload = function () {
    try {
      const bruto = JSON.parse(String(lector.result));
      const datos = bruto.estado ? bruto.estado : bruto;
      const nuevo = normalizar(datos);
      if (!confirm('Se reemplazarán los datos actuales por los de la copia (' + nuevo.desplazamientos.length + ' desplazamientos y ' + nuevo.gastos.length + ' pagos). ¿Continuar?')) return;
      estado = nuevo;
      guardarEstado();
      render();
      toast('Copia importada');
    } catch (e) {
      alert('No se pudo importar: ' + e.message);
    }
  };
  lector.readAsText(archivo);
}

function csvResumen() {
  const datos = resumenPeriodo(ui.periodo);
  const filas = [];
  filas.push(['Trabajador', 'Distancia (km)', '¿Cobra?', 'Km totales', 'A pagar (EUR)', 'Ya le he dado (EUR)', 'Diferencia (EUR)', 'Estado']);
  const n = function (v) { return String(r2(v)).replace('.', ','); };
  datos.filas.forEach(function (f) {
    filas.push([
      f.trabajador.nombre,
      f.trabajador.distancia === null ? '' : n(f.trabajador.distancia),
      f.cobra === 'SI' ? 'SÍ' : (f.cobra === 'NO' ? 'NO' : 'SIN DATOS'),
      n(f.km),
      n(f.aPagar),
      n(f.yaDado),
      n(f.diferencia),
      f.estado.texto
    ]);
  });
  filas.push([]);
  filas.push(['TOTAL GENERAL', '', '', n(datos.totales.km), n(datos.totales.aPagar), n(datos.totales.yaDado), n(datos.totales.diferencia), '']);

  const texto = filas.map(function (fila) {
    return fila.map(function (v) {
      const s = String(v === null || v === undefined ? '' : v);
      return /[";\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
    }).join(';');
  }).join('\r\n');

  descargar('resumen_desplazamientos_' + (ui.periodo === 'todo' ? 'todo' : ui.periodo) + '.csv', '\uFEFF' + texto, 'text/csv;charset=utf-8');
  toast('CSV exportado');
}

function textoResumen() {
  const datos = resumenPeriodo(ui.periodo);
  const lineas = [];
  lineas.push('RESUMEN DESPLAZAMIENTOS · ' + (ui.periodo === 'todo' ? 'acumulado' : mesLargo(ui.periodo)));
  lineas.push('');
  datos.filas.forEach(function (f) {
    if (!f.viajes.length && !f.yaDado) return;
    lineas.push(f.trabajador.nombre + ': ' + num(f.km) + ' km · ' + eur(f.aPagar) + ' a pagar · ' + eur(f.yaDado) + ' dados · ' + eur(f.diferencia) + ' (' + f.estado.texto + ')');
  });
  lineas.push('');
  lineas.push('TOTAL: ' + num(datos.totales.km) + ' km · ' + eur(datos.totales.aPagar) + ' a pagar · ' + eur(datos.totales.yaDado) + ' dados · ' + eur(datos.totales.diferencia) + ' (' + datos.totales.estado.texto + ')');
  return lineas.join('\n');
}

function compartirResumen() {
  const texto = textoResumen();
  if (navigator.share) {
    navigator.share({ title: 'Control Gasolina', text: texto }).catch(function () {});
    return;
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texto).then(function () {
      toast('Resumen copiado');
    }).catch(function () {
      window.prompt('Copia el resumen:', texto);
    });
    return;
  }
  window.prompt('Copia el resumen:', texto);
}

function abrirRestaurar() {
  if (MODO_CONSULTA) return soloConsulta();
  const cuando = EXCEL && EXCEL.generadoTexto ? ' del ' + EXCEL.generadoTexto : '';
  if (!confirm('Se borrarán los cambios que hayas hecho en la app y volverán los datos del Excel' + cuando + '. ¿Continuar?')) return;
  estado = normalizar(copia(SEMILLA));
  guardarEstado();
  marcarExcelCargado();
  ui.periodo = 'todo';
  render();
  toast(EXCEL ? 'Datos del Excel cargados' : 'Datos del Excel restaurados');
}

/* ---------------- eventos ---------------- */

document.addEventListener('click', function (ev) {
  const nav = ev.target.closest('[data-vista]');
  if (nav) {
    ui.vista = nav.dataset.vista;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const el = ev.target.closest('[data-accion]');
  if (!el) return;

  const accion = el.dataset.accion;
  const id = el.dataset.id;

  if (accion === 'cerrar-hoja') return cerrarHoja();
  if (accion === 'km-modo') { ui.kmModo = el.dataset.valor; render(); return; }
  if (accion === 'km-medida') { ui.kmMedida = el.dataset.valor; render(); return; }
  if (accion === 'nuevo-viaje') return abrirFormViaje(null);
  if (accion === 'editar-viaje') return abrirFormViaje(id);
  if (accion === 'borrar-viaje') return borrarViaje(id);
  if (accion === 'nuevo-pago') return abrirFormPago(null);
  if (accion === 'editar-pago') return abrirFormPago(id);
  if (accion === 'borrar-pago') return borrarPago(id);
  if (accion === 'nuevo-trabajador') return abrirFormTrabajador(null);
  if (accion === 'editar-trabajador') return abrirFormTrabajador(id);
  if (accion === 'borrar-trabajador') return borrarTrabajador(id);
  if (accion === 'recargar-excel') return recargarDatosPublicados();
  if (accion === 'exportar-json') return exportarJSON();
  if (accion === 'exportar-csv') return csvResumen();
  if (accion === 'compartir') return compartirResumen();
  if (accion === 'reset') return abrirRestaurar();
  if (accion === 'descartar-excel') { marcarExcelCargado(); pintarAvisoExcel(); return; }
  if (accion === 'importar-json') {
    const input = document.getElementById('archivo-importar');
    if (input) input.click();
    return;
  }
});

document.addEventListener('change', function (ev) {
  if (ev.target.matches('[data-cambio="periodo"]')) {
    ui.periodo = ev.target.value;
    render();
    return;
  }
  if (ev.target.id === 'archivo-importar') {
    const archivo = ev.target.files && ev.target.files[0];
    ev.target.value = '';
    if (archivo) importarJSON(archivo);
  }
});

document.addEventListener('submit', function (ev) {
  if (ev.target.id === 'form-ajustes') guardarAjustesDesdeForm(ev);
});

document.addEventListener('DOMContentLoaded', function () {
  if (MODO_CONSULTA) {
    document.body.classList.add('modo-consulta');
    const aviso = document.getElementById('aviso-consulta');
    if (aviso) {
      aviso.innerHTML = '<span>Solo consulta · los cambios se hacen en el Excel y se publican desde el PC</span>' +
        '<button type="button" class="btn btn-suave btn-pequeno" data-accion="recargar-excel">Recargar</button>';
      aviso.hidden = false;
    }
  }

  const fab = document.getElementById('fab');
  if (fab) {
    fab.addEventListener('click', function () {
      if (ui.vista === 'km') abrirFormViaje(null);
      else if (ui.vista === 'pagos') abrirFormPago(null);
    });
  }

  const compartir = document.getElementById('btn-compartir');
  if (compartir) compartir.addEventListener('click', compartirResumen);

  const dlg = document.getElementById('hoja');
  if (dlg) {
    dlg.addEventListener('click', function (ev) {
      if (ev.target === dlg) cerrarHoja();
    });
    dlg.addEventListener('cancel', function () {
      dlg.innerHTML = '';
    });
  }

  refrescarDatosDelExcel().then(function () {
    estado = cargarEstado();
    guardarEstado();
    render();
  });
});
