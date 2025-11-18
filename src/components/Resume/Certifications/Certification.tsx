import React from 'react';

import type { Certification as CertificationType } from '@/data/resume/certifications';

interface CertificationProps {
  data: CertificationType;
  last?: boolean;
}

const Certification: React.FC<CertificationProps> = ({ data, last = false }) => (
  <li className="cert-container">
    <a href={data.link}>
      <h4 className="cert-name">{data.title}:</h4>
      <p className="cert-org">{data.organization}</p>
    </a>
    {!last && (
      <div className="cert-dot">
        <p className="cert-name"> &#8226;</p>
      </div>
    )}
  </li>
);

export default Certification;
