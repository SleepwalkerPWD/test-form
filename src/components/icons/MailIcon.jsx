import React from 'react';
import PropTypes from 'prop-types';

const MailIcon = ({ className }) => (
  <svg className={className} width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M14.5858 2H3.41421L8.29289 6.87868C8.68342 7.2692 9.31658 7.2692 9.70711 6.87868L14.5858 2ZM2 10.5858L2 3.41421L5.58579 7L2 10.5858ZM3.41421 12H14.5858L10.9966 8.4108C9.86101 9.42516 8.13899 9.42516 7.00341 8.4108L3.41421 12ZM12.4142 7L16 10.5858V3.41421L12.4142 7ZM2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H16C17.1046 14 18 13.1046 18 12V2C18 0.895431 17.1046 0 16 0H2Z" fill="#809398"/>
  </svg>
);

MailIcon.propTypes = {
  className: PropTypes.string
}

export default MailIcon;
