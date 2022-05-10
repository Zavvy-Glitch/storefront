import { connect } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { productItem } from "../../store/Products";

function ProductList({ products }) {
  console.log(products)
  return (
    <Box>
      {products.map((product) => (
        <Card key={product.id}>
          <CardContent>
            <Typography>{product.name}</Typography>
            <Typography>{product.description}</Typography>
            <Typography>Price: {product.price}</Typography>
            <Typography>Inventory:  {product.inventoryCount}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

const mapStateToProps = ({ products }) => {
  return {
    products: products.products,
  }
}

const mapDispatchToProps = {
  productItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)