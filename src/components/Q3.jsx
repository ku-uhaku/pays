import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Q3 = () => {
  const cards = useSelector((state) => state.MainReducer);
  console.log(cards);
  const { indepYear } = useParams();

  const pays = indepYear
    ? cards.filter((card) => card.indepYear == indepYear)
    : cards;

  return (
    <div className="container mt-4 text-center ">
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <td>name</td>
            <td>surface</td>
            <td>Image</td>
            <td>population</td>
          </tr>
        </thead>
        <tbody>
          {pays.map((card) => {
            return (
              <tr key={card.id}>
                <td>{card.name}</td>
                <td>{card.surface}</td>
                <td>
                  <img src={card.Image} width="40px" alt="" />
                </td>
                <td>{card.population}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Q3;
