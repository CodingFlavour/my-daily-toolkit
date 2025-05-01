'use client';

import Dropdown from "@/components/Dropdown/Dropdown"
import Logo from "@/components/Logo/Logo"
import CollapseIcon from "@/components/SVG/CollapseSVG"
import { useState } from "react"
import styles from './Header.module.scss'

const {
    header,
    colapsed,
    header__navbar,
    header__navbar__list,
    header__icon,
    header__icon__button
} = styles;

const GAME_ITEMS = [
    { name: 'Throne and Liberty', url: '/games/tl' },
    { name: 'Minecraft', url: '/games/mc' }
]

const COOKING_ITEMS = [
    { name: 'Recetas', url: '/recipes' },
    { name: 'Nueva receta', url: '/recipes/new' },
    { name: 'Lista de la compra', url: '/recipes/shopping-list' },
]

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggle = () => setIsCollapsed(!isCollapsed);

    const collapsedStatus = isCollapsed ? colapsed : {};
    const headerClass = `${header} ${collapsedStatus}`;

    return (
        <header className={headerClass}>
            <Logo isCollapsed={isCollapsed} />
            <nav className={header__navbar}>
                <ul className={header__navbar__list}>
                    <li>
                        <Dropdown
                            title="Juegos"
                            items={GAME_ITEMS}
                            isCollapsed={isCollapsed}
                        />
                    </li>
                    <li>
                        <Dropdown
                            title="Cocina"
                            items={COOKING_ITEMS}
                            isCollapsed={isCollapsed}
                        />
                    </li>
                </ul>
            </nav>
            <div className={header__icon}>
                <button onClick={toggle} className={header__icon__button}>
                    <CollapseIcon />
                </button>
            </div>
        </header>
    )
}

export default Header;