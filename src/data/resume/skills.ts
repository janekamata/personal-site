export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  {
    title: 'Tableau Desktop',
    competency: 5,
    category: ['Business Intelligence', 'Data Visualization'],
  },
  {
    title: 'Tableau Server / Tableau Cloud',
    competency: 3,
    category: ['Business Intelligence'],
  },
  {
    title: 'Power BI',
    competency: 5,
    category: ['Business Intelligence', 'Data Visualization', 'Power Platform'],
  },
  {
    title: 'Power BI Report Builder / SSRS',
    competency: 4,
    category: ['Business Intelligence'],
  },
  {
    title: 'Qlik',
    competency: 1,
    category: ['Business Intelligence', 'Data Visualization'],
  },
  {
    title: 'Excel',
    competency: 4,
    category: ['Data Tools', 'Microsoft Office'],
  },
  {
    title: 'PowerPoint',
    competency: 4,
    category: ['Microsoft Office'],
  },
  {
    title: 'Word',
    competency: 4,
    category: ['Microsoft Office'],
  },
  {
    title: 'Outlook',
    competency: 4,
    category: ['Microsoft Office'],
  },
  {
    title: 'Alteryx',
    competency: 4,
    category: ['Data Tools'],
  },
  {
    title: 'Tableau Prep',
    competency: 4,
    category: ['Data Tools'],
  },
  {
    title: 'Snowflake',
    competency: 1,
    category: ['Databases'],
  },
  {
    title: 'Airtable',
    competency: 3,
    category: ['Data Tools'],
  },
  {
    title: 'Power Apps',
    competency: 3,
    category: ['Power Platform'],
  },
  {
    title: 'Power Automate',
    competency: 4,
    category: ['Power Platform'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Programming', 'Databases'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Programming', 'Data Science'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'NumPy',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'scikit-learn',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'DAX',
    competency: 4,
    category: ['Programming', 'Power Platform'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Development Tools'],
  },
  {
    title: 'JIRA',
    competency: 3,
    category: ['Development Tools'],
  },
  {
    title: 'Monday.com',
    competency: 3,
    category: ['Development Tools'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Programming'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'HTML',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'CSS',
    competency: 4,
    category: ['Web Development', 'Design Tools'],
  },
  {
    title: 'TypeScript',
    competency: 4,
    category: ['Web Development', 'Programming'],
  },
  {
    title: 'JavaScript',
    competency: 3,
    category: ['Web Development', 'Programming'],
  },
  {
    title: 'AWS DynamoDB',
    competency: 1,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 1,
    category: ['Databases'],
  },
  {
    title: 'Recharts',
    competency: 3,
    category: ['Web Development', 'Data Visualization'],
  },
  {
    title: 'Prismic CMS',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Figma',
    competency: 2,
    category: ['Design Tools'],
  },
  {
    title: 'Canva',
    competency: 3,
    category: ['Design Tools'],
  },
  {
    title: 'R',
    competency: 1,
    category: ['Data Science'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories: Category[] = Array.from(new Set(skills.flatMap(({ category }) => category)))
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
