import React from 'react';

const FrontEnd = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-10 col-md-5 mt-3 text-center">
          <img className="img-fluid shadow" src="/img/capstec.png" alt="Capstec" />
        </div>
        <div className="col-12 col-md-6 mt-3 text-left text-center align-self-center">
          <div className="highlite-color font-bigger-1">Casptec</div>
          <small>IoT sensor solution / Building management</small>
          <br />
          <small>June.2018 - Dec.2019</small>
          <br />
          <br />
          <div className="font-weight-bold">Skills:</div>
          Typescript, Next.js(React)
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-10 col-md-5 order-1 order-md-2 mt-3 text-center">
          <img className="img-fluid shadow" src="/img/air-quality.png" alt="Air-Quality" />
        </div>
        <div className="col-12 col-md-6 mt-3 order-2 order-md-1 text-left text-center align-self-center">
          <div className="highlite-color font-bigger-1">Air quality solution</div>
          <small>IoT sensor solution / Visualization of air quality</small>
          <br />
          <small>June.2018 - Dec.2019</small>
          <br />
          <br />
          <div className="font-weight-bold">Skills:</div>
          Typescript, React
        </div>
      </div>
    </>
  );
};

export default FrontEnd;
