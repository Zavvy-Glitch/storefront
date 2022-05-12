import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { addToCart } from "../../store/Cart";
import { getProduct } from "../../store/Products";
import { CardActions, Button } from "@mui/material";
import { useEffect } from "react";

export default function ProductList() {

  let products = useSelector((state) => state.products);

  const handleCart = (item) => {
    let cartAction = addToCart(item);
    dispatch(cartAction);
  };

  console.log(products);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Box>
      {products.filterProduct.length
        ? products.filterProduct.map((product) => (
            <Card key={product._id}>
              <CardContent>
                <Typography>{product.name}</Typography>
                <Typography>Price: {product.price}</Typography>
                <Typography>Inventory: {product.inStock}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleCart(product)}>Add To Cart</Button>
              </CardActions>
            </Card>
          ))
        : null}
    </Box>
  );
}
