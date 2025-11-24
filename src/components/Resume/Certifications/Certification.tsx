import React from 'react';

import type { Certification as CertificationType } from '@/data/resume/certifications';

interface CertificationProps {
  data: CertificationType;
  last?: boolean;
}

const Certification: React.FC<CertificationProps> = ({ data, last = false }) => (
  <li className="certification-container">
    <a href={data.link}>
      <h4 className="certification-name">{data.title}:</h4>
      <p className="certification-organization">{data.organization}</p>
    </a>
    {!last && (
      <div className="certification-dot">
        <p className="certification-organization"> &#8226;</p>
      </div>
    )}
  </li>
);

export default Certification;
