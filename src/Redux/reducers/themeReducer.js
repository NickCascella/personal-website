let initalState = {
  color: "white",
  backgroundColor: "rgba(0,0,0,1)",
  on: true,
};

let themeReducer = (state = initalState, action) => {
  switch (action.type) {
    case true:
      return {
        color: "white",
        backgroundColor: "rgba(0,0,0,1)",
      };
    case false:
      return {
        color: "black",
        backgroundColor: "white",
      };
    default:
      return state;
  }
};

export default themeReducer;
