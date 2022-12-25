const afficher = (text) => {
  return {
    type: "AFFICHER",
    text,
  };
};
const yearr = (deyear) => {
  return {
    type: "YEAR",
    payload: deyear,
  };
};
const ajouter = (data) => {
  return {
    type: "AJOUTER",
    payload: data,
  };
};
const edit = (data) => {
  return {
    type: "EDIT",
    payload: data,
  };
};
// const petit = (data) => {
//   return {
//     type: "PETIT",
//     payload: data,
//   };
// };
// const grand = (data) => {
//   return {
//     type: "GRAND",
//     payload: data,
//   };
// };

export { afficher, yearr, ajouter, edit };
