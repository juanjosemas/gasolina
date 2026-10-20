# Control Gasolina

App web para llevar el control de los desplazamientos y los pagos de gasolina de la empresa.

**Ver la app:** <https://juanjosemas.github.io/Control-gasolina/>

Funciona en el móvil y en cualquier ordenador, sin instalar nada. Cada dispositivo guarda sus
propios apuntes en el navegador (`localStorage`), así que lo que se apunte en el móvil no aparece
en el ordenador: para eso están las copias de seguridad (Ajustes → Exportar copia).

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
4. Al abrir la web, si hay datos más nuevos que los que tenía el dispositivo, sale el aviso
   **«Hay datos nuevos del Excel»** con el botón **Cargar**.

Este repositorio solo contiene la app: el libro de Excel, las copias y los `.bat` se quedan en el PC.

## Aviso

El repositorio y la web son públicos: cualquiera con el enlace puede ver los datos que hay en
`datos.js` (trabajadores, kilómetros y pagos).
