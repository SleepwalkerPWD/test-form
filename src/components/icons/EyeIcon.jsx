import React from 'react';
import PropTypes from 'prop-types';

const EyeIcon = ({ className }) => (
  <svg className={className}  width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 6C0 6 4.02944 12 9 12C13.9706 12 18 6 18 6C18 6 13.9706 0 9 0C4.02944 0 0 6 0 6ZM2.52785 6C2.91387 5.54528 3.40996 5.00621 3.99094 4.47114C5.51216 3.07011 7.28515 2 9 2C10.7148 2 12.4878 3.07011 14.0091 4.47114C14.59 5.00621 15.0861 5.54528 15.4721 6C15.0861 6.45472 14.59 6.99379 14.0091 7.52887C12.4878 8.92989 10.7148 10 9 10C7.28515 10 5.51216 8.92989 3.99094 7.52887C3.40996 6.99379 2.91387 6.45472 2.52785 6Z" fill="#809398"/>
    <path d="M12 6C12 7.65685 10.6569 9 9 9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3C10.6569 3 12 4.34315 12 6Z" fill="#809398"/>
  </svg>
);

EyeIcon.propTypes = {
  className: PropTypes.string
}

export default EyeIcon;
