import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { deleteFromCart } from "../../store/Cart"

export default function CartList() {
  let cart = useSelector((state) => state.cart.cartItems);
  let cartCount = useSelector((state) => state.cart.cartCount);
  let dispatch = useDispatch();

  const handleDelete = (item) => {
    let action = deleteFromCart(item);
    dispatch(action)
  }

  console.log(cart);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length
        ? cart.map((item) => (
            <Card key={item.id}>
              <CardContent>
                <Typography>{item}</Typography>
                <button onClick={() => handleDelete(item)}>Remove</button>
              </CardContent>
            </Card>
          ))
        : null}
      <Typography>Cart Items:{cartCount}</Typography>
    </div>
  );
}
