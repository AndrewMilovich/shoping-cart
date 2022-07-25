import {Box, Button, ButtonGroup, createChainedFunction, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {PRODUCTS_MAP, ShoppingCartItem} from "../models";


const ItemsListWrapper = styled(Box)(() => ({
    paddingTop: 20
}));

type ItemsListProps = {
    items: ShoppingCartItem[];
    inc: any;
    dec:any;
    removeItem:any;
};

const ItemsList: React.FC<ItemsListProps> = ({items,inc,dec,removeItem}) => {


    return (
        <ItemsListWrapper>
            {items.map((item) => {
                const product = PRODUCTS_MAP[item.productId];
                const price = product?.price || 0;

                return (
                    <Grid container key={item.productId}>
                        <Grid item xs={12}>
                            <Typography>{product?.label}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>{`${item.quantity} x $${price} = $${
                                item.quantity * price
                            }`}</Typography>
                        </Grid>
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button onClick={()=>inc(item)}>+</Button>
                            <Button onClick={()=>dec(item)}>-</Button>
                            <Button onClick={()=>removeItem(item)}>x</Button>
                        </ButtonGroup>
                    </Grid>
                );
            })}
        </ItemsListWrapper>
    );
};

export default ItemsList;
