import React from 'react';

const Education = () => {
  return (
    <div>
      <ul>
        <li>
          <span>
            MS in Computer Engineering - Researcher at{' '}
            <a href="http://iislab.skku.edu" target="_blank" rel="noopener noreferrer">
              IIS Lab.
            </a>
          </span>
          <br />
          <span className="ml-2 text-muted">Mar. 2009 ~ Feb. 2011</span>
        </li>
        <li className="mt-3">
          <span>BS in Computer Engineering</span>
          <br />
          <span className="ml-2 text-muted">Mar. 2002 ~ Feb. 2009</span>
        </li>
      </ul>
    </div>
  );
};

export default Education;
