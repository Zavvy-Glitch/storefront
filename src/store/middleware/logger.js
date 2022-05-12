const logger = store => (next) => (action) => {
  console.log("___ACTION___", action);
  return next(action);
}

export default logger;