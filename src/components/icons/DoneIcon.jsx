import React from 'react';
import PropTypes from 'prop-types';

const DoneIcon = ({ className }) => (
  <svg className={className} width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.6318 0.250858C13.1958 -0.129753 12.5457 -0.0705885 12.1799 0.383006L5.01261 9.26881L1.82013 5.31084C1.45426 4.85725 0.804195 4.79808 0.368171 5.1787C-0.0678543 5.55931 -0.124727 6.23556 0.241141 6.68916L4.21592 11.617C4.42133 11.8717 4.71632 12.002 5.01272 12C5.30905 12.0019 5.60394 11.8716 5.8093 11.617L13.7589 1.76132C14.1247 1.30773 14.0679 0.631469 13.6318 0.250858Z" fill="#0AD65C"/>
  </svg>
);

DoneIcon.propTypes = {
  className: PropTypes.string
}

export default DoneIcon;
