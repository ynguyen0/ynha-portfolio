export type Project = {
  slug: string;
  title: string;
  github?: string;
  deploy?:string;
  description: string;
  tech: string[];
  whatImBuilding?: string;
  howImBuilding?: string;
  features?: string[];
  images?: ProjectImage[];
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

const projects: Project[] = [
  {
    slug: 'media-host',
    title: 'MediaHost',
    description: 'A media hosting platform for uploading and sharing images, GIFs, and videos.',
    tech: ['next.js', 'react', 'node.js'],
    whatImBuilding: 'MediaHost brings image, GIF, and video hosting into one simple place. The goal is to make it easy to get visual media online and share it with others.',
    howImBuilding: 'The application is built with Next.js and React, with Node.js supporting its application logic. The experience is centered on a straightforward flow: upload a media file, then share it.',
    features: [
      'Upload images, GIFs, and videos.',
      'Host visual media in one place.',
      'Share hosted media with others.'
    ]
  },
  {
    slug: 'fracture-detection',
    title: 'Automated Bone Fracture Detection',
    description: 'A machine learning model for detecting fractures in medical imaging.',
    tech: ['python', 'tensorflow/keras', 'scikit-learn']
  },
  {
    slug: 'mydnage',
    title: 'myDNAge Marketing Site',
    github: 'https://github.com/ynguyen0/mydnage',
    deploy: 'https://mydnage-three.vercel.app/',
    description: 'A responsive health and wellness marketing site for MyDNAge.',
    tech: ['react', 'typescript', 'tailwind']
  },
  {
    slug: 'activity-classifier',
    title: 'Sensor Data Activity Classifier',
    github: 'https://github.com/ynguyen0/human-activity-recognition',
    description: 'A machine learning model for classifying physical activities from sensor data.',
    tech: ['python', 'tensorflow/keras', 'scikit-learn']
  },
  {
    slug: 'rental-app',
    title: 'Rental Booking and Management Platform',
    description: 'A vacation rental booking and management platform for hosts and guests.',
    tech: ['react', 'node.js', 'aws']
  },
  {
    slug: 'text-simplification',
    title: 'NLP-based Text Simplification Tool',
    github: 'https://github.com/ynguyen0/nlp-text-simplifier',
    description: 'A natural language processing tool for simplifying complex text.',
    tech: ['python', 'nltk', 'spaCy']
  }
];

export default projects;
