# Javascript-lab12

## Módulo 4: Javascript en el Navegador
Conocer y manejar la API de Javascript utilizada por el navegador web.

👀 Instrucciones 👀 

Pre-requisitos

- Lighthouse
- Crear cuenta en Netlify utilizando cuenta Github

### Unidad 4: Scripts y Carga de recursos
Lanzamiento a producción de sitios web estáticos potenciados con Javascript. 
Taller de deploy de un stio html estático aumentado con Javascript.
Carga de recursos en sitios web.
Herramientas y rendimiento de sitios web.
Técnicas de puesta en producción para sitios web.
Lighthouse.

### Instrucciones
- Crear repo en cuenta propia
- Agregar un nuevo repositorio remoto con el siguiente comando:

  ```
    git remote add production git@github.com:<TU-USUARIO>/<TU-REPO-PARA-DEPLOY>.git
  ```
- Subir repositorio a cuenta propia
  ```
    git push production main
  ```
- Crear cuenta Netlify
- Crear nuevo sitio
- Asociar repositorio desde cuenta propia
- Configurar repositorio `real-page`
- Revisar sitio en netlify
- Correr lighthouse en una ventana incógnito
- Vamos a aplicar mejoras en:
    + Carga CSS HEAD
    + Carga Imagenes fuera del above the fold
    + Carga scripts dependientes e independientes
    + Error al hacer jQuery defer y como solucionarlo con window y el evento 'load'

Luego de ver las mejoras aplicadas analizaremos todo en local utilizando el archivo contenido en `simple-page`

### Critical Render Path

https://www.youtube.com/watch?v=FnhieCCfhlA

https://javascript.info/script-async-defer

- CRP
