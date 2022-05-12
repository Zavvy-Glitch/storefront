import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { addToCart } from "../../store/Cart";
import { CardActions, Button } from "@mui/material";

export default function ProductList() {
  let products = useSelector((state) => state.products);

  let dispatch = useDispatch();

  const handleCart = (item) => {
    let action = addToCart(item);
    dispatch(action);
  };


  return (
    <Box>
      {products.products.length
        ? products.filterProduct.map((product) => (
            <Card key={product.id}>
              <CardContent>
                <Typography>{product.name}</Typography>
                <Typography>{product.description}</Typography>
                <Typography>Price: {product.price}</Typography>
                <Typography>Inventory: {product.inventoryCount}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleCart(product.name)}>
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          ))
        : null}
    </Box>
  );
}
