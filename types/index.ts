enum BuildStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed'
}

enum BaseAttributes {
    STRENGTH = 'strength',
    DEXTERITY = 'dexterity',
    WISDOM = 'wisdom',
    CONSTITUTION = 'constitution',
    PERCEPTION = 'perception',
}

interface IAttributes {
    [stat: string]: number | string
}


interface IGear {
    name: string;
    stats: IAttributes;
    type?: string;
}

interface ITrait {
    [level: string]: number | string;
}

interface ITraitItem {
    name: string;
    trait: ITrait;
    level: number;
}

interface ITraits {
    [trait: string]: ITraitItem
}

interface IBuildItem {
    gear: IGear;
    traits: ITraits;
}

interface IGears {
    [gear: string]: IBuildItem
}

interface IBuild {
    name: string;
    description: string;
    status: BuildStatus;
    isCurrentlyWearing: boolean;
    currentGear: IGears;
    objetiveGear: IGears;
    abilities: string[];
    attributes: IAttributes;
}

export {
    BuildStatus,
    BaseAttributes
}

export type {
    IAttributes,
    IGear,
    ITrait,
    ITraitItem,
    ITraits,
    IBuildItem,
    IGears,
    IBuild,
}
