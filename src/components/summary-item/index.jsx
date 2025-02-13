import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900',
  subText: 'font-semibold text-sm text-blue-700 uppercase',
  description: 'text-md text-gray-600 font-light',
  link: 'ml-2 font-semibold text-blue-700 hover:underline',
};

const SummaryItem = ({ name, subText = null, description = null, link = false, demoLink = false, githubLink = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <div className="flex items-center">
        <h3 className={classes.name}>{name}</h3>
        {link && (
          <span className={classes.link}>
            <a href={link} rel="noopener noreferrer">
              [Company Site]
            </a>
          </span>
        )}
        {demoLink && (
          <span className={classes.link}>
            <a href={demoLink} rel="noopener noreferrer">
              [Demo]
            </a>
          </span>
        )}
        {githubLink && (
          <span className={classes.link}>
            <a href={githubLink} rel="noopener noreferrer">
              [Repo]
            </a>
          </span>
        )}
      </div>
      <span className={classes.subText}>{subText}</span>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;
