import { useState } from "react";
import styles from './NewItemDialog.module.scss';
import { Button, InputText } from "@coding-flavour/common";

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
        <dialog id="add-product-dialog" open={false}>
            <div className={dialog}>
                <form method="dialog" onSubmit={(e) => handleOnSubmit(e, counter)}>
                    <p>Añadir producto</p>
                    <ul className={dialog__list}>
                        {Array.from({ length: counter }, (_, index) => (
                            <li key={index} className={dialog__list__item}>
                                <InputText id={`product-name-${index}`} type="text" text={"Nombre"} withClear required />
                                <InputText id={`product-link-${index}`} type="text" text={"Enlace"} withClear required />
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