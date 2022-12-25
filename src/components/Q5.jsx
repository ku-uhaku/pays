import React from "react";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { combineReducers } from "redux";
import { ajouter, edit } from "../actions";

const Q5 = () => {
  const data = useSelector((state) => state.MainReducer);
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value;
    const surface = form.surface.value;
    const Image = form.image.value;
    const population = form.population.value;
    const dataForm = {
      name,
      surface,
      Image,
      population,
    };

    const element = data.find((el) => {
      console.log(el.name === dataForm.name);
      return el.name === dataForm.name;
    });

    if (!element) {
      dispatch(ajouter(dataForm));
    } else {
      element.population = dataForm.population;
      dispatch(edit(data));
    }
  };

  const [show, setShow] = useState(false);
  const [pays, setPays] = useState("");

  const handleChangeName = (e) => {
    setPays(e.target.value);
  };
  useEffect(() => {
    const element = data.find((el) => el.name === pays);
    if (element) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [pays]);
  return (
    <form onSubmit={handleSubmit} ref={formRef} className="container mt-5">
      <table>
        <tbody>
          <tr>
            <td>name</td>
            <td>
              <input type="text" name="name" onChange={handleChangeName} />
            </td>
          </tr>
          <tr>
            <td>population</td>
            <td>
              <input type="text" name="population" />
            </td>
          </tr>
          <tr className={show ? "" : "d-none"}>
            <td>Image</td>
            <td>
              <input type="text" name="image" />
            </td>
          </tr>
          <tr className={show ? "" : "d-none"}>
            <td>surface</td>
            <td>
              <input type="text" name="surface" />
            </td>
          </tr>

          <tr>
            <td>
              <button>{show ? "Ajouter" : "Modifier"}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Q5;
