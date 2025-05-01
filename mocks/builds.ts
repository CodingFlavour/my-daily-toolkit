import gearData from '@/data/gear.json';
import traitsData from '@/data/traits.json';
import weaponsData from '@/data/weapons.json';
import { BuildStatus, IBuild } from '@/types';

const { WEAPON_0, WEAPON_1 } = weaponsData;
const { HEAD_0, HEAD_1, HEAD_2, CHEST_0, CHEST_1, CHEST_2, CHEST_3, CAPE_0, GLOVES_0, GLOVES_1 } = gearData;
const {
    magic_evasion,
    mana_regen,
    buff_duration,
    max_health,
    debuff_duration,
    ranged_evasion,
    ranged_resistance,
    attack_speed,
    OPEN,
    cooldown_reduction,
    skill_damage_resistance,
    magic_resistance
} = traitsData;

const MOCK_JOEL: IBuild = {
    name: "La build de Joel",
    description: 'Build PVP GvG con Arco',
    status: BuildStatus.ACTIVE,
    isCurrentlyWearing: true,
    currentGear: {
        head: {
            gear: HEAD_1,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 1,
                },
                trait_1: {
                    name: "Velocidad de recarga",
                    trait: cooldown_reduction,
                    level: 1,
                },
                trait_2: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 1,
                },
            },
        },
        cape: {
            gear: CAPE_0,
            traits: {
                trait_0: {
                    name: "Resistencia a daño de habilidad",
                    trait: skill_damage_resistance,
                    level: 3,
                },
                trait_1: {
                    name: "Vida máxima",
                    trait: max_health,
                    level: 2,
                },
                trait_2: {
                    name: 'Duración de desventaja',
                    trait: debuff_duration,
                    level: 3,
                },
            },
        },
        chest: {
            gear: CHEST_2,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 0,
                },
                trait_1: {
                    name: "OPEN",
                    trait: OPEN,
                    level: 0,
                },
                trait_2: {
                    name: "OPEN",
                    trait: OPEN,
                    level: 0,
                }
            },
        },
        gloves: {
            gear: GLOVES_1,
            traits: {
                trait_0: {
                    name: "Aguante mágico",
                    trait: magic_resistance,
                    level: 2,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 2,
                },
                trait_2: {
                    name: "OPEN",
                    trait: OPEN,
                    level: 0,
                },
            },
        }
    },
    objetiveGear: {
        head: {
            gear: HEAD_1,
            traits: {
                trait_0: {
                    name: "Regeneración de maná",
                    trait: mana_regen,
                    level: 3,
                },
                trait_1: {
                    name: "Velocidad de recarga",
                    trait: cooldown_reduction,
                    level: 3,
                },
                trait_2: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3,
                },
            },
        },
        cape: {
            gear: CAPE_0,
            traits: {
                trait_0: {
                    name: "Resistencia a daño de habilidad",
                    trait: skill_damage_resistance,
                    level: 3,
                },
                trait_1: {
                    name: "Vida máxima",
                    trait: max_health,
                    level: 3,
                },
                trait_2: {
                    name: 'Duración de desventaja',
                    trait: debuff_duration,
                    level: 3,
                },
            },
        },
        chest: {
            gear: CHEST_2,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 3
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3
                },
                trait_2: {
                    name: "Aguante a distancia",
                    trait: ranged_resistance,
                    level: 3,
                }
            },
        },
        gloves: {
            gear: GLOVES_1,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 3,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3,
                },
                trait_2: {
                    name: 'Regeneración de maná',
                    trait: mana_regen,
                    level: 3,
                },
            },
        }
    },
    abilities: [
        'Disparo envenenado',
    ],
    attributes: {
        strength: 100,
        dexterity: 100,
        wisdom: 100,
        constitution: 100,
        perception: 100,
    }
}
const MOCK_SPEAR_MONKEY: IBuild = {
    name: 'Mono Lanza',
    description: 'Build PVP para lanza enfocada a GvG y ZvZ',
    status: BuildStatus.IN_PROGRESS,
    isCurrentlyWearing: false,
    currentGear: {
        head: {
            gear: HEAD_1,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 0,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 0,
                },
                trait_2: {
                    name: "Vida máxima",
                    trait: max_health,
                    level: 0,
                },
            },
        },
        cape: {
            gear: CAPE_0,
            traits: {
                trait_0: {
                    name: "Resistencia a daño de habilidad",
                    trait: skill_damage_resistance,
                    level: 3,
                },
                trait_1: {
                    name: "Vida máxima",
                    trait: max_health,
                    level: 2
                },
                trait_2: {
                    name: 'Duración de desventaja',
                    trait: debuff_duration,
                    level: 3,
                },
            },
        },
        chest: {
            gear: CHEST_2,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 0,
                },
                trait_1: {
                    name: "OPEN",
                    trait: OPEN,
                    level: 0,
                },
                trait_2: {
                    name: "OPEN",
                    trait: OPEN,
                    level: 0,
                }
            },
        },
        gloves: {
            gear: GLOVES_0,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 3,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3,
                },
                trait_2: {
                    name: 'Velocidad de ataque',
                    trait: attack_speed,
                    level: 3,
                },
            },
        },
    },
    objetiveGear: {
        head: {
            gear: HEAD_1,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 3,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3,
                },
                trait_2: {
                    name: "Velocidad de recarga",
                    trait: cooldown_reduction,
                    level: 3,
                },
            },
        },
        cape: {
            gear: CAPE_0,
            traits: {
                trait_0: {
                    name: "Resistencia a daño de habilidad",
                    trait: skill_damage_resistance,
                    level: 3,
                },
                trait_1: {
                    name: "Vida máxima",
                    trait: max_health,
                    level: 3
                },
                trait_2: {
                    name: 'Duración de desventaja',
                    trait: debuff_duration,
                    level: 3,
                },
            },
        },
        chest: {
            gear: CHEST_1,
            traits: {
                trait_0: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3,
                },
                trait_1: {
                    name: "Vida máxima",
                    trait: max_health,
                    level: 3,
                },
                trait_2: {
                    name: "Duración de buff",
                    trait: buff_duration,
                    level: 3,
                }
            },
        },
        gloves: {
            gear: GLOVES_0,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 3,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3,
                },
                trait_2: {
                    name: 'Vida máxima',
                    trait: max_health,
                    level: 3,
                },
            },
        },
    },
    abilities: [
        'Lanzamiento de jabalina',
    ],
    attributes: {
        strength: 100,
        dexterity: 100,
        wisdom: 100,
        constitution: 100,
        perception: 100,
    }
}
const MOCK_MONKEY = {
    name: "Mono",
    description: 'Build PVE para farmeo de mobs (Ranged + Magic)',
    status: BuildStatus.INACTIVE,
    isCurrentlyWearing: false,
    currentGear: {
        head: {
            gear: HEAD_2,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 3,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3,
                },
                trait_2: {
                    name: "Vida máxima",
                    trait: max_health,
                    level: 3,
                },
            },
        },
        cape: {
            gear: CAPE_0,
            traits: {
                trait_0: {
                    name: "Resistencia a daño de habilidad",
                    trait: skill_damage_resistance,
                    level: 3,
                },
                trait_1: {
                    name: "Vida máxima",
                    trait: max_health,
                    level: 2,
                },
                trait_2: {
                    name: 'Duración de desventaja',
                    trait: debuff_duration,
                    level: 3,
                },
            },
        },
        chest: {
            gear: CHEST_3,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 2,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,   
                    level: 3,
                },
                trait_2: {
                    name: 'Vida máxima',
                    trait: max_health,
                    level: 2,
                },
            },
        },
        gloves: {
            gear: GLOVES_0,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 3,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3,
                },
                trait_2: {
                    name: 'Velocidad de ataque',
                    trait: attack_speed,
                    level: 3,
                },
            },
        }
    },
    objetiveGear: {
        head: {
            gear: HEAD_2,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 3,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3,
                },
                trait_2: {
                    name: "Vida máxima",
                    trait: max_health,
                    level: 3,
                },
            },
        },
        cape: {
            gear: CAPE_0,
            traits: {
                trait_0: {
                    name: "Resistencia a daño de habilidad",
                    trait: skill_damage_resistance,
                    level: 3,
                },
                trait_1: {
                    name: "Vida máxima",
                    trait: max_health,
                    level: 3,
                },
                trait_2: {
                    name: 'Duración de desventaja',
                    trait: debuff_duration,
                    level: 3,
                },
            },
        },
        chest: {
            gear: CHEST_3,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 3,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,   
                    level: 3,
                },
                trait_2: {
                    name: 'Vida máxima',
                    trait: max_health,
                    level: 3,
                },
            },
        },
        gloves: {
            gear: GLOVES_0,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 3,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3,
                },
                trait_2: {
                    name: 'Velocidad de ataque',
                    trait: attack_speed,
                    level: 3,
                },
            },
        }
    },
    abilities: [
        'Disparo envenenado',
    ],
    attributes: {
        strength: 100,
        dexterity: 100,
        wisdom: 100,
        constitution: 100,
        perception: 100,
    }
}

const MOCK_SPINNER = {
    name: 'Peonza',
    description: 'Build PVP ballestas full daño (glass cannon)',
    status: BuildStatus.ACTIVE,
    isCurrentlyWearing: true,
    currentGear: {
        head: {
            gear: HEAD_0,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 3,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3,
                },
                trait_2: {
                    name: "Velocidad de recarga",
                    trait: cooldown_reduction,
                    level: 3,
                },
            },
        },
        cape: {
            gear: CAPE_0,
            traits: {
                trait_0: {
                    name: "Resistencia a daño de habilidad",
                    trait: skill_damage_resistance,
                    level: 3,
                },
                trait_1: {
                    name: "Vida máxima",
                    trait: max_health,
                    level: 2,
                },
                trait_2: {
                    name: 'Duración de desventaja',
                    trait: debuff_duration,
                    level: 3,
                },
            },
        },
        chest: {
            gear: CHEST_0,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 2,
                },
                trait_1: {
                    name: "Regeneración de maná",
                    trait: mana_regen,
                    level: 0,
                },
                trait_2: {
                    name: 'Duración de buff',
                    trait: buff_duration,
                    level: 0,
                },
            },
        },

        gloves: {
            gear: GLOVES_0,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 3,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3,
                },
                trait_2: {
                    name: 'Velocidad de ataque',
                    trait: attack_speed,
                    level: 3,
                },
            },
        },

    },
    objetiveGear: {
        head: {
            gear: HEAD_0,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 3,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3,
                },
                trait_2: {
                    name: "Velocidad de recarga",
                    trait: cooldown_reduction,
                    level: 3,
                },
            },
        },
        cape: {
            gear: CAPE_0,
            traits: {
                trait_0: {
                    name: "Resistencia a daño de habilidad",
                    trait: skill_damage_resistance,
                    level: 3,
                },
                trait_1: {
                    name: "Vida máxima",
                    trait: max_health,
                    level: 3,
                },
                trait_2: {
                    name: 'Duración de desventaja',
                    trait: debuff_duration,
                    level: 3,
                },
            },
        },
        chest: {
            gear: CHEST_0,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: max_health,
                    level: 3,
                },
                trait_1: {
                    name: "Regeneración de maná",
                    trait: mana_regen,
                    level: 3,
                },
                trait_2: {
                    name: 'Duración de desventaja',
                    trait: debuff_duration,
                    level: 3,
                },
            },
        },
        gloves: {
            gear: GLOVES_0,
            traits: {
                trait_0: {
                    name: "Evasión mágica",
                    trait: magic_evasion,
                    level: 3,
                },
                trait_1: {
                    name: "Evasión a distancia",
                    trait: ranged_evasion,
                    level: 3,
                },
                trait_2: {
                    name: 'Velocidad de ataque',
                    trait: attack_speed,
                    level: 3,
                },
            },
        }
    },
    abilities: [
        'Disparo envenenado',
    ],
    attributes: {
        strength: 100,
        dexterity: 100,
        wisdom: 100,
        constitution: 100,
        perception: 100,
    }
}

const MOCK_BUILD: IBuild[] = [
    MOCK_SPEAR_MONKEY, MOCK_SPINNER, MOCK_JOEL, MOCK_MONKEY,

]

export default MOCK_BUILD;
