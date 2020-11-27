import React from 'react';
import imgTworld from '../../img/tworld.jpg';

const FullStack = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-10 col-md-4 mt-3 text-center">
          <img className="img-fluid rounded shadow" src={imgTworld} alt="Tworld" />
        </div>
        <div className="col-12 col-md-6 mt-3 text-left text-center align-self-center">
          <div className="highlite-color font-bigger-1">T world</div>
          <small>SKTelecom customer services</small>
          <br />
          <small>July.2018 - May.2019</small>
          <br />
          <br />
          <div className="font-weight-bold">Skills:</div>
          Backend - Typescript, Node.js, Express, EJS, Redis
          <br />
          Frontend - Javascript, JQuery, Handlebars
        </div>
      </div>
    </>
  );
};

export default FullStack;
