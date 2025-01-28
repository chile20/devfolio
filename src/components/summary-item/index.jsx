import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900',
  subText: 'font-semibold text-sm text-blue-700 uppercase',
  description: 'text-md text-gray-600 font-light',
};

const SummaryItem = ({ name, subText = null, description = null, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <span className={classes.subText}>{subText}</span>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;
