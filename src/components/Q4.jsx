import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Routes, Route } from "react-router-dom";
import { yearr } from "../actions/index";
import Q3 from "./Q3";

export const Q4 = () => {
  const datas = useSelector((state) => state.MainReducer);
  // const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <ul className="list-group list-group-flush">
        {datas.map((data) => {
          return (
            <li key={data.id} className="list-group-item pl-3">
              <Link
                to={`/q3/${data.indepYear}`}
                className="nav-item nav-link"
                // onClick={() => dispatch(yearr(data.indepYear))}
              >
                {data.indepYear}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Q4;
