# 🧰 MyDailyToolkit

## ¿Qué es?

**MyDailyToolkit** es un conjunto de herramientas personales diseñado para facilitar la organización diaria. Desde gestionar tus recetas y planificar tus comidas, hasta compartir listas de la compra con tus compañeros de piso, todo en una única aplicación web simple, funcional y en constante evolución.

Su objetivo es centralizar tareas cotidianas que suelen estar repartidas entre notas, apps de mensajería o listas desorganizadas.

---

## ¿Cómo se instala?

### 📦 Requisitos

Este frontend depende de un backend complementario llamado [`MyDailyToolkitBackEnd`](https://github.com/DanielSanchezBetancor/MyDailyToolkitBackEnd). Asegúrate de tenerlo en funcionamiento antes de iniciar el frontend.

### 🔧 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/DanielSanchezBetancor/my-daily-toolkit.git
cd my-daily-toolkit
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura el archivo `.env` en la raíz del proyecto para conectar con el backend. Un ejemplo básico sería:

```bash
NEXT_PUBLIC_PORT=8000.uks1.devtunnels.ms
NEXT_PUBLIC_DOMAIN=https://z0z1d67d
NEXT_PUBLIC_DOMAIN_SEPARATOR=-
NEXT_PUBLIC_SUBDOMAIN=
```

4. Inicia el entorno de desarrollo:

```bash
npm run dev
```

5. Abre `http://localhost:3000` en tu navegador para ver la aplicación funcionando.

---

### ¿Cómo se usa?

Una vez arrancada la aplicación:

- Accede al panel principal donde encontrarás las distintas herramientas disponibles.
- Entra en la sección Cocina para gestionar:
  - Tu recetario personal
  - El calendario de comidas semanal
  - La lista de la compra compartida con compañeros de piso
- Cada usuario puede añadir productos con su cantidad y enlace a tienda, y marcar si es necesario comprarlos.
- El botón “Añadir al carrito” permite agrupar todos los productos necesarios para facilitar la compra.

---

### ¿Qué ofrece este conjunto de herramientas?

#### 🍽 Cocina

- Recetario editable y organizable
- Generador de calendario semanal de comidas
- Lista de compra colaborativa con:
  - Cantidades
  - Links directos a tiendas como Amazon o Carrefour
  - Checkbox para marcar qué se necesita comprar
  - Botón de añadir al carrito con todos los productos necesarios

#### 📅 Organización diaria (próximamente)

- Seguimiento de tareas diarias
- Registro de datos personales
- Seguimiento de videojuegos y progresos

#### 🌍 Pensado para ser compartido

- Cada herramienta busca facilitar el día a día en entornos compartidos (pisos, familias, parejas).
- Estructura modular para futuras herramientas.