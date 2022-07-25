import {Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {ReactNode, useState} from "react";

import {ShoppingCartItem} from "../models";

import AddItemForm from "./AddItemForm";
import ItemsList from "./ItemsList";
import Total from "./Total";


const ShoppingCardWrapper = styled(Paper)(() => ({
    width: 600,
    margin: "auto",
    padding: 50,
    minHeight: 500
}));

const ShoppingCartHeader = styled(Typography)(() => ({
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 24
}));

const ShoppingCart = () => {
    const [items, setItems] = useState<ShoppingCartItem[]>([]);

    const getFrom = async (data: ShoppingCartItem) => {
        let shoppingCartItem = items.find(value => value.productId === data.productId);
        if (shoppingCartItem) {
            setItems(items.map(value => value.productId === shoppingCartItem?.productId ? {
                ...shoppingCartItem,
                quantity: data.quantity + shoppingCartItem?.quantity
            } : value))
        } else {
            await setItems([...items, data])
        }
    }
    const inc = async (data: ShoppingCartItem) => {
        let shoppingCartItem = items.find(value => value.productId === data.productId);
        if (shoppingCartItem) {
            setItems(items.map(value => value.productId === shoppingCartItem?.productId ? {
                ...shoppingCartItem,
                quantity: data.quantity + 1
            } : value))
        }
    }
    const dec = async (data: ShoppingCartItem) => {
        let shoppingCartItem = items.find(value => value.productId === data.productId);
        if (shoppingCartItem) {
            setItems(items.map(value => value.productId === shoppingCartItem?.productId ? {
                    ...shoppingCartItem,
                    quantity: data.quantity - 1
                } : value)
            )
            if (shoppingCartItem.quantity <= 1) {
                setItems(items.filter(value => value.productId !== data.productId))
            }
        } else {
            await setItems([...items, data])
        }
    }
    const removeItem = (data: ShoppingCartItem) => {
        const shoppingCartItems = items.filter(value => value.productId !== data.productId);
        setItems(shoppingCartItems)
    }
    const removeAll = () => {
        setItems([])
    }


    return (
        <ShoppingCardWrapper>
            <ShoppingCartHeader>Shopping Cart</ShoppingCartHeader>
            <AddItemForm getFrom={getFrom}/>
            {!!items.length && (
                <>
                    <ItemsList items={items} inc={inc} dec={dec} removeItem={removeItem}/>
                    <Total items={items} removeAll={removeAll}/>
                </>
            )}
        </ShoppingCardWrapper>
    );
};

export default ShoppingCart;
