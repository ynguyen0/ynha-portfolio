'use client';

import {
  IconBrandPython,
  IconCode,
  IconDatabase,
  IconBrandHtml5,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandFigma,
  IconBrandVite,
  IconBrandGit,
  IconBrandAws,
  IconBrandVercel,
  IconGitBranch,
  IconSql,
  IconBrandMysql,
  IconBrandNodejs,
  IconPackage,
  IconBrain,
  IconBrandPrisma,
  IconBrandSupabase
} from '@tabler/icons-react';

const iconMap: { [key: string]: React.ReactNode } = {
  python: <IconBrandPython size={16} stroke={2} />,
  java: <IconCode size={16} stroke={2} />,
  sql: <IconSql size={16} stroke={2} />,
  'html/css': <IconBrandHtml5 size={16} stroke={2} />,
  typescript: <IconBrandTypescript size={16} stroke={2} />,
  javascript: <IconBrandJavascript size={16} stroke={2} />,
  react: <IconBrandReact size={16} stroke={2} />,
  'next.js': <IconBrandNextjs size={16} stroke={2} />,
  tailwindcss: <IconBrandTailwind size={16} stroke={2} />,
  figma: <IconBrandFigma size={16} stroke={2} />,
  vite: <IconBrandVite size={16} stroke={2} />,
  'shadcn/ui': <IconPackage size={16} stroke={2} />,
  git: <IconBrandGit size={16} stroke={2} />,
  aws: <IconBrandAws size={16} stroke={2} />,
  vercel: <IconBrandVercel size={16} stroke={2} />,
  'github actions': <IconGitBranch size={16} stroke={2} />,
  postgresql: <IconDatabase size={16} stroke={2} />,
  mysql: <IconBrandMysql size={16} stroke={2} />,
  'node.js': <IconBrandNodejs size={16} stroke={2} />,
  prisma: <IconBrandPrisma size={16} stroke={2} />,
  supabase: <IconBrandSupabase size={16} stroke={2} />,
  'tensorflow/keras': <IconBrain size={16} stroke={2} />,
  pandas: <IconPackage size={16} stroke={2} />,
  numpy: <IconPackage size={16} stroke={2} />,
  nltk: <IconBrain size={16} stroke={2} />,
  'scikit-learn': <IconBrain size={16} stroke={2} />,
  spacy: <IconBrain size={16} stroke={2} />
};

export default function TechStack() {
  const skillsData = [
    {
      title: "languages",
      skills: ["python", "java", "sql", "html/css", "typescript", "javascript"]
    },
    {
      title: "frontend & design",
      skills: ["react", "next.js", "tailwindcss", "figma", "vite", "shadcn/ui"]
    },
    {
      title: "devops & tools",
      skills: ["git", "aws", "vercel", "github actions"]
    },
    {
      title: "backend dev",
      skills: ["postgresql", "mysql", "node.js", "prisma", "supabase"]
    },
    {
      title: "ai & ml",
      skills: ["tensorflow/keras", "pandas", "numpy", "nltk", "scikit-learn", "spacy"],
      fullWidth: true
    }
  ];

  const SkillCard = ({ title, skills, fullWidth = false }: { title: string; skills: string[]; fullWidth?: boolean }) => (
    <div
      className={`rounded-lg p-6 ${fullWidth ? 'col-span-2' : ''}`}
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
    >
          <h3 style={{ fontFamily: 'var(--font-atkinson)', fontSize: '1.125rem', fontWeight: '600', marginBottom: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>{title}</span>
            </div>
          </h3>
      <hr style={{ borderColor: 'rgba(0, 0, 0, 0.1)', marginBottom: '16px', marginTop: '8px' }} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {skills.map((skill: string) => (
          <span
            key={skill}
            style={{
              fontFamily: 'var(--font-atkinson)',
              fontSize: '0.875rem',
              padding: '6px 12px',
              backgroundColor: 'rgba(52, 38, 38, 0.08)',
              border: '1px solid rgba(52, 38, 38, 0.15)',
              borderRadius: '20px',
              color: 'var(--nav-bg)',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {iconMap[skill.toLowerCase()] || <IconPackage size={16} stroke={2} />}
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="tech" className="max-w-6xl mx-auto px-4 py-24">
      <h2 className="text-4xl font-bold mb-12">
        <span style={{ fontFamily: 'var(--font-atkinson)', fontWeight: 'bold' }}>my </span>
        <span style={{ fontFamily: 'var(--font-doto)' }}>tech stack</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {skillsData.map((item, index) => (
          <SkillCard
            key={index}
            title={item.title}
            skills={item.skills}
            fullWidth={item.fullWidth}
          />
        ))}
      </div>
    </section>
  );
}
