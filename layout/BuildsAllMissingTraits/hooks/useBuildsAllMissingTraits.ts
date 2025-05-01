import { IBuild } from "@/types";

interface IUseBuildsAllMissingTraitsProps {
    builds: IBuild[];
}

const useBuildsAllMissingTraits = (
    { builds }: IUseBuildsAllMissingTraitsProps
) => {
    const traitsPerEquip: { [slot: string]: { [trait: string]: number } } = {};

    builds.forEach((build) => {
        Object.entries(build.objetiveGear).forEach(([slot, gear]) => {
            Object.entries(gear.traits).forEach(([traitLvl, trait]) => {
                const currentGearTrait = Object.values(build.currentGear[slot].traits).find((t) => t.name === trait.name);
                const currentLevel = currentGearTrait ? currentGearTrait.level : 0;
                console.log("currentGearTrait", currentGearTrait);
                console.log("currentLevel", currentLevel);

                if (traitsPerEquip[slot] && traitsPerEquip[slot][trait.name]) {
                    return;
                }
                if (!traitsPerEquip[slot]) traitsPerEquip[slot] = {};

                if (!traitsPerEquip[slot][trait.name]) {
                    traitsPerEquip[slot][trait.name] = 0;
                }

                const lvlAmmount = trait.level - currentLevel;
                traitsPerEquip[slot][trait.name] += lvlAmmount;
            });
        });
    });

    const allTraits: { [trait: string]: number } = {};

    Object.values(traitsPerEquip).forEach((slot) => {
        Object.entries(slot).forEach(([trait, lvl]) => {
            if (!allTraits[trait]) {
                allTraits[trait] = 0;
            }
            allTraits[trait] += lvl;
        });
    });

    const filteredTraits = Object.entries(allTraits).filter(([trait, lvl]) => lvl > 0);

    const traits = Object.fromEntries(filteredTraits);

    return { traits };
}

export default useBuildsAllMissingTraits;