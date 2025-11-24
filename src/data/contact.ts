import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/janekamata',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://public.tableau.com/app/profile/jane.kamata/vizzes',
    label: 'Tableau Public',
    icon: faGlobe,
  },
  {
    link: 'https://github.com/janekamata',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'mailto:jane.m.kamata@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
