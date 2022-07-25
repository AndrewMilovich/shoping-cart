import {Box, Button, FormControl, MenuItem, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import React, {useState} from "react";
import {ALL_PRODUCTS, ShoppingCartItem} from "../models";

const AddItemBox = styled(Box)(() => ({
    display: "flex",
    flex: 1,
    marginTop: "25px"
}));

const ItemSelectWrapper = styled(FormControl)(() => ({
    width: "200px",
    marginRight: "20px"
}));

const QuantityInputWrapper = styled(FormControl)(() => ({
    width: "80px",
    marginRight: "20px"
}));

type AddItemFormProps = {
    getFrom: any,
};

const AddItemForm: React.FC<AddItemFormProps> = ({getFrom}: AddItemFormProps,) => {
    const [productId, setProductId] = useState<string>("");
    let [quantity, setQuantity] = useState<number>(0);

    const add = () => {
        let item = {
            productId,
            quantity
        }
        getFrom(item)
    };


    return (
        <AddItemBox>
            <ItemSelectWrapper>
                <TextField
                    select
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    label="Product"
                >
                    {ALL_PRODUCTS.map((product) => (
                        <MenuItem key={product.id} value={product.id}>
                            {product.label}
                        </MenuItem>
                    ))}
                </TextField>
            </ItemSelectWrapper>
            <QuantityInputWrapper>
                <TextField

                    label="Quantity"
                    type="number"
                    onChange={(e) => setQuantity(+e.target.value)}
                    value={quantity}
                    inputProps={{min: 0}}
                />
            </QuantityInputWrapper>
            <Button
                onClick={() => add()}
                variant="contained"
                disabled={!quantity || !productId}
            >
                Add
            </Button>
        </AddItemBox>
    );
};

export default AddItemForm;
