# Dashboard - Especificaciones Funcionales

## Dashboard Home

### Introducción

El **Dashboard inicial** será la página principal de acceso a la plataforma. Su objetivo es ofrecer una visión general de los eventos recientes y relevantes, mostrando información resumida que permita al usuario mantenerse al día con sus proyectos, recetas y cualquier contenido que forme parte del sistema. Este diseño está pensado para ser modular y escalable, adaptándose a futuros cambios y nuevas funcionalidades.

El Dashboard estará estructurado en **widgets**, que se ajustarán según el tipo de contenido mostrado, facilitando la navegación y manteniendo una estética limpia y organizada.

### Estructura General

#### Navbar

El Navbar estará situado en el lateral izquierdo de la vista y contendrá:

- Botón de Colapsar/Plegar: Un botón interactivo que permitirá al usuario plegar o expandir el Navbar.
  - Estado Expandido: Cuando el Navbar esté expandido, se mostrarán tanto los iconos como los textos de las secciones y subcategorías.
  - Estado Plegado: Cuando el Navbar esté plegado, solo se mostrarán los iconos correspondientes a cada sección (sin los textos). Esto permitirá ahorrar espacio en la pantalla, dejando el área útil más amplia. Al hacer hover sobre un ícono, puede mostrarse un tooltip con el nombre completo de la sección.
- Logo/Título de la Página: En la parte superior del Navbar, mostrando el logo. Esto servirá como punto de referencia visual y de identidad de la plataforma.
- Secciones Principales:
  - Categorías Desplegables: El Navbar contendrá categorías principales que agruparán secciones del dashboard, como:
    - Gaming: Donde se gestionarán juegos y proyectos relacionados (e.g., Throne and Liberty, Minecraft).
    - Recetas: Sección para gestionar y organizar recetas, incluyendo el recetario y las listas de compra.
    - Proyectos: Espacio para proyectos personales, donde se podrán agregar tareas y hacer seguimiento de metas.
    - Cada categoría tendrá subcategorías desplegables si es necesario (por ejemplo, dentro de Gaming, pueden ir Builds y Progreso).
  - Indicador Visual de Sección Activa:El Navbar tendrá un sistema de resaltado o cambio de color para indicar la sección activa, ayudando al usuario a orientarse de manera eficiente dentro de la aplicación.
  - Espacio para Elementos Futuros: Dejar espacio reservado para nuevas funcionalidades que puedan ser añadidas en el futuro, como accesos rápidos, configuraciones del usuario, enlaces de ayuda o notificaciones.
  - Estilo y Accesibilidad: El Navbar será pegajoso (sticky), manteniéndose visible mientras el usuario navega a través de diferentes secciones del dashboard.

#### Dashboard


### **Eventos Recientes**
- El contenido principal del Dashboard se enfocará en mostrar eventos recientes agrupados en **widgets**.
- Cada widget será adaptable según el tipo de evento y podrá incluir:
  - **Título**: Nombre o descripción del evento (e.g., "Nueva receta añadida: Ensalada César").
  - **Fecha o tiempo transcurrido**: Un indicador de cuándo ocurrió el evento (e.g., "Hace 2 días").
  - **Icono o indicador visual**: Algo que identifique rápidamente el tipo de evento.

---

### 3. **Tipos de Widgets**
Los eventos recientes se representarán en **widgets de diferentes formatos**, según su tipo. Aquí algunos ejemplos:

#### a. **Widget Pequeño**
- Para eventos simples o breves, como:
  - Tareas completadas.
  - Notas rápidas.

#### b. **Widget Mediano**
- Para eventos con un poco más de detalle, como:
  - Nuevas recetas añadidas.
  - Progreso en un proyecto.

#### c. **Widget Grande**
- Para eventos destacados o importantes, como:
  - Cambios grandes en un proyecto.
  - Resúmenes generales (e.g., "5 recetas añadidas esta semana").

---

### 4. **Diseño Modular**
El Dashboard estará dividido en **secciones principales**:
- **Izquierda:** Una lista de los eventos recientes ordenados cronológicamente.
- **Derecha:** Espacio reservado para widgets destacados o información clave.

---

## Funcionalidades Iniciales
1. Mostrar los eventos recientes en widgets adaptados según su tipo.
2. Navbar lateral con navegación intuitiva.
3. Sistema modular que permita agregar nuevas funcionalidades o widgets en el futuro.

---

## Futuras Expansiones
- Barra de búsqueda (cuando haya más contenido que necesite ser filtrado).
- Accesos rápidos personalizados según las preferencias del usuario.
- Widgets adicionales para gráficos, estadísticas, o contenido más específico.

---

## Sección de **Throne and Liberty Builds**

### Visión General

La sección de Throne and Liberty Builds permitirá al usuario gestionar múltiples builds y compararlas con los objetivos que tengan, calculando qué objetos y recursos les faltan para completar su build objetivo. Esta funcionalidad busca simplificar la planificación y seguimiento de progresos, optimizando el tiempo invertido en el juego.

#### Estructura de la Sección

##### Lista de Builds

El usuario podrá crear, editar y gestionar múltiples builds. Cada build incluirá:

- Nombre de la Build: El nombre definido por el usuario (e.g., "PvE Heavy Damage", "PvP Tank").
- Descripción: Breve descripción opcional (e.g., "Build enfocada en raids PvE").
- Estado de la Build: Indicador visual (e.g., "Activa", "En progreso", "Completada").
- Acciones:
  - Botón para editar la build.
  - Opción para duplicar una build.
  - Botón para eliminar la build.

*Nota: Las builds estarán ordenadas por estado o por última modificación, con opciones de filtrado.*

##### Vista Detallada de una Build

Cada build tendrá dos secciones principales: Build Actual y Build Objetivo.

###### Build Actual

En el dashboard principal, la Build Actual mostrará únicamente:

- Íconos de Equipo: Vista visual de las piezas de equipo actuales.
  - Si el ítem actual y el objetivo son diferentes, se resaltará con un indicador visual (por ejemplo, un borde de color rojo o un icono de advertencia).
- Iconos de Habilidades: Mostrar únicamente los iconos de las habilidades activas actuales.
- Resumen de Estadísticas Clave: Un breve resumen con los valores de atributos principales, como "Fuerza: 230", "Destreza: 120", etc.

Al hacer hover o clic en una pieza de equipo o habilidad, se abrirá un modal que incluirá toda la información detallada, como:

- Equipo Actual:
  - Nombre del ítem: Ej. "Máscara de lobo fantasmal".
  - Rareza y Nivel: Ej. Épico, Nivel 12.
  - Estadísticas Clave: Ej. +3 Destreza, Probabilidad de crítico +83.
  - Efectos Especiales: Ej. "Aumenta la recuperación de maná en 13.5 por segundo".
  - Botón para Reemplazar: Acceso rápido para seleccionar otro ítem disponible en el inventario.
- Habilidades Actuales:
  - Nombre de la habilidad: Ej. "Golpe Ascendente".
  - Nivel Actual: Ej. Nivel 5.
  - Enfriamiento (Cooldown): Ej. "20s".
  - Botón para cambiar habilidad.
- Estadísticas Clave:
  - Vista completa con todos los atributos secundarios y avanzados del personaje.
  - Opción para expandir o colapsar categorías.

###### Build Objetivo

Define los objetivos deseados para esta build:

- Equipo Objetivo:
  - Lista de las piezas ideales para alcanzar el máximo rendimiento.
  - Detalles del lugar o método donde se obtiene cada pieza (e.g., "Drop en Mazmorra X", "Craftable en Taller Y").
- Habilidades Objetivo:
  - Vista de habilidades recomendadas o necesarias para la build.
  - Indicadores de progreso si la habilidad requiere mejora o desbloqueo.
- Estadísticas Objetivo:
  - Resumen de las metas que el usuario quiere alcanzar (e.g., "Ataque crítico 35%", "Salud máxima 1200").
  - Comparación automática con las estadísticas actuales.

###### Cálculo de Objetos Faltantes

La sección que compara la build actual con la build objetivo incluirá:

- Lista de Objetos Faltantes:
  - Visualización clara de los ítems faltantes con información de dónde conseguirlos.
  - Indicación del porcentaje completado de cada categoría (e.g., equipo, habilidades, estadísticas).
- Progreso de la Build:
  - Barra de progreso general que muestre cuánto falta para completar la build.
  - Sub-barras para cada sección (equipo, habilidades, estadísticas).
- Indicadores Visuales:
  - Colores para identificar el estado de cada ítem:
  - Verde: Completado.
  - Amarillo: En progreso.
  - Rojo: Faltante.

###### Opciones Adicionales

Para una experiencia más personalizada y funcional:

- Botón para Crear Nueva Build:
  - Posición destacada en el dashboard.
  - Abre un modal o página con las opciones iniciales (nombre, tipo de build, descripción).
- Comparación entre Builds:
  - Herramienta para comparar dos builds lado a lado.
- Exportar e Importar Builds:
  - Posibilidad de exportar una build en formato texto o JSON.
- Opción para importar builds creadas por otros usuarios.

##### Roadmap Diario:

Listado de actividades sugeridas para progresar en los objetivos de la build (e.g., mazmorras, raids, crafteo).

---

## Widget Largo en el Dashboard

La información sobre las builds se mostrará en un widget largo dentro del **Dashboard**, con las siguientes características:

1. **Resumen de Build Actual**:
   - Nombre de la build.
   - Estado actual del equipo y habilidades.
   - Estadísticas clave.
  
2. **Resumen de Build Objetivo**:
   - Nombre de la build.
   - Equipo recomendado.
   - Habilidades recomendadas.
   - Estadísticas objetivo.

3. **Progreso de Build**:
   - Barra de progreso o porcentaje de objetos faltantes.
   - Íconos visuales que indican el estado de los objetos.

4. **Interacción**:
   - Los objetos faltantes serán clicables para llevar al usuario directamente a la tienda, área de búsqueda, o lista de tareas relacionadas.

---

## Funcionalidades Adicionales (Fase 2 y Futuro)
1. **Filtrado de Builds**:
   - El usuario podrá filtrar las builds por tipo (PvE, PvP, etc.), estado (en progreso, completada, activa), o cualquier otra categoría relevante.

2. **Recomendaciones Automáticas**:
   - Basado en el equipo actual, el sistema podrá sugerir cambios o piezas de equipo recomendadas para mejorar la build.

3. **Estadísticas Detalladas**:
   - Mostrar detalles sobre el rendimiento de cada pieza de equipo, como el impacto en el DPS, la defensa o la regeneración de mana, según la build y los objetivos.

---
