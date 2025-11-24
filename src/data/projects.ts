export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'Boston Climate Action Network',
    subtitle: 'Code4Community Client Project',
    link: 'https://github.com/Code-4-Community/bcan',
    image: './images/projects/bcan2.png',
    date: '2025-12-04',
    desc:
      'Collaborate with a nonprofit client to deliver a tailored grant analytics dashboard for tracking grant win rate and costs using  Recharts with React, NestJS, AWS DynamoDB, and Jest. ' +
      'Translate Figma wireframes into a responsive React front-end integrated with custom backend analytics for a full-stack solution.',
  },
  {
    title: 'NBA Globalization',
    subtitle: 'Cleartelligence Chart Champ Runner-Up 2024',
    link: 'https://public.tableau.com/app/profile/jane.kamata/viz/NBAGlobalizationChartChamps/NBAGlobalization',
    image: './images/projects/nba_globalization.png',
    date: '2024-10-12',
    desc:
      'Analzed 455,663 basketball game records and 15,935 athelete data points from three datasets to creating runner-up infographic. ' +
      'Prepared and processed data using Tableau Prep, Gephi, and Python for network and performance analysis. ' +
      'Placed 2nd in competition after presenting in final round to a live audience and judging panel. ',
  },
  {
    title: 'Code4Community Website Redesign',
    subtitle: 'Code4Community Core Infrastructure Project',
    link: 'https://www.c4cneu.com/',
    image: './images/projects/c4c.png',
    date: '2024-9-05',
    desc:
      'Contributed to a website redesign of the Code4Community website ' +
      'leveraging Prismic CMS for content management alongside React and Express.',
  },
  {
    title: 'A Thousands Words are Worth a Picture',
    subtitle: 'Iron Viz Qualifiers 2024',
    image: './images/projects/thousand_words.png',
    date: '2023-10-27',
    desc:
      'Wrangled and analyzed 451,583 location data points and 345,719 words from 51,170 messages to create final visualization. ' +
      'Utilized Excel and Python to perofrm data wranling and data clenaing including setniment analysis and natural language processing. ' +
      'Received recognition from Tableau Visionary throgh blog feature, ' +
      'and presented to information visualization course about the process behind the visualization.',
  },
];

export default data;
