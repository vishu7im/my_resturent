import React from "react";

export default function Navbar(props) {
  return (
<>
<nav className={`navbar  navbar-expand-lg navbar-dark bg-dark`}>
  <div className="container-fluid">
<span className="navbar-brand mb-0 mx-4 h1 ">Resturent</span>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 nav nav-fill mb-lg-0">
      {props.nav.map((item) => {
        return (
       
          <button
            className="btn-group__item mx-4"
            onClick={() => props.filter(item)}
          >
            {item}
          </button>
         
        );
      })}
      </ul>
   


    </div>
  </div>
</nav>

    
    </>
  );
}
