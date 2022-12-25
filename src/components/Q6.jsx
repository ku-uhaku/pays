import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { petit, grand } from "../actions";
import { useState } from "react";

const Q6 = () => {
  const cards = useSelector((state) => state.MainReducer);
  // const dispatch = useDispatch();
  const [pays, setPays] = useState(cards);
  // useEffect(() => {
  //   setPays(cards);
  // }, [cards]);
  const handleChangeSelectPop = (e) => {
    let data;
    if (e.target.value == "petit") {
      data = pays.sort((a, b) => {
        return a.population - b.population;
      });
    } else {
      data = pays.sort((a, b) => {
        return b.population - a.population;
      });
    }
    setPays([...data]);
  };
  const [continent, setContinent] = useState([]);
  //if exise continent in array continent dont add it else add it
  const handleGetContinent = (e) => {
    cards.forEach((element) => {
      if (!continent.includes(element.continent)) {
        setContinent([...continent, element.continent]);
      }
    });
    return continent;
  };
  const handleChangeSelectContinent = (e) => {
    console.log(e.target.value);
    let data = cards.filter((el) => el.continent === e.target.value);
    if (e.target.value !== "all") {
      setPays([...data]);
    } else {
      console.log("ok");
      setPays([...cards]);
    }
  };

  return (
    <div className="container">
      <div className=" d-flex flex-column justify-content-center">
        <select
          name=""
          id=""
          onChange={(e) => handleChangeSelectPop(e)}
          className="d-inline-flex p-2 w-50 my-4 mx-auto"
        >
          <option value="grand">Plus Grand</option>
          <option value="petit">Plus Petit</option>
        </select>
        <br />
        <select
          name=""
          id=""
          onChange={(e) => handleChangeSelectContinent(e)}
          className="d-inline-flex p-2 w-50 mb-4"
        >
          <option value="all">All</option>
          {handleGetContinent().map((el, index) => {
            return (
              <option value={el} key={index}>
                {el}
              </option>
            );
          })}
        </select>
      </div>
      <div className=" mt-2 text-center ">
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
            {pays.map((pay) => {
              return (
                <tr key={pay.id}>
                  <td>{pay.name}</td>
                  <td>{pay.surface}</td>
                  <td>
                    <img src={pay.Image} width="40px" alt="" />
                  </td>
                  <td>{pay.population}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Q6;
