import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          subText={project.subText}
          description={project.description}
          link={project.link}
          githubLink={project.githubLink}
          demoLink={project.demoLink}
        />
      ))}

<a href="https://www.behance.net/chilele"
   class="font-semibold text-orange-500 hover:underline inline-flex items-center">
  Check out my professional UI/UX projects on Behance <span class="ml-1">→</span>
</a>

    </Section>
  );
};

export default SectionProjects;
