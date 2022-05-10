import { connect } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { updateList, reset } from "../../store/Products";

function ProductList({ products, filterProduct }) {
  console.log(products, filterProduct)
  return (
    <Box>
      {filterProduct.length ?
      filterProduct.map((product) => (
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

const mapStateToProps = ({ products }) => {
  return {
    products: products.products,
    filterProduct: products.filterProduct
  }
}

const mapDispatchToProps = {
  updateList,
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)