export type Project = {
  slug: string;
  title: string;
  github: string;
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    slug: 'cool-app',
    title: 'Cool App',
    github: 'https://github.com/ynha-portfolio/cool-app',
    description: 'A small app that demonstrates a polished UI and interesting interactions.',
    tech: ['next.js', 'react', 'tailwindcss']
  },
  {
    slug: 'data-wrangler',
    title: 'Data Wrangler',
    github: 'https://github.com/ynha-portfolio/data-wrangler',
    description: 'ETL utilities and dashboards for cleaning and visualizing datasets.',
    tech: ['python', 'pandas', 'postgresql']
  },
  {
    slug: 'ml-playground',
    title: 'ML Playground',
    github: 'https://github.com/ynha-portfolio/ml-playground',
    description: 'A collection of small machine learning experiments and notebooks.',
    tech: ['python', 'tensorflow/keras', 'scikit-learn']
  }
];

export default projects;
