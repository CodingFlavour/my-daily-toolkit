/**
 * In order to ensure fully parallelized tests, we need to separate each product of each test
 * This should help with race conditions, since multiple tests can run at the same time and click the same buttons
 * or check the same checkboxes.
 */

import test, { expect, Locator, Page } from "@playwright/test";

interface Fixture {
    PRODUCT_NAME: string;
    PRODUCT_LINK: string;
    PRODUCT_QUANTITY: string;
};

type SlowOperation = () => Promise<any>;
type Condition = (result: any) => Promise<void>

async function retrySlowOperation(page: Page, slowOperation: SlowOperation, condition: Condition, retries = 3, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        try {
            const result = await slowOperation();

            await condition(result);

            return true;
        } catch (error) {
            if (i === retries - 1) throw error;

            await page.waitForTimeout(delay);
        }
    }
}

async function enterModalAndEnsure(page: Page) {
    await page.getByRole("button", { name: "Añadir producto" }).click();

    const dialog = page.locator("[data-testid=add-product-dialog]");
    await expect(dialog).toBeVisible();
}

async function saveProductsAndEnsure(page: Page, isStillVisible = false) {
    await page.getByRole("button", { name: "Guardar todo" }).click();

    const dialog = page.locator("[data-testid=add-product-dialog]");

    if (isStillVisible) return await expect(dialog).toBeVisible();

    await expect(dialog).not.toBeVisible();
}

async function addOneItem(page: Page, PRODUCT_NAME: string, PRODUCT_LINK: string, PRODUCT_QUANTITY: string) {
    await enterModalAndEnsure(page);

    const listFirstItem = page.locator("[data-testid=product-0]");
    await expect(listFirstItem).toBeVisible();

    await listFirstItem.locator("[data-testid=input-text-input]").nth(0).fill(PRODUCT_NAME);
    await listFirstItem.locator("[data-testid=input-text-input]").nth(1).fill(PRODUCT_LINK);
    await listFirstItem.locator("[data-testid=input-text-input]").nth(2).fill(PRODUCT_QUANTITY);

    await saveProductsAndEnsure(page);
}

async function addTwoItems(page: Page, FIRST_PRODUCT: Fixture, SECOND_PRODUCT: Fixture) {
    const FIRST_PRODUCT_NAME = FIRST_PRODUCT.PRODUCT_NAME;
    const FIRST_PRODUCT_LINK = FIRST_PRODUCT.PRODUCT_LINK;
    const FIRST_PRODUCT_QUANTITY = FIRST_PRODUCT.PRODUCT_QUANTITY;
    const SECOND_PRODUCT_NAME = SECOND_PRODUCT.PRODUCT_NAME;
    const SECOND_PRODUCT_LINK = SECOND_PRODUCT.PRODUCT_LINK;
    const SECOND_PRODUCT_QUANTITY = SECOND_PRODUCT.PRODUCT_QUANTITY;

    await enterModalAndEnsure(page);

    const listFirstItem = page.locator("[data-testid=product-0]");
    await expect(listFirstItem).toBeVisible();

    await listFirstItem.locator("[data-testid=input-text-input]").nth(0).fill(FIRST_PRODUCT_NAME);
    await listFirstItem.locator("[data-testid=input-text-input]").nth(1).fill(FIRST_PRODUCT_LINK);
    await listFirstItem.locator("[data-testid=input-text-input]").nth(2).fill(FIRST_PRODUCT_QUANTITY);

    await page.getByRole("button", { name: "Añadir otro" }).click();

    const listSecondItem = page.locator("[data-testid=product-1]");
    await expect(listSecondItem).toBeVisible();

    await listSecondItem.locator("[data-testid=input-text-input]").nth(0).fill(SECOND_PRODUCT_NAME);
    await listSecondItem.locator("[data-testid=input-text-input]").nth(1).fill(SECOND_PRODUCT_LINK);
    await listSecondItem.locator("[data-testid=input-text-input]").nth(2).fill(SECOND_PRODUCT_QUANTITY);

    await saveProductsAndEnsure(page);
}

async function cleanUp(page: Page, locators: Locator[]) {
    for (const locator of locators) {
        const deleteButton = locator.locator("button").last();
        await expect(deleteButton).toBeVisible();

        const slowOperation = async () => await deleteButton.click();
        const condition = async () => expect(locator).not.toBeVisible();

        const isFulfilled = await retrySlowOperation(page, slowOperation, condition);
        expect(isFulfilled).toBe(true);
    }
}

const DATA = {
    FIXTURE_1: {
        PRODUCT_NAME: "Test Product 1",
        PRODUCT_LINK: "https://example.com/1",
        PRODUCT_QUANTITY: "1"
    },
    FIXTURE_2: {
        FIRST_PRODUCT: {
            PRODUCT_NAME: "Test Product 2",
            PRODUCT_LINK: "https://example.com/2",
            PRODUCT_QUANTITY: "2"
        },
        SECOND_PRODUCT: {
            PRODUCT_NAME: "Test Product 3",
            PRODUCT_LINK: "https://example.com/3",
            PRODUCT_QUANTITY: "3"
        }
    },
    FIXTURE_3: {
        FIRST_PRODUCT: {
            PRODUCT_NAME: "Test Product 4",
            PRODUCT_LINK: "https://example.com/4",
            PRODUCT_QUANTITY: "4"
        },
        SECOND_PRODUCT: {
            PRODUCT_NAME: "Test Product 5",
            PRODUCT_LINK: "https://example.com/5",
            PRODUCT_QUANTITY: "5"
        }
    },
    FIXTURE_4: {
        PRODUCT_NAME: "Test Product 6",
        PRODUCT_LINK: "https://example.com/6",
        PRODUCT_QUANTITY: "6"
    },
    FIXTURE_5: {
        PRODUCT_NAME: "Test Product 7",
        PRODUCT_LINK: "https://example.com/7",
        PRODUCT_QUANTITY: "7"
    },
    FIXTURE_6: {
        PRODUCT_NAME: "Test Product 8",
        PRODUCT_LINK: "https://example.com/8",
        PRODUCT_QUANTITY: "8"
    },
    FIXTURE_7: {
        PRODUCT_NAME: "Test Product 9",
        PRODUCT_LINK: "https://example.com/9",
        PRODUCT_QUANTITY: "9"
    }
}

test.describe("Shopping List Test Suite", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:8001/recipes/shopping-list");
    });

    test("should add a product to the shopping list", async ({ page }) => {
        const { PRODUCT_NAME, PRODUCT_LINK, PRODUCT_QUANTITY } = DATA.FIXTURE_1;

        await addOneItem(page, PRODUCT_NAME, PRODUCT_LINK, PRODUCT_QUANTITY);

        const tableSize = await page.locator("[data-testid=shopping-list] li").count();
        const newProduct = page.locator("[data-testid=shopping-list] li").nth(tableSize - 1);
        const productName = await newProduct.locator("span").first().innerText();
        const productLink = await newProduct.locator("a").first().getAttribute("href");
        const productQuantity = await newProduct.locator("[data-testid=input-text-input]").getAttribute("placeholder");

        expect(productName).toBe(PRODUCT_NAME);
        expect(productLink).toBe(PRODUCT_LINK);
        expect(productQuantity).toBe(PRODUCT_QUANTITY);

        await cleanUp(page, [newProduct]);
    });

    test("should not let add a product with empty name", async ({ page }) => {
        await enterModalAndEnsure(page);

        const listFirstItem = page.locator("[data-testid=product-0]");
        await expect(listFirstItem).toBeVisible();

        await listFirstItem.locator("[data-testid=input-text-input]").nth(1).fill("https://example.com");
        await listFirstItem.locator("[data-testid=input-text-input]").nth(2).fill("2");

        await saveProductsAndEnsure(page, true);

        const nameInput = listFirstItem.locator("[data-testid=input-text-input]").nth(0);
        const nameInputError = await nameInput.evaluate((el: HTMLInputElement) => el.checkValidity());

        expect(nameInputError).toBe(false);
    });

    test("should not let add a product with empty link", async ({ page }) => {
        await enterModalAndEnsure(page);

        const listFirstItem = page.locator("[data-testid=product-0]");
        await expect(listFirstItem).toBeVisible();

        await listFirstItem.locator("[data-testid=input-text-input]").nth(0).fill("Test Product");
        await listFirstItem.locator("[data-testid=input-text-input]").nth(2).fill("2");

        await saveProductsAndEnsure(page, true);

        const linkInput = listFirstItem.locator("[data-testid=input-text-input]").nth(1);
        const linkInputError = await linkInput.evaluate((el: HTMLInputElement) => el.checkValidity());

        expect(linkInputError).toBe(false);
    });

    test("should not let add a product with empty quantity", async ({ page }) => {
        await enterModalAndEnsure(page);

        const listFirstItem = page.locator("[data-testid=product-0]");
        await expect(listFirstItem).toBeVisible();

        await listFirstItem.locator("[data-testid=input-text-input]").nth(0).fill("Test Product");
        await listFirstItem.locator("[data-testid=input-text-input]").nth(1).fill("https://example.com");

        await saveProductsAndEnsure(page, true);

        const quantityInput = listFirstItem.locator("[data-testid=input-text-input]").nth(2);
        const quantityInputError = await quantityInput.evaluate((el: HTMLInputElement) => el.checkValidity());

        expect(quantityInputError).toBe(false);
    });

    test("when 2 or more products are added, the last one should be the last in the list", async ({ page }) => {
        const { FIRST_PRODUCT, SECOND_PRODUCT } = DATA.FIXTURE_2;

        await addTwoItems(page, FIRST_PRODUCT, SECOND_PRODUCT);

        const tableSize = await page.locator("[data-testid=shopping-list] li").count();
        const firstNewProduct = page.locator("[data-testid=shopping-list] li").nth(tableSize - 2);
        const secondNewProduct = page.locator("[data-testid=shopping-list] li").nth(tableSize - 1);
        const firstProductName = await firstNewProduct.locator("span").first().innerText();
        const productName = await secondNewProduct.locator("span").first().innerText();

        expect(firstProductName).toBe(FIRST_PRODUCT.PRODUCT_NAME);
        expect(productName).toBe(SECOND_PRODUCT.PRODUCT_NAME);

        await cleanUp(page, [secondNewProduct, firstNewProduct]);
    });

    test("should exit the modal when clicking close button", async ({ page }) => {
        await enterModalAndEnsure(page);

        const dialog = page.locator("[data-testid=add-product-dialog]");
        await expect(dialog).toBeVisible();

        await page.getByRole("button", { name: "Cancelar" }).click();
        await expect(dialog).not.toBeVisible();
    });

    test("should check and uncheck correctly a product", async ({ page }) => {
        const { PRODUCT_NAME, PRODUCT_LINK, PRODUCT_QUANTITY } = DATA.FIXTURE_4;

        await addOneItem(page, PRODUCT_NAME, PRODUCT_LINK, PRODUCT_QUANTITY);

        const shoppingList = page.locator("[data-testid=shopping-list]");
        await expect(shoppingList).toBeVisible();

        const itemCount = await shoppingList.locator("[data-testid=shopping-list-item]").count();
        const lastItem = shoppingList.locator("[data-testid=shopping-list-item]").nth(itemCount - 1);
        await expect(lastItem).toBeVisible();

        const checkbox = lastItem.locator('[data-testid=checkbox-text] input');
        await expect(checkbox).toBeVisible();

        const isChecked = await checkbox.isChecked();
        expect(isChecked).toBe(true);

        await checkbox.click();

        const slowOperationUnchecking = async () => await checkbox.isChecked();
        const conditionUnchecking = async (result: boolean) => expect(result).toBe(false);
        const isFulfilledUnchecking = await retrySlowOperation(page, slowOperationUnchecking, conditionUnchecking);
        expect(isFulfilledUnchecking).toBe(true);

        await checkbox.click();

        const slowOperation = async () => await checkbox.isChecked();
        const condition = async (result: boolean) => expect(result).toBe(true);

        const isFulfilled = await retrySlowOperation(page, slowOperation, condition);
        expect(isFulfilled).toBe(true);

        await cleanUp(page, [lastItem]);
    });

    test("should change the quantity of a product", async ({ page }) => {
        const { PRODUCT_NAME, PRODUCT_LINK, PRODUCT_QUANTITY } = DATA.FIXTURE_6;

        await addOneItem(page, PRODUCT_NAME, PRODUCT_LINK, PRODUCT_QUANTITY);

        const shoppingList = page.locator("[data-testid=shopping-list]");
        await expect(shoppingList).toBeVisible();

        const lastItem = shoppingList.locator("[data-testid=shopping-list-item]").last();
        const quantityInput = lastItem.locator("[data-testid=input-text-input]");
        await expect(quantityInput).toBeVisible();

        const initialQuantity = await quantityInput.getAttribute("placeholder");
        expect(initialQuantity).toBe(PRODUCT_QUANTITY);

        const newQuantity = "10";
        await quantityInput.fill(newQuantity);

        const updatedQuantity = await quantityInput.inputValue();
        expect(updatedQuantity).toBe(newQuantity);
    });

    test("should open product link when clicking on it", async ({ page }) => {
        const slowOperation = async () => page.context().pages();
        const condition = async (pages: Page[]) => expect(pages.length).toBeGreaterThanOrEqual(2);

        const { PRODUCT_NAME, PRODUCT_LINK, PRODUCT_QUANTITY } = DATA.FIXTURE_5;

        await addOneItem(page, PRODUCT_NAME, PRODUCT_LINK, PRODUCT_QUANTITY);

        const shoppingList = page.locator("[data-testid=shopping-list]");
        await expect(shoppingList).toBeVisible();

        const lastItem = shoppingList.locator("[data-testid=shopping-list-item]").last();
        const productLink = lastItem.locator("a").first();

        await expect(productLink).toBeVisible();

        const linkHref = await productLink.getAttribute("href");
        expect(linkHref).toBe(PRODUCT_LINK);

        await productLink.click();

        const isFulfilled = await retrySlowOperation(page, slowOperation, condition); // Browser is slow as snail sometimes

        expect(isFulfilled).toBe(true);
    });

    test("should open all products that need to be bought", async ({ page }) => {
        const { FIRST_PRODUCT, SECOND_PRODUCT } = DATA.FIXTURE_3;

        await addTwoItems(page, FIRST_PRODUCT, SECOND_PRODUCT);

        const tableSize = await page.locator("[data-testid=shopping-list] li").count();
        const lastItem = page.locator("[data-testid=shopping-list] li").nth(tableSize - 1);
        const previousItem = page.locator("[data-testid=shopping-list] li").nth(tableSize - 2);

        await expect(lastItem).toBeVisible();
        await expect(previousItem).toBeVisible();

        const checkbox1 = lastItem.locator('[data-testid=checkbox-text] input');
        const checkbox2 = previousItem.locator('[data-testid=checkbox-text] input');

        const isChecked1 = await checkbox1.isChecked();
        const isChecked2 = await checkbox2.isChecked();

        expect(isChecked1).toBe(true);
        expect(isChecked2).toBe(true);

        const openAllButton = page.getByRole("button", { name: "Abrir todos" });
        await openAllButton.click();

        const DEFAULT_TIMEOUT_PER_ITEM = 3000;
        await page.waitForTimeout(DEFAULT_TIMEOUT_PER_ITEM * 2);

        const pages = page.context().pages();
        expect(pages.length).toBeGreaterThanOrEqual(2);
    });

    test("should clean the shopping list of active products", async ({ page }) => {
        const { PRODUCT_NAME, PRODUCT_LINK, PRODUCT_QUANTITY } = DATA.FIXTURE_7;

        await addOneItem(page, PRODUCT_NAME, PRODUCT_LINK, PRODUCT_QUANTITY);

        const shoppingList = page.locator("[data-testid=shopping-list]");
        const itemCount = await shoppingList.locator("[data-testid=shopping-list-item]").count();
        const lastItem = shoppingList.locator("[data-testid=shopping-list-item]").nth(itemCount - 1);
        const checkbox = lastItem.locator('[data-testid=checkbox-text] input');
        const isChecked = await checkbox.isChecked();
        expect(isChecked).toBe(true);

        await page.getByRole("button", { name: "Limpiar lista" }).click();

        const slowOperation = async () => {
            let some = false;
            const checkboxes = shoppingList.locator('[data-testid=checkbox-text] input');

            for (let i = 0; i < await checkboxes.count(); i++) {
                const isChecked = await checkboxes.nth(i).isChecked();

                if (!some) {
                    some = isChecked;
                }
            }

            return some;
        }
        const condition = async (isChecked: boolean) => expect(isChecked).toBe(false);

        await retrySlowOperation(page, slowOperation, condition);

        await cleanUp(page, [lastItem]);
    });

    test("should delete an item from the shopping list", async ({ page }) => {
        const slowOperation = async () => {
            const newFirstItem = shoppingList.locator("[data-testid=shopping-list-item]").first();
            const newFirstItemName = newFirstItem.locator("span").first();

            await expect(newFirstItem).toBeVisible();
            await expect(newFirstItemName).toBeVisible();

            const itemCountAfterClick = await shoppingList.locator("[data-testid=shopping-list-item]").count();

            return itemCountAfterClick;
        }

        const condition = async (result: any) => expect(result).toBeLessThan(initialItemCount);

        const { FIRST_PRODUCT, SECOND_PRODUCT } = DATA.FIXTURE_3;

        await addTwoItems(page, FIRST_PRODUCT, SECOND_PRODUCT);

        const shoppingList = page.locator("[data-testid=shopping-list]");

        await expect(shoppingList).toBeVisible();

        const firstItem = shoppingList.locator("[data-testid=shopping-list-item]").first();
        const firstItemName = firstItem.locator("span").first();

        await expect(firstItem).toBeVisible();
        await expect(firstItemName).toBeVisible();

        const initialItemCount = await shoppingList.locator("[data-testid=shopping-list-item]").count();

        expect(initialItemCount).toBeGreaterThan(0);

        const deleteButton = firstItem.locator("button").last();

        await deleteButton.click();

        const isFulfilled = await retrySlowOperation(page, slowOperation, condition);
        expect(isFulfilled).toBe(true);
    });
});
