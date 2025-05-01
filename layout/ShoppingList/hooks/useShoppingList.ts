import { buildDomain } from "@/helpers/domain";
import { MouseEvent, useState } from "react";

interface Product {
    name: string;
    link: string;
    needsToBuy: boolean;
    quantity: number;
}

const useShoppingList = () => {
    const [list, setList] = useState<Product[] | null>(null);
    const url = buildDomain();

    if (!list) {
        fetch(`${url}/shopping-list`)
            .then((response) => response.json())
            .then((data) => setList(data))
    }

    const openDialog = () => document.querySelector<HTMLDialogElement>('#add-product-dialog')?.showModal();
    const closeDialog = () => document.querySelector<HTMLDialogElement>('#add-product-dialog')?.close();
    const openAll = () => list?.map((item) => item.needsToBuy && document?.open(item.link, "_blank", "noopener,noreferrer"));
    const setNewValue = (quantity: number) => String(quantity);

    const findObject = (target: EventTarget, param: string) => {
        return Object.values(target).find((field) => field.id === param)
            .value as string;
    };

    const parseEvent = (target: EventTarget, productsAmmount: number) => {
        const values = []

        for (let i = 0; i < productsAmmount; i++) {
            const name = findObject(target, `product-name-${i}`);
            const link = findObject(target, `product-link-${i}`);
            values.push({ name, link });
        }

        return values;
    };

    // Convert to action in services
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>, productsAmmount: number) => {
        e.preventDefault();
        e.stopPropagation();
        const products = parseEvent(e.target, productsAmmount);

        const abort = new AbortController();
        fetch(`${url}/shopping-list/new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(products),
            signal: abort.signal,
        })
            .then(() => {
                // @ts-ignore reset does exist >:(
                e.target.reset();
                closeDialog();

                const currentList = list || [];
                const newList = [...currentList, ...products.map((product) => ({ ...product, needsToBuy: false, quantity: 0 }))];
                setList(newList);
            })
            .catch((e) => {
                console.log("There has been an error", e);
            });
    };

    const handleCheckbox = (e: MouseEvent<HTMLInputElement>, index: number) => {
        if (e.currentTarget.type !== "checkbox") return

        if (!list) {
            console.error("Como llegaste aqui?");
            return;
        }

        const updatedList = [...list];
        const checked = e.currentTarget.checked
        updatedList[index].needsToBuy = checked;

        setList(updatedList);
        sendNewData(index);
    }

    const handleInputChange = (inputUser: string, index: number) => {
        if (!list) {
            console.error("Como llegaste aqui?");
            return;
        }

        const updatedList = [...list];
        const quantity = parseInt(inputUser)

        if (quantity > 0) {
            updatedList[index].quantity = quantity;
            setList(updatedList);
            sendNewData(index);
        }

        setNewValue(updatedList[index].quantity);
    }

    const sendNewData = (index: number) => {
        if (!list) {
            console.error("Como llegaste aqui?");
            return;
        }

        const abort = new AbortController();
        const name = list[index].name;
        const needsToBuy = list[index].needsToBuy;
        const quantity = list[index].quantity

        fetch(`${url}/shopping-list/${name}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                needsToBuy,
                quantity
            }),
            signal: abort.signal,
        })
            .then(() => {
                console.log("Updated successfully")
            })
            .catch(() => console.log("There has been an error"))
    }

    return {
        list,
        openDialog,
        handleOnSubmit,
        handleCheckbox,
        handleInputChange,
        openAll,
        setNewValue
    }
}

export default useShoppingList;