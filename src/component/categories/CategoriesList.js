import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCategory, getCategory, reset } from "../../store/Categories";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

const CategoriesList = () => {
  let dispatch = useDispatch();

  let categories = useSelector((state) => state.category.categories);
  
  const handleCategory = (category) => {
    let action = updateCategory(category);
    dispatch(action);
  };
  
  const handleReset = () => {
    let action = reset();
    dispatch(action);
  };
  
  useEffect(() => {
    dispatch(getCategory());
  },[dispatch]);
  
  console.log(categories);

  return (
    <Box>
      <List>
        {categories.length
          ? categories[0].results.map((category) => (
              <button
                key={category._id}
                onClick={() => handleCategory(category)}
              >
                {category.name}
              </button>
            ))
          : null}
        <button onClick={() => handleReset()}>RESET</button>
      </List>
    </Box>
  );
};

export default CategoriesList;
