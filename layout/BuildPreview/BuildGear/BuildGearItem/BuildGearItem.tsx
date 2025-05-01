import { IAttributes, ITraits } from "@/types";
import styles from './BuildGearItem.module.scss';

interface BuildGearItemProps {
    name: string;
    stats: IAttributes;
    traits: ITraits;
    warn?: boolean;
}

const { build_gear_item, build_gear_item__dialog } = styles;

const BuildGearItem = ({
    name,
    stats,
    traits,
    warn
}: BuildGearItemProps) => {
    const style = warn ? { border: '1px solid red' } : {};

    const isNumber = (value: string | number) => typeof value === 'number';
    const isOpen = (value: string) => value.toLowerCase() === 'open';

    return (
        <div className={build_gear_item}>
            <span style={style}>
                {name}
            </span>
            <dialog className={build_gear_item__dialog}>
                <div>
                    {Object.entries(stats).map(([key, value]) => (
                        <p>{`${key}: ${value} ${!isNumber(value) ? '%' : ''}`}</p>
                    ))}
                </div>
                <hr />
                <ul>
                    {Object.entries(traits).map(([key, trait]) => (
                        <li key={key}>
                            <p>{trait.name}</p>
                            {!isOpen(trait.name) && (
                                <p>
                                    {Object.keys(trait.trait)[trait.level]}: {trait.trait[`level_${trait.level}`]}
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
            </dialog>
        </div>
    )
}

export default BuildGearItem;