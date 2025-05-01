import { BaseAttributes, IAttributes, IBuild, IGears, ITraitItem, ITraits } from "@/types";
import BuildGearItem from "./BuildGear/BuildGearItem/BuildGearItem";

interface BuildPreviewProps {
    build: IBuild;
}

const BuildPreview = ({
    build
}: BuildPreviewProps) => {
    const hasObjetiveGear = (gear1: string, gear2: string) => gear1 !== gear2;
    const missingPieces: IGears = {}

    for (const [key, value] of Object.entries(build.objetiveGear)) {
        const objectiveGear = hasObjetiveGear(value.gear.name, build.currentGear[key].gear.name);

        if (objectiveGear) {
            missingPieces[key] = value;
        }
    }

    return (
        <section
        // style={{
        //     display: 'grid',
        //     gridTemplateColumns: '1fr 1fr',
        //     gap: '1rem',
        // }}
        >
            <div>
                <h3>Equipo actual</h3>
                <TLBuildGear gear={build.currentGear} missingPieces={missingPieces} />
            </div>
            <div>
                <h3>Equipo objetivo</h3>
                <TLBuildGear gear={build.objetiveGear} />
            </div>
            <div>
                <h3>Piezas restantes</h3>
                {Object.entries(missingPieces).map(([key, value]) => (
                    <p>{key}: {value.gear.name}</p>
                ))}
            </div>
        </section>
    )
}

interface IBuildGear {
    gear: IGears;
    missingPieces?: IGears;
}

const TLBuildGear = ({ gear, missingPieces }: IBuildGear) => {
    const BASE_ATT = 10;

    const hasObjetiveGear = (gear1: string, gear2: string) => gear1 !== gear2;

    const getTotalAttribute = (gear: IGears, att: string) => {
        return Object.values(gear).reduce((acc, curr) => {
            const isNumber = (value: any) => typeof value === 'number';

            const objectStats = curr.gear.stats[att];

            if (!isNumber(objectStats)) {
                return acc;
            }

            return acc + objectStats;
        }, BASE_ATT);
    }

    const doWarn = (gear1: string, key: string) => {
        if (!missingPieces) return false;

        const missingPiece = missingPieces[key];

        if (!missingPiece) return false;

        return hasObjetiveGear(gear1, missingPiece.gear.name);
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                {Object.entries(gear).map(([key, item]) => (
                    <div key={key}>
                        <h3>{key}</h3>
                        <BuildGearItem
                            name={item.gear.name}
                            stats={item.gear.stats}
                            traits={item.traits}
                            warn={doWarn(item.gear.name, key)}
                        />
                    </div>
                ))}
            </div>
            <div>
                <h3>Atributos</h3>
                {Object.values(BaseAttributes).map((attribute) => (
                    <p>{attribute}: {getTotalAttribute(gear, attribute)}</p>
                ))}
            </div>
        </div>
    )
}


export default BuildPreview;