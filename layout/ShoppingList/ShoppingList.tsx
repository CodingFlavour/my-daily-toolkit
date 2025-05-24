'use client';

import { Button, CheckboxText, IconButton, InputText, Title } from "@coding-flavour/common";
import Link from "next/link";
import NewItemDialog from "./components/NewItemDialog/NewItemDialog";
import useShoppingList from "./hooks/useShoppingList";
import styles from './ShoppingList.module.scss';
import IconClose from "@coding-flavour/icons/icon-close.svg";

const { shoppingList, shoppingList__actions, shoppingList__table, shoppingList__table__list, wrapper } = styles;

const ShoppingList = () => {
    const {
        list,
        openDialog,
        handleOnSubmit,
        handleCheckbox,
        handleInputChange,
        handleDeleteItem,
        handleCleanList,
        openAll,
        setNewValueOnInput
    } = useShoppingList();

    return (
        <div className={shoppingList}>
            <Title title="Lista de la compra" />
            <div className={shoppingList__actions}>
                <Button text="Añadir producto" clickFn={openDialog} />
                <Button text="Abrir todos" clickFn={openAll} />
                <Button text="Limpiar lista" clickFn={handleCleanList} />
            </div>
            {(!list || list.length === 0) &&
                <p>No hay productos en la lista de la compra</p>
            }
            {list && list.length > 0 && (
                <ul className={shoppingList__table} data-testid="shopping-list">
                    <li key="header">
                        <span>Nombre</span>
                        <span>Enlace</span>
                        <span>¿Comprar?</span>
                        <span>Cantidad</span>
                        <span>Eliminar</span>
                    </li>
                    <ul className={shoppingList__table__list}>
                        {list.map((item, index) => (
                            <li key={index} data-testid="shopping-list-item">
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
                                        placeholder={item.quantity.toString()}
                                        valueOnChange={(inputUser) => handleInputChange(inputUser, index)}
                                        setNewValue={() => setNewValueOnInput(item.quantity)}
                                        required
                                    />
                                </div>
                                <div>
                                    <IconButton
                                        src={IconClose}
                                        alt="Eliminar producto"
                                        onClick={() => handleDeleteItem(index)}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </ul>
            )}
            <NewItemDialog handleOnSubmit={handleOnSubmit} />
        </div>
    )
}

export default ShoppingList;