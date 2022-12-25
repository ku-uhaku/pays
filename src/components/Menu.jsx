import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q5 from "./Q5";
import Q6 from "./Q6";
const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          exame Stat/Caza
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="q3">
                Q3
              </Link>
              <Link className="nav-item nav-link" to="q4">
                Q4
              </Link>
              <Link className="nav-item nav-link" to="q5">
                Q5
              </Link>
              <Link className="nav-item nav-link" to="q6">
                Q6
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="q3">
          <Route exact index element={<Q3 />} />
          <Route exact path=":indepYear" element={<Q3 />} />
        </Route>
        <Route path="q4" element={<Q4 />} />
        <Route path="q5" element={<Q5 />} />
        <Route path="q6" element={<Q6 />} />
      </Routes>
    </div>
  );
};

export default Menu;
