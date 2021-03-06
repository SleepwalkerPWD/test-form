import React from 'react';
import PropTypes from 'prop-types';

const DownIcon = ({ className }) => (
  <svg className={className} width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.63115 8.36154C7.65734 8.34018 7.68269 8.3173 7.7071 8.29289L13.364 2.63604C13.7545 2.24551 13.7545 1.61235 13.364 1.22183C12.9734 0.831301 12.3403 0.831302 11.9497 1.22183L6.99999 6.17157L2.05025 1.22183C1.65972 0.831301 1.02656 0.831301 0.636033 1.22183C0.245508 1.61235 0.245509 2.24552 0.636033 2.63604L6.29289 8.29289C6.659 8.65901 7.23838 8.68189 7.63115 8.36154Z" fill="#809398"/>
  </svg>
);

DownIcon.propTypes = {
  className: PropTypes.string
}

export default DownIcon;