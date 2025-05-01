import { useState } from "react";
import GameSVG from "../SVG/GameSVG";
import styles from "./Dropdown.module.scss";

interface IItemList {
    name: string;
    url: string;
}

interface IDropdownProps {
    title: string;
    items: IItemList[];
    isCollapsed: boolean;
}

const { dropdown, dropdown__button, dropdown__content, inactive, collapsed } = styles;

const Dropdown = ({
    title,
    items,
    isCollapsed
}: IDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const dropdownCollapsedStatusClass = isCollapsed ? collapsed : "";
    const dropdownClass = `${dropdown} ${dropdownCollapsedStatusClass}`;

    const dropdownVisibilityClass = !isOpen ? inactive : "";
    const dropdownContentClass = `${dropdown__content} ${dropdownVisibilityClass}`;

    return (
        <div className={dropdownClass}>
            <button onClick={toggle} className={dropdown__button}>
                <GameSVG />
                <span>
                    {title}
                </span>
            </button>
            <ul className={dropdownContentClass}>
                {/* <li>
                    <a href="/games/tl">Throne and Liberty</a>
                </li>
                <li>
                    <a href="/games/mc">Minecraft</a>
                </li> */}
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown;