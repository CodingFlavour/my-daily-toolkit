import { Button, InputText } from "@coding-flavour/common";
import { useState } from "react";
import styles from './NewItemDialog.module.scss';

const { dialog, dialog__list, dialog__buttons, dialog__list__item } = styles;

const NewItemDialog = ({
    handleOnSubmit
}: {
    handleOnSubmit: (e: React.FormEvent<HTMLFormElement>, productsAmmount: number) => void
}) => {
    const [counter, setCounter] = useState(1);

    const closeDialog = () => {
        const dialog = document.querySelector<HTMLDialogElement>('#add-product-dialog');
        dialog?.close();
    }

    return (
        <dialog id="add-product-dialog" data-testid="add-product-dialog" >
            <div className={dialog}>
                <form method="dialog" onSubmit={(e) => handleOnSubmit(e, counter)}>
                    <p>Añadir producto</p>
                    <ul className={dialog__list}>
                        {Array.from({ length: counter }, (_, index) => (
                            <li key={index} className={dialog__list__item} data-testid={`product-${index}`}>
                                <InputText id={`product-name-${index}`} type="text" text={"Nombre"} placeholder="Nombre del producto" withClear required />
                                <InputText id={`product-link-${index}`} type="text" text={"Enlace"} placeholder="Enlace del producto" withClear required />
                                <InputText id={`product-quantity-${index}`} type="text" text={"Cantidad"} placeholder="Cantidad" withClear required />
                            </li>
                        ))}
                    </ul>
                    <div className={dialog__buttons}>
                        <Button text="Añadir otro" clickFn={() => setCounter(counter + 1)} />
                        <Button text="Guardar todo" isSubmitting />
                    </div>
                </form>
                <Button text="Cancelar" clickFn={closeDialog} />
            </div>
        </dialog >
    )
}

export default NewItemDialog;