import React from 'react';

import type { Certification as CertificationType } from '@/data/resume/certifications';

import Certification from './Certifications/Certification';

interface CertificationProps {
  data: CertificationType[];
}

const getRows = (certifications: CertificationType[]) =>
  certifications
    .sort((a, b) => {
      let ret = 0;
      if (a.organization > b.organization) ret = -1;
      else if (a.organization < b.organization) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    })
    .map((certification, idx) => (
      <Certification
        data={certification}
        key={certification.title}
        last={idx === certifications.length - 1}
      />
    ));

const Certifications: React.FC<CertificationProps> = ({ data }) => (
  <div className="certifications">
    <div className="link-to" id="certifications" />
    <div className="title">
      <h3>Certifications</h3>
    </div>
    <ul className="certification-list">{getRows(data)}</ul>
  </div>
);

export default Certifications;
