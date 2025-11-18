export interface Certification {
  organization: string;
  title: string;
  link: string;
  expiration: string;
}

const certifications: Certification[] = [
  {
    organization: 'Tableau (Salesforce)',
    title: 'Tableau Dekstop Specialist',
    link: 'https://www.credly.com/badges/5546956e-382e-4abe-8e88-498a491e371d/linked_in_profile',
    expiration: '',
  },
  {
    organization: 'Microsoft',
    title: 'Power BI Data Analyst Associate (PL-300)',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/JaneK-6447/C359FF3AC5BE7DAC?sharingId',
    expiration: '2026-08-31',
  },
  {
    organization: 'Alteryx',
    title: 'Alteryx Designer Core Certification',
    link: 'https://www.credly.com/badges/567db513-dfbe-4c50-aaa2-6deb081fd4f5/linked_in_profile',
    expiration: '2026-01-16',
  },
  {
    organization: 'Google',
    title: 'Google Data Analytics Professional Certificate',
    link: 'https://www.credly.com/badges/bf9c22fe-82b6-4bcd-8794-8e2225212160/linked_in_profile',
    expiration: '',
  },
  {
    organization: 'Tableau (Salesforce)',
    title: 'Tableau Ambassador',
    link: 'https://www.tableau.com/community/community-leaders/ambassadors',
    expiration: '2026-09-03',
  },
];

export default certifications;
