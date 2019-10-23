import React from 'react';

const Careers = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-4 mt-2 text-center">
          <img src="/img/skp_logo.png" alt="SK planet logo" style={{ width: '96px' }} />
        </div>
        <div className="col-12 col-md-8 mt-2">
          <ul>
            <li>
              Frontend Team, SK planet
              <br />
              <span className="text-muted font-smaller-1 ml-2">- Front-End Developer (Sep.2018 ~ Current)</span>
            </li>
            <li className="mt-3">
              Platform Development Team, SK techx
              <br />
              <span className="text-muted font-smaller-1 ml-2">- Android Developer (Dec.2016 ~ Aug.2018)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-md-4 mt-2 text-center">
          <img src="/img/lg_logo.jpg" alt="LG logo" style={{ width: '96px' }} />
        </div>
        <div className="col-12 col-md-8 mt-2">
          <ul>
            <li>
              IMS Team, Mobile Communications Lab. LG Electronics
              <br />
              <span className="text-muted font-smaller-1 ml-2">- Android Developer (Dec. 2015 ~ Dec. 2016)</span>
            </li>
            <li className="mt-3">
              Web Team, Mobile Communications Lab. LG Electronics
              <br />
              <span className="text-muted font-smaller-1 ml-2">- Android Developer (Apr. 2011 ~ Nov. 2015)</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Careers;
