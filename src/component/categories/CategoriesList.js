import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCategory, reset } from "../categories/Categories";
import Box from "@mui/material/Box";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export default function CategoriesList() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
      ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  
  let categories = useSelector((state) => state.categories.categories);
  let active = useSelector((state) => state.categories.active);
  let dispatch = useDispatch();
  
  const handleCategory = (category) => {
    let action = updateCategory(category);
    dispatch(action);
  };
  
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "left" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      >
      <List>
      {categories.map((category) => (
        <button key={category.id} onClick={() => handleCategory(category)}>
          {category.dispName}
        </button>
      ))}
      {active ? <button onClick={() => handleReset()}>RESET</button> : null}
      </List>
      <Divider />
    </Box>
  );
  const handleReset = () => {
    let action = reset();
    dispatch(action);
  };
  
  return (
    <div>

      {["Filter Selection"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
