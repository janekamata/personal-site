/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Forvis Mazars',
    position: 'Incoming Analytics Intern',
    url: 'https://www.forvismazars.us/',
    startDate: '2026-05-04',
    endDate: '2026-06-26',
    highlights: [],
  },
  {
    name: 'Code4Community',
    position: 'Software Developer',
    url: 'https://www.c4cneu.com/',
    startDate: '2024-09-03',
    summary:
      'Code4Community is a nonprofit organization that builds software solutions for other nonprofits to help them better serve their communities. As a software developer, I work on a team to design, develop, and deploy full-stack applications that address the unique needs of our nonprofit partners.',
    highlights: [
      'Develop custom software solutions for nonprofits to improve operational efficiency',
      'Collaborate with UI/UX designers to translate Figma wireframes into fully responsive, full-stack applications',
    ],
  },
  {
    name: 'Northeastern University',
    position: 'Teaching Assistant',
    url: 'https://www.northeastern.edu/',
    startDate: '2023-09-03',
    summary:
      'As an undergraduate teaching assistant, I worked for a variety of courses ranging from Data Science, Information Analytics, Information Visualization, Program Design and Implementation, and Object-Oriented Design. Depending on the course, responsibilities range from creating assignments, grading, one-on-one office hours, guest lecturing, and reviewing course content.',
    highlights: [
      'Support 150+ students in using Tableau, Python, SQL, and Excel to build analytics models and data visualizations',
      'Deliver lectures, hands-on tutorials, and one-on-one sessions, helping students create insight-driven dashboards',
      'Troubleshoot data pipeline and visualization issues, reinforcing best practices in BI and problem-solving skills',
    ],
  },
  {
    name: 'Bain Capital',
    position: 'Business System Analyst Co-op (Private Markets Analytics)',
    url: 'https://www.baincapital.com/',
    startDate: '2025-01-14',
    endDate: '2025-06-27',
    summary: `Bain Capital is a multi-asset private investment firm with over $160 billion in assets under management. As a Business System Analyst Co-op on the Private Markets Analytics team, I collaborated across functions to design and implement business intelligence solutions that drive data-informed decision-making for teams across shared services and business units.`,
    highlights: [
      'Acted as an internal BI consultant on projects serving 1,000+ stakeholders across business units, translating business requirements into scalable data solutions and collaborating with clients on iterative development',
      'Balanced dual team responsibilities while delivering end-to-end BI solutions in an Agile environment',
      'Designed ad-hoc interactive Tableau dashboards integrating sentiment and geospatial analysis for deal diligence',
      'Optimized Power BI model reliability by 40% by enhancing data pipelines with API and data lake integrations',
      'Presented Tableau Cloud evaluation and demo to leadership, comparing Pulse/Agent, Server, and AI capabilities',
      '(Continued responsibilities from 2024 co-op with expanded scope and leadership roles)',
    ],
  },
  {
    name: 'Bain Capital',
    position: 'Business System Analyst Co-op (Real Estate)',
    url: 'https://www.baincapital.com/',
    startDate: '2024-01-9',
    endDate: '2024-08-29',
    summary: `Bain Capital is a multi-asset private investment firm with over $160 billion in assets under management. As a Business System Analyst Co-op focused on Real Estate, I collaborated with my team to analyze, design, and implement technology solutions that enhance Real Estate business processes and drive operational efficiency for internal and external stakeholders.`,
    highlights: [
      'Spearheaded finance reporting automation with Power BI dashboards and Power BI paginated reports, improving efficiency 25% and documenting solutions',
      'Integrated business process automation using Power Automate and Power Apps, optimizing workflows and enhancing operational efficiency',
      'Resolved 200+ Yardi support tickets, translating technical issues for internal and external business users',
      'Created and optimized SQL/DAX queries and data models for scalable reporting on large financial datasets',
      'Acted as a liaison between business users and developers, facilitating requirements gathering and ongoing support',
    ],
  },

  {
    name: 'Northeastern University',
    position: 'Learning Experience Design Assistant',
    url: 'https://www.northeastern.edu/',
    startDate: '2022-09-03',
    endDate: '2023-12-20',
    summary: `As a Learning Experience Design Assistant at Northeastern University's D'Amore-McKim School of Business Learning Design and Technology Group, I collaborated with faculty members to enhance course materials and develop engaging learning experiences. My role involved applying instructional design principles to create accessible and inclusive content that supports diverse learning needs.`,
    highlights: [
      'Transformed course materials into engaging content for Instructure Canvas LMS and Articulate, adhering to Universal Design for Learning (UDL) principles',
      'Supported Diversity, Equity, and Inclusion (DEI) initiatives through course content accessibility',
      'Facilitated data entry and collection for support tickets, streamlining operational processes',
    ],
  },
];

export default work;
