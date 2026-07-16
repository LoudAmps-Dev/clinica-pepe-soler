# Prototipo base para paginas sanitarias

Plantilla para crear rapido una web de clinica, consulta sanitaria o profesional de salud usando como base el prototipo de Clinica Pepe Soler. La idea es mantener una estructura comun y cambiar solo identidad, contenidos, fotos, tratamientos, datos de contacto y textos legales.

## 1. Datos del proyecto

| Campo | Valor a completar |
| --- | --- |
| Nombre comercial | `Clinica / Consulta / Profesional` |
| Especialidad principal | `Fisioterapia, osteopatia, psicologia, odontologia, podologia...` |
| Ciudad y zona | `Ciudad, barrio o area de servicio` |
| Telefono principal | `+34 ...` |
| WhatsApp | `+34 ...` |
| Email | `correo@dominio.com` |
| Direccion | `Calle, numero, local, CP, ciudad` |
| Horario | `Lunes a viernes...` |
| Instagram / redes | `URL` |
| Google Maps | `URL o query de Maps` |
| Colegiacion / registro sanitario | `Numero colegiado, registro sanitario, titulacion legal` |

## 2. Estructura recomendada de la pagina

### Cabecera sanitaria

Objetivo: que el usuario identifique rapido la clinica y pueda contactar.

Contenido:

- Logo.
- Nombre de la clinica.
- Subtitulo sanitario: `Consulta sanitaria de [especialidad]`.
- Direccion corta.
- Telefono.
- Email.

Ejemplo:

```txt
Clinica [Nombre]
Consulta sanitaria de [Especialidad principal]
[Direccion corta] · [Ciudad]
[Telefono] · [Email]
```

### Navegacion

Secciones base:

- Profesional / Clinica.
- Equipo.
- Tratamientos.
- Contacto.

Anclas sugeridas:

```txt
#profesional
#equipo
#tratamientos
#cita
```

### Hero principal

Objetivo: presentar al profesional o la clinica con confianza, claridad y prueba profesional.

Contenido:

- Foto principal del profesional, equipo o consulta.
- Sobrelinea: `Clinica sanitaria en [Ciudad] desde [Ano]`.
- H1: nombre del profesional o clinica.
- Rol / credenciales.
- Parrafo breve de autoridad y enfoque.
- Estadisticas opcionales.
- Botones: reservar cita, llamar, email.

Plantilla:

```txt
[Nombre principal]
[Especialidad] · [Numero colegiado / credencial]

[Frase de 1-2 lineas sobre experiencia, enfoque clinico y tipo de pacientes.]

+[X] anos de experiencia
+[X] pacientes / historias clinicas
Desde [Ano]
```

### Equipo

Objetivo: mostrar personas reales y funciones.

Por cada miembro:

```txt
Nombre:
Rol:
Detalle breve:
Foto:
```

Ejemplo:

```txt
Nombre: [Nombre Apellido]
Rol: Fisioterapeuta
Detalle breve: Especialista en suelo pelvico y ejercicio terapeutico.
Foto: assets/Equipo/nombre.jpg
```

### Tratamientos

Objetivo: explicar areas de servicio sin saturar.

Por cada disciplina:

```txt
Nombre:
Descripcion:
Tecnicas / servicios:
CTA:
```

Ejemplo:

```txt
Nombre: Fisioterapia
Descripcion: Recuperacion funcional de lesiones musculoesqueleticas, postoperatorios y dolor persistente mediante terapia manual y ejercicio.
Tecnicas:
- Terapia manual
- Ejercicio terapeutico
- Readaptacion deportiva
- Puncion seca
- Educacion en dolor
CTA: Solicitar cita
```

### Galeria de clinica

Objetivo: reducir friccion mostrando el espacio real.

Fotos recomendadas:

- Fachada o entrada.
- Recepcion.
- Sala de tratamiento.
- Detalle humano o equipamiento.

Alt text:

```txt
Consulta de [Nombre de la clinica]
Sala de tratamiento de [Nombre de la clinica]
Instalaciones de [Nombre de la clinica]
```

### Contacto y cita previa

Objetivo: que la accion final sea inmediata.

Bloques:

- Contacto: telefono, WhatsApp, email.
- Horario.
- Ubicacion.
- Enlace a Google Maps.

Plantilla:

```txt
Atencion en consulta con cita previa.

Telefono: [telefono]
WhatsApp: [whatsapp]
Email: [email]
Horario: [horario]
Direccion: [direccion completa]
```

### Modal de cita por WhatsApp

Campos recomendados:

- Nombre, opcional.
- Motivo.
- Tratamiento.
- Preferencia de horario.
- Comentario.

Motivos sugeridos:

```txt
Dolor o molestia
Lesion deportiva
Revision o mantenimiento
Consulta infantil
Postoperatorio
Otro
```

Mensaje generado:

```txt
Hola, me gustaria pedir cita en [Nombre de la clinica].
Nombre: [nombre]
Motivo: [motivo]
Tratamiento: [tratamiento]
Preferencia de horario: [horario]
Comentario: [comentario]
```

### Footer

Contenido obligatorio o recomendable:

- Nombre legal o comercial.
- Credenciales sanitarias.
- Enlace a Instagram u otra red.
- Aviso legal.
- Privacidad.
- Cookies.
- Credito de desarrollo, si aplica.

## 3. Archivos a personalizar en este prototipo

### `src/App.jsx`

Zonas habituales a cambiar:

- Constantes de contacto: telefono, WhatsApp, Instagram, email y Maps.
- `ClinicHeader`: nombre, subtitulo y datos visibles.
- `LINKS`: nombres de navegacion.
- `DISCIPLINES`: tratamientos.
- `TEAM`: equipo.
- `GALLERY`: fotos de la clinica.
- `PepeLanding`: hero, credenciales, texto principal y estadisticas.
- `VisitSummary`: contacto, horario y direccion.
- `Footer`: datos legales, redes y credito.
- `AppointmentModal`: opciones del formulario y mensaje de WhatsApp.

### `public/assets`

Estructura sugerida:

```txt
public/assets/
  logo-manos.png
  Equipo/
    profesional-principal.jpg
    miembro-equipo-1.jpg
    miembro-equipo-2.jpg
    clinica1.jpg
    clinica2.jpg
    clinica3.jpg
```

Recomendaciones:

- Usar nombres sin caracteres raros cuando sea posible.
- Optimizar imagenes antes de subirlas.
- Mantener fotos reales de la consulta y equipo.
- Cuidar los `alt` para accesibilidad y SEO.

### `public/styles/clinic.css`

Cambios habituales:

- Colores de marca en `:root`.
- Tipografias.
- Espaciados generales.
- Estilo de botones.
- Ajustes responsive.

Tokens principales:

```css
--c-teal-500
--c-teal-600
--c-teal-700
--c-bg
--c-paper
--c-ink
--c-muted
--font-sans
--font-serif
```

### Paginas legales

Archivos:

```txt
public/aviso-legal.html
public/privacidad.html
public/cookies.html
```

Personalizar:

- Titular de la web.
- NIF/CIF si corresponde.
- Domicilio.
- Email de contacto.
- Responsable del tratamiento.
- Politica de cookies real.
- Textos especificos de actividad sanitaria.

## 4. Checklist rapido por cliente

### Identidad

- [ ] Nombre comercial actualizado.
- [ ] Logo cambiado.
- [ ] Colores de marca ajustados.
- [ ] Tono de texto adaptado.

### Contacto

- [ ] Telefono principal correcto.
- [ ] WhatsApp con prefijo internacional sin simbolos.
- [ ] Email correcto.
- [ ] Direccion completa.
- [ ] Google Maps probado.
- [ ] Horario actualizado.

### Sanitario y legal

- [ ] Numero de colegiado o registro sanitario incluido si aplica.
- [ ] No se prometen resultados garantizados.
- [ ] Textos clinicos revisados por el profesional.
- [ ] Aviso legal personalizado.
- [ ] Privacidad personalizada.
- [ ] Cookies personalizada.

### Contenido

- [ ] Hero con propuesta clara.
- [ ] Equipo completo.
- [ ] Tratamientos revisados.
- [ ] Fotos reales cargadas.
- [ ] Textos alternativos de imagen.
- [ ] CTAs funcionando.

### Tecnico

- [ ] Enlaces `tel:` correctos.
- [ ] Enlaces `mailto:` correctos.
- [ ] WhatsApp abre con mensaje correcto.
- [ ] Menu movil funciona.
- [ ] Modal se cierra con boton, fondo y Escape.
- [ ] Responsive revisado en movil.
- [ ] No hay errores en consola.

## 5. Mini plantilla de contenido para duplicar

```md
# [Nombre de la clinica]

## Datos

- Especialidad:
- Ciudad:
- Direccion:
- Telefono:
- WhatsApp:
- Email:
- Horario:
- Instagram:
- Google Maps:
- Credenciales:

## Hero

- Sobrelinea:
- Titulo:
- Rol / subtitulo:
- Texto principal:
- Estadisticas:
- Foto principal:

## Equipo

1. Nombre:
   Rol:
   Detalle:
   Foto:

2. Nombre:
   Rol:
   Detalle:
   Foto:

## Tratamientos

1. Nombre:
   Descripcion:
   Servicios:

2. Nombre:
   Descripcion:
   Servicios:

## Galeria

- Foto 1:
- Foto 2:
- Foto 3:

## Contacto

- Texto introductorio:
- Telefono:
- WhatsApp:
- Email:
- Horario:
- Direccion:
```

## 6. Criterios de estilo para paginas sanitarias

- Priorizar claridad y confianza sobre textos comerciales agresivos.
- Usar fotos reales siempre que sea posible.
- Evitar promesas absolutas: mejor `ayuda a`, `orientado a`, `tratamiento de`, `acompanamiento en`.
- Mantener llamadas a la accion visibles: reservar cita, llamar y WhatsApp.
- Hacer que la direccion, horario y telefono aparezcan sin esfuerzo.
- Dar protagonismo a credenciales, experiencia y equipo humano.
- Revisar terminologia sanitaria con el cliente antes de publicar.
