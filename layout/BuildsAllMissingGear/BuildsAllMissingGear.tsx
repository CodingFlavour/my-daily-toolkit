import { IBuild } from "@/types";

interface IBuildsAllMissingGearProps {
    builds: IBuild[];
}

const BuildsAllMissingGear = (
    { builds }: IBuildsAllMissingGearProps
) => {
    const hasObjetiveGear = (gear1: string, gear2: string) => gear1 !== gear2;

    const missingGear: { [slot: string]: string } = {};

    builds.forEach((build) => {
        Object.entries(build.objetiveGear).forEach(([slot, gear]) => {
            const objectiveGear = hasObjetiveGear(gear.gear.name, build.currentGear[slot].gear.name);

            if (objectiveGear) {
                missingGear[slot] = gear.gear.name;
            }
        });
    });
    
    return (
        <div>
            <h1>Builds All Missing Gear</h1>
            <section>
                {Object.entries(missingGear).map(([slot, gear]) => (
                    <p key={slot}>{slot}: {gear}</p>
                ))}
            </section>
        </div>
    )
}

export default BuildsAllMissingGear;