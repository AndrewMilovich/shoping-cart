import {Box, Button, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

import {PRODUCTS_MAP, ShoppingCartItem} from "../models";
import {useState} from "react";

const TotalWrapper = styled(Box)(() => ({
    paddingTop: 40
}));

type TotalProps = {
    items: ShoppingCartItem[];
    removeAll:any
};


const Total: React.FC<TotalProps> = ({items,removeAll}) => {
    let [total, setTotal] = useState(0);
    items.map((value) => {
            const product = PRODUCTS_MAP[value.productId];
            const price = product?.price || 0;
            const number = value.quantity * price;
            total += number
        }
    )
    const clear=()=>{
        items.length=0
    }
    return (
        <TotalWrapper>
            <Grid container>
                <Grid item xs={6}>
                    <Typography>{`Total:${total}`}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined" onClick={()=> removeAll()}>Clear</Button>
                </Grid>
            </Grid>
        </TotalWrapper>
    );
};

export default Total;
