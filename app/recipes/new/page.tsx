'use client';

import { buildDomain } from "@/helpers/domain";
import { Button, InputText } from "@coding-flavour/common";
import { FormEvent, useState } from "react";


const RecipesNewPage = () => {
    const [ingredients, setIngredients] = useState(['']);

    const addNewEmptyIngredient = () => {
        setIngredients([...ingredients, '']);
    }

    function handleIngredientChange(value: string, index: number) {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const recipeName = Object.values(event.target).find((field) => field.id === 'name').value;
        const instructions = Object.values(event.target).find((field) => field.id === 'instructions').value;

        const newRecipe = {
            recipeName,
            instructions,
            ingredients
        }
        const url = buildDomain();

        fetch(`${url}/recipe/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
            .then(() => {
                alert('Receta guardada con éxito');
            })
            .catch(() => {
                alert('Error al guardar la receta');
            });
    }

    function handleClearForm() {
        setIngredients(['']);
    }

    return (
        <div>
            <h1>Nueva receta</h1>
            <form onSubmit={handleFormSubmit}>
                <InputText
                    id="name"
                    type="text"
                    value={"Nombre de la receta"}
                    withClear
                />
                <Button text="Crear receta" isSubmitting />
                <Button text="Cancelar" clickFn={handleClearForm} />
                <Button text="Añadir ingrediente" clickFn={addNewEmptyIngredient} />
                {ingredients.map((ingredient, index) => (
                    <InputText
                        key={index}
                        id={`ingredient-${ingredient}`}
                        type="text"
                        value={`Ingrediente ${index + 1}`}
                        valueOnChange={(value) => handleIngredientChange(value, index)}
                        withClear
                    />
                ))}
                <InputText type="textarea" value="Instrucciones" id="instructions" withClear />
            </form>
        </div>
    );
}

export default RecipesNewPage;