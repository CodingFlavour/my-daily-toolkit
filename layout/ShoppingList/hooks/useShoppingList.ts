import { buildDomain } from "@/helpers/domain";
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";

interface Product {
    name: string;
    link: string;
    needsToBuy: boolean;
    quantity: number;
}

const url = buildDomain();

const _handleOnSubmit = (target: EventTarget, productsAmmount: number, list: Product[] | null, setList: Dispatch<SetStateAction<Product[] | null>>) => {
    const closeDialog = () => document.querySelector<HTMLDialogElement>('#add-product-dialog')?.close();

    const findObject = (target: EventTarget, param: string) => {
        return Object.values(target).find((field) => field.id === param)
            .value as string;
    };

    const parseEvent = () => {
        const values = []

        for (let i = 0; i < productsAmmount; i++) {
            const name = findObject(target, `product-name-${i}`);
            const link = findObject(target, `product-link-${i}`);
            const quantity = findObject(target, `product-quantity-${i}`);
            values.push({ name, link, quantity: parseInt(quantity), needsToBuy: true });
        }

        return values;
    };

    const products: Product[] = parseEvent();

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
            target.reset();
            closeDialog();

            const currentList = list || [];
            const newList = [...currentList, ...products];
            setList(newList);
        })
        .catch((e) => {
            console.log("There has been an error", e);
        });
}

const useShoppingList = () => {
    const [list, setList] = useState<Product[] | null>(null);

    if (!list) {
        fetch(`${url}/shopping-list`)
            .then((response) => response.json())
            .then((data) => setList(data ?? []))
    }

    const openDialog = () => document.querySelector<HTMLDialogElement>('#add-product-dialog')?.showModal();
    const buildUrl = (link: string, quantity: number) => `${link}&quantity=${quantity}`;
    const openAll = () => list?.map((item) => item.needsToBuy && document?.open(buildUrl(item.link, item.quantity), "_blank", "noopener,noreferrer"));
    const setNewValue = (quantity: number) => String(quantity);

    // Convert to action in services
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>, productsAmmount: number) => {
        e.preventDefault();
        e.stopPropagation();
        _handleOnSubmit(e.target, productsAmmount, list, setList);

    };

    const handleCheckbox = (e: MouseEvent<HTMLInputElement>, index: number) => {
        const rollback = () => {
            const updatedList = [...list!];
            updatedList[index].needsToBuy = !updatedList[index].needsToBuy;
            setList(updatedList);
        }

        if (e.currentTarget.type !== "checkbox") return

        if (!list) {
            console.error("Como llegaste aqui?");
            return;
        }

        const updatedList = [...list];
        const checked = e.currentTarget.checked
        updatedList[index].needsToBuy = checked;

        setList(updatedList);
        sendNewData(index, rollback);
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

    const sendNewData = (index: number, rollback?: () => void) => {
        if (!list) {
            console.error("Como llegaste aqui?");
            return;
        }

        const abort = new AbortController();
        const name = encodeURIComponent(list[index].name);
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
            .catch(() => rollback && rollback())
            .finally(() => abort.abort());
    }

    const handleDeleteItem = (index: number) => {
        if (!list) {
            console.error("Como llegaste aqui?");
            return;
        }

        const abort = new AbortController();
        const name = list[index].name;
        fetch(`${url}/shopping-list/${name}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            signal: abort.signal,
        })
            .then(() => {
                const updatedList = [...list];
                const newList = updatedList.filter((_, i) => i !== index);
                setList(newList);
            })
            .catch(() => console.log("There has been an error"))
    }

    const handleCleanList = () => {
        if (!list) {
            console.error("Como llegaste aqui?");
            return;
        }

        const abort = new AbortController();
        fetch(`${url}/shopping-list`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            signal: abort.signal,
        })
            .then(() => {
                const updatedList = list.map((item) => ({ ...item, needsToBuy: false, quantity: 0 }));
                setList(updatedList);
            })
            .catch(() => console.log("There has been an error"))
    }
    return {
        list,
        openDialog,
        handleOnSubmit,
        handleCheckbox,
        handleInputChange,
        handleDeleteItem,
        handleCleanList,
        openAll,
        setNewValue
    }
}

export default useShoppingList;