# Control Gasolina

App web para llevar el control de los desplazamientos y los pagos de gasolina de la empresa.

**Ver la app:** <https://juanjosemas.github.io/Control-gasolina/>

Funciona en el móvil y en cualquier ordenador, sin instalar nada.

**La web publicada es de solo consulta:** se puede mirar, filtrar por mes y exportar una copia,
pero no se puede añadir, editar ni borrar nada, ni siquiera desde el PC del dueño. Los datos se
cambian en el Excel y se suben con `Publicar app en internet.bat`.

La versión abierta en local (`index.html` desde el PC) sigue siendo editable, y guarda sus apuntes
en el navegador (`localStorage`) de ese dispositivo.

## Contenido

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La app (una sola página, sin dependencias ni conexión). |
| `estilos.css` | Estilos. |
| `app.js` | Cálculos, guardado, vistas y exportación. |
| `datos.js` | Datos del Excel, generados automáticamente. **No editar a mano.** |

## Cómo se actualizan los datos

1. Se apunta en `Control_Gasolina_Empresa.xlsx` (en el PC) y se guarda.
2. Se ejecuta `Actualizar app movil.bat`: lee la hoja `DESPLAZAMIENTOS`, `Registro Gasolina` y
   `CONFIGURACIÓN`, y reescribe `datos.js`.
3. Se publica con `Publicar app en internet.bat` (o respondiendo «S» al final del paso 2).
4. Al recargar la web se ven esos datos. Como la web no guarda nada, siempre muestra la última
   versión publicada: no hay que «cargar» nada.

Este repositorio solo contiene la app: el libro de Excel, las copias y los `.bat` se quedan en el PC.

## Aviso

El repositorio y la web son públicos: cualquiera con el enlace puede ver los datos que hay en
`datos.js` (trabajadores, kilómetros y pagos).
