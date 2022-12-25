import data from "../data/data";
import { getData } from "../data/data";
const MainReducer = (state = data, action) => {
  switch (action.type) {
    case "AFFICHER":
      return state;
    case "YEAR":
      return (state = state.filter(
        (item) => item.indepYear === action.payload
      ));
    case "AJOUTER":
      return (state = [...state, action.payload]);
    case "EDIT":
      return (state = [...state]);
    // case "PETIT":
    //   return state;
    // case "GRAND":
    //   return state;
    default:
      return state;
  }
};

export default MainReducer;
