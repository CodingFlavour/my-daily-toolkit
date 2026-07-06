export interface LocalStorage {
  completed: string[];
  notes: string[];
}

export interface Achievement {
  id: string;
  texto: string;
  completed?: boolean;
  note?: string;
}

export interface Category {
  label: string;
  hitos: Achievement[];
}

export interface Milestone {
  id: string;
  nombre: string;
  sub: string;
  abierta: boolean;
  categorias: Category[]
}

export const MILESTONES = [
  {
    id: 'alpha1017',
    nombre: 'Alpha v1.0.17_02',
    sub: '20 ago 2010 — redstone crudo, sin Nether',
    abierta: false,
    categorias: [
      {
        label: 'Refugio y supervivencia base',
        hitos: [
          { id: 'refugio', texto: 'Refugio cerrado sin huecos antes de la primera noche' },
          { id: '3noches', texto: 'Sobrevivir 3 noches consecutivas sin morir' },
          { id: 'kit-piedra', texto: 'Set completo de herramientas de piedra (pico, hacha, pala, espada)' },
        ],
      },
      {
        label: 'Minado y progresión',
        hitos: [
          { id: 'hierro', texto: 'Primer lingote de hierro fundido' },
          { id: 'armadura-hierro', texto: 'Set completo de armadura de hierro' },
          { id: 'diamante', texto: 'Primer diamante minado' },
          { id: 'pico-diamante', texto: 'Pico de diamante crafteado' },
        ],
      },
      {
        label: 'Redstone',
        hitos: [
          { id: 'palanca', texto: 'Puerta accionada con palanca' },
          { id: 'placa-presion', texto: 'Mecanismo activado con placa de presión' },
          { id: 'circuito', texto: 'Circuito con cable + antorcha de redstone que encienda algo a distancia' },
        ],
      },
      {
        label: 'General',
        hitos: [
          { id: 'discos-musica', texto: 'Conseguir los discos de música disponible' },
          { id: 'discos-musica-13', texto: 'Conseguir "13"' },
          { id: 'discos-musica-cat', texto: 'Conseguir "cat"' },
        ],
      },
      {
        label: 'Granjas',
        hitos: [
          { id: 'cobble-gen', texto: 'Generador de cobblestone infinito (lava + agua)' },
          { id: 'cactus', texto: 'Granja de cactus' },
          { id: 'caña-azucar', texto: 'Granja de caña de azucar' },
          { id: 'trigo', texto: 'Granja de trigo plantada y cosechada' },
        ],
      },
      {
        label: "Granjas extremas",
        hitos: [
          { id: 'mob-pasivos', texto: 'Granja para mobs pasivos' },
          { id: 'madera', texto: 'Granja de arboles' },
          { id: 'granja-ske', texto: 'Granja de esqueletos con un Spawner' }
        ]
      },
      {
        label: 'Mobs y combate',
        hitos: [
          { id: 'cerdo', texto: 'Montar un cerdo con montura' },
          { id: 'creeper', texto: 'Sobrevivir a la explosión de un Creeper (o matarlo limpio)' },
          { id: 'spider-jockey', texto: 'Sobrevivir a un encuentro con Spider Jockey' },
          { id: 'slime', texto: 'Matar un Slime grande y verlo dividirse' },
        ],
      },
      {
        label: 'Rarezas de la versión',
        hitos: [
          { id: 'triple chest', texto: 'Hay un bug para hacer cofres triples' },
          { id: 'tnt-punetazo', texto: 'Detonar TNT a puñetazo limpio (sin pedernal y acero)' },
          { id: 'fences', texto: 'Construir un cercado con fences' },
          { id: 'papel-libro', texto: 'Craftear papel + libro y montar un bookshelf' },
        ],
      },
    ],
  },
  {
    "id": "alpha120",
    "nombre": "Alpha v1.2.0",
    "sub": "30 oct 2010 — Halloween Update, el Nether",
    "abierta": false,
    "categorias": [
      {
        "label": "Portal y acceso al Nether",
        "hitos": [
          { "id": "obsidiana", "texto": "Minar obsidiana suficiente para el portal (10 bloques mínimo, pico de diamante)" },
          { "id": "portal-activar", "texto": "Construir y activar el portal (pedernal y acero)" },
          { "id": "primera-entrada", "texto": "Primera entrada al Nether sin morir" }
        ]
      },
      {
        "label": "Exploración y recursos del Nether",
        "hitos": [
          { "id": "glowstone-bloque", "texto": "Conseguir glowstone y craftearlo en bloque (9 dust → 1 bloque)" },
          { "id": "soul-sand", "texto": "Conseguir soul sand y traerlo al overworld" },
          { "id": "glowstone-base", "texto": "Sustituir antorchas por glowstone en alguna zona de tu base" },
          { "id": "sobrevivir-ghast", "texto": "Sobrevivir a un ghast — matarlo o salir vivo de su rango" }
        ]
      },
      {
        "label": "Mobs",
        "hitos": [
          { "id": "pigman-agro", "texto": "Provocar a un zombie pigman y sobrevivir al agro en cadena" },
          { "id": "pigman-chuleta", "texto": "Sacar chuleta cocinada de un zombie pigman muerto" }
        ]
      },
      {
        "label": "Overworld nuevo",
        "hitos": [
          { "id": "reloj", "texto": "Craftear un reloj (gold ingots + redstone)" },
          { "id": "pesca", "texto": "Pescar tu primer pez crudo y cocinarlo" },
          { "id": "desierto", "texto": "Encontrar un bioma de desierto" }
        ]
      },
      {
        "label": "Granjas extremas",
        "hitos": [
          { "id": "granja-pigman", "texto": "Granja de zombie pigmen (chuleta cocinada y sulphur de bonus)" },
          { "id": "granja-ghast", "texto": "Granja de ghasts (sulphur — gunpowder de la era)" }
        ]
      },
      {
        "label": "Rarezas de la versión",
        "hitos": [
          { "id": "reloj-nether", "texto": "El reloj no funciona en el Nether — comprobarlo en primera persona" },
          { "id": "ghast-snowball", "texto": "Los ghasts disparan bolas de fuego con textura de snowball — screenshot del momento" }
        ]
      }
    ]
  },
  {
    "id": "beta12",
    "nombre": "Beta 1.2",
    "sub": "13 ene 2011 — tintes, calamares, huesos, lapislázuli",
    "abierta": true,
    "categorias": [
      {
        "label": "Lana y ovejas",
        "hitos": [
          { "id": "lana-5colores", "texto": "Teñir lana de al menos 5 colores distintos" },
          { "id": "cerco-ovejas-color", "texto": "Cerco con ovejas de colores naturales nuevos (gris, gris claro, negra)" },
          { "id": "lana-rara", "texto": "Conseguir lana marrón o rosa (solo por bug en esta versión) — screenshot si aparece" }
        ]
      },
      {
        "label": "Nuevos mobs",
        "hitos": [
          { "id": "calamar-ink", "texto": "Matar tu primer calamar y conseguir ink sac" },
          { "id": "calamar-ordeno", "texto": "Ordeñar un calamar antes de que parcheen el bug — screenshot obligatorio" },
          { "id": "arana-pared", "texto": "Sobrevivir a una araña trepando una pared hacia ti por primera vez" }
        ]
      },
      {
        "label": "Granja de esqueletos mejorada",
        "hitos": [
          { "id": "stack-huesos", "texto": "Recoger tu primer stack de huesos del spawner" },
          { "id": "bonemeal-crecer", "texto": "Craftear bonemeal y usarlo para crecer trigo o árbol al instante" }
        ]
      },
      {
        "label": "Recursos nuevos",
        "hitos": [
          { "id": "lapislazuli-bloque", "texto": "Minar lapislázuli y craftear un bloque decorativo" },
          { "id": "sandstone", "texto": "Craftear sandstone y usarlo en construcción" },
          { "id": "noteblock", "texto": "Craftear y colocar un note block y afinarlo" }
        ]
      },
      {
        "label": "Dispenser",
        "hitos": [
          { "id": "dispenser-flechas", "texto": "Craftear un dispenser y usarlo como lanzador de flechas trampa" }
        ]
      },
      {
        "label": "Comida",
        "hitos": [
          { "id": "tarta", "texto": "Craftear y colocar una tarta (cake) — primer bloque de comida placeable del juego" }
        ]
      }
    ]
  },
  {
    id: 'beta173',
    nombre: 'Beta 1.7.3',
    sub: 'el kit beta completo de golpe: camas, pistones, repetidores, lobos',
    abierta: false,
    categorias: [],
  },
  {
    id: 'beta18',
    nombre: 'Beta 1.8 — Adventure Update',
    sub: 'Enderman, aldeas NPC, terreno nuevo',
    abierta: false,
    categorias: [],
  },
  {
    id: 'beta19rel10',
    nombre: 'Beta 1.9pre / Release 1.0',
    sub: 'El End, el Dragón, fermentado, cría de animales',
    abierta: false,
    categorias: [],
  },
];

