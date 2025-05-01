import IconCodingFlavour from "@coding-flavour/icons/components/IconCodingFlavour";
import styles from "./Logo.module.scss";

interface ILogo {
    isCollapsed: boolean;
}

const { logo, logo__collapsed } = styles;

const Logo = ({
    isCollapsed
}: ILogo) => {

    const collapsedStatusClass = isCollapsed ? logo__collapsed : "";
    const logoClass = `${logo} ${collapsedStatusClass}`;

    return (
        <div className={logoClass}>
            <IconCodingFlavour />
            <h1>
                Coding Flavour
            </h1>
        </div>
    )
}

export default Logo;