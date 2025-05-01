'use client';

import { Button, CheckboxText, InputText, Title } from "@coding-flavour/common";
import Link from "next/link";
import NewItemDialog from "./components/NewItemDialog/NewItemDialog";
import useShoppingList from "./hooks/useShoppingList";
import styles from './ShoppingList.module.scss';

const { shoppingList, wrapper } = styles;

const ShoppingList = () => {
    const {
        list,
        openDialog,
        handleOnSubmit,
        handleCheckbox,
        handleInputChange,
        openAll,
        setNewValue
    } = useShoppingList();

    return (
        <div>
            <Title title="Lista de la compra" />
            <div className="actions">
                <Button text="Añadir producto" clickFn={openDialog} />
                <Button text="Abrir todos" clickFn={openAll} />
            </div>
            {(!list || list.length === 0) &&
                <p>No hay productos en la lista de la compra</p>
            }
            {list && list.length > 0 &&
                <ul className={shoppingList}>
                    <li key="header">
                        <span>Nombre</span>
                        <span>Enlace</span>
                        <span>¿Comprar?</span>
                        <span>Cantidad</span>
                    </li>
                    {list.map((item, index) => (
                        <li key={index}>
                            <span>{item.name}</span>
                            <Link href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</Link>
                            <div className={wrapper}>
                                <CheckboxText header="" name={`to-buy-${index}`} checked={item.needsToBuy} clickFn={(e) => handleCheckbox(e, index)} />
                            </div>
                            <div className={wrapper}>
                                <InputText
                                    id={`quantity-${index}`}
                                    type="text"
                                    text={"Cantidad"}
                                    placeholder="1"
                                    valueOnChange={(inputUser) => handleInputChange(inputUser, index)}
                                    setNewValue={() => setNewValue(item.quantity)}
                                    required
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            }
            <NewItemDialog handleOnSubmit={handleOnSubmit} />
        </div>
    )
}

export default ShoppingList;