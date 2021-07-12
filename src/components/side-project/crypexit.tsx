import { memo } from 'react';
import imgCrypexit from '../../img/crypexit.png';

const CrypExit = memo(() => {
  return (
    <div className="row justify-content-center">
      <div className="col-10 col-md-5 order-1 order-md-2 mt-3 text-center">
        <img className="img-fluid rounded shadow" src={imgCrypexit} alt="CrypExit" />
      </div>
      <div className="col-12 col-md-6 mt-3 order-2 order-md-1 text-left text-center align-self-center">
        <div className="highlite-color font-bigger-1">
          CrypExit{' '}
          <a href="https://crypexit.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="gray"
              className="bi bi-link-45deg"
              viewBox="0 0 16 16"
            >
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
            </svg>
          </a>
        </div>
        <small>You can check main cryptocurrencies' real time price of each global famous exchange at a glance.</small>
        <br />
        <small>May.2021 - June.2021</small>
        <br />
        <br />
        <div className="font-weight-bold">Skills:</div>
        Backend - Node.js(KOA), MongoDB, Apollo Server(GQL)
        <br />
        Frontend - Next.js(React), Typescript, Tailwind CSS, Apoll Client(GQL)
      </div>
    </div>
  );
});

export default CrypExit;
