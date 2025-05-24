
import Header from "@/layout/Header/Header";
import ShoppingList from "@/layout/ShoppingList/ShoppingList";
import styles from "./page.module.scss";

const { main } = styles;

const ShoppingListPage = () => {
    return (
        <>
            <Header />
            <main className={main}>
                <ShoppingList />
            </main>
        </>
    );
}



export default ShoppingListPage;