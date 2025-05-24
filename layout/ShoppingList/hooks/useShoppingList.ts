import doFetch from "@/helpers/doFetch";
import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from "react";

interface Product {
    name: string;
    link: string;
    needsToBuy: boolean;
    quantity: number;
}

const _handleOnSubmit = (target: EventTarget, productsAmmount: number, setList: Dispatch<SetStateAction<Product[] | undefined>>, list?: Product[]) => {
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


    const doThen = () => {
        // @ts-ignore reset does exist >:(
        target.reset();
        closeDialog();

        const currentList = list || [];
        const newList = [...currentList, ...products];
        setList(newList);
    }

    const products: Product[] = parseEvent();

    doFetch("shopping-list/new", 'POST', doThen, JSON.stringify(products));
}

const _sendNewData = (rawName: string, needsToBuy: boolean, quantity: number, doThen: () => void) => {
    const name = encodeURIComponent(rawName);

    doFetch(`shopping-list/${name}`, 'PATCH', doThen, JSON.stringify({ needsToBuy, quantity }));
}

const useShoppingList = () => {
    const [list, setList] = useState<Product[]>();

    useEffect(() => {
        doFetch("shopping-list", 'GET', (data) => setList(data?.shoppingList ?? []));
    }, []);

    const openDialog = () => document.querySelector<HTMLDialogElement>('#add-product-dialog')?.showModal();
    const buildUrl = (link: string, quantity: number) => `${link}&quantity=${quantity}`;
    const setNewValueOnInput = (quantity: number) => String(quantity);

    // Convert to action in services
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>, productsAmmount: number) => {
        e.preventDefault();
        e.stopPropagation();
        _handleOnSubmit(e.target, productsAmmount, setList, list);
    };

    const openAll = () => {
        if (!list) return console.error("No list found");

        const filteredList = list.filter(item => item.needsToBuy);

        new Promise(async (resolve) => {
            for (let i = 0; i < filteredList.length; i++) {
                const item = filteredList[i];

                document?.open(buildUrl(item.link, item.quantity), "_blank", "noopener,noreferrer");

                await new Promise((resolve) => setTimeout(resolve, 3000));
            }

            resolve(true);
        });
    }

    const handleCheckbox = (e: MouseEvent<HTMLInputElement>, index: number) => {
        if (e.currentTarget.type !== "checkbox") return

        if (!list) return console.error("No list found");

        const doThen = () => {
            const updatedList = [...list];
            updatedList[index].needsToBuy = checked;
            setList(updatedList);
        }

        const checked = e.currentTarget.checked;

        _sendNewData(list[index].name, checked, list[index].quantity, doThen);
    }

    const handleInputChange = (inputUser: string, index: number) => {
        if (!list) return console.error("No list found");

        const doThen = () => {
            const updatedList = [...list];
            updatedList[index].quantity = quantity;
            setList(updatedList);
        }

        const quantity = parseInt(inputUser);

        if (quantity > 0) _sendNewData(list[index].name, list[index].needsToBuy, quantity, doThen);
    }

    const handleDeleteItem = (index: number) => {
        if (!list) return console.error("No list found");

        const name = list[index].name;
        const encodedName = encodeURIComponent(name);

        const doThen = () => {
            const updatedList = [...list];
            const newList = updatedList.filter((_, i) => i !== index);
            setList(newList);
        }

        doFetch(`shopping-list/${encodedName}`, 'DELETE', doThen);
    }

    const handleCleanList = () => {
        if (!list) return console.error("No list found");

        const doThen = () => {
            const updatedList = list.map((item) => ({ ...item, needsToBuy: false, quantity: 0 }));
            setList(updatedList);
        }

        doFetch("shopping-list", 'DELETE', doThen);
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
        setNewValueOnInput
    }
}

export default useShoppingList;