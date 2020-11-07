import React from 'react';

const Android = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-10 col-md-4 mt-3 text-center">
          <img className="img-fluid rounded shadow" src={require('../../img/flo.jpg')} alt="Flo" />
        </div>
        <div className="col-12 col-md-6 mt-3 text-left text-center align-self-center">
          <div className="highlite-color font-bigger-1">Flo (a.k.a MusicMate)</div>
          <small>Music streaming platform</small>
          <br />
          <small>May.2017 - Aug.2018</small>
          <br />
          <br />
          <div className="font-weight-bold">Skills:</div>
          Java, Firebase, ExoPlayer, Retrofit, Glide, MVVM, etc.
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-10 col-md-4 order-1 order-md-2 mt-3 text-center">
          <img className="img-fluid shadow" src={require('../../img/datasoda.png')} alt="DataSoda" />
        </div>
        <div className="col-12 col-md-6 mt-3 order-2 order-md-1 text-left text-center align-self-center">
          <div className="highlite-color font-bigger-1">DataSoda</div>
          <small>LTE data share service</small>
          <br />
          <small>Dec.2016 - Apr.2017</small>
          <br />
          <br />
          <div className="font-weight-bold">Skills:</div>
          Java, Firebase, Retrofit, Glide, MVP, etc.
        </div>
      </div>
    </>
  );
};

export default Android;
