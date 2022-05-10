import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ProductList() {

 let products = useSelector(state => state.products.filterProduct)
  
  return (
    <Box>
      {products.length ?
      products.map((product) => (
        <Card key={product.id}>
          <CardContent>
            <Typography>{product.name}</Typography>
            <Typography>{product.description}</Typography>
            <Typography>Price: {product.price}</Typography>
            <Typography>Inventory:  {product.inventoryCount}</Typography>
          </CardContent>
        </Card>
      )): null}
    </Box>
  );
}