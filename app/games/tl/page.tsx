import Header from "@/layout/Header/Header";
import TLLayout from "@/layout/TLLayout/TLLayout";
import styles from './ThroneLibertyPage.module.scss';

const { main } = styles;

const ThroneLibertyPage = () => {
    return (
        <main className={main}>
            <Header />
            <TLLayout />
        </main>
    )
}

export default ThroneLibertyPage;
